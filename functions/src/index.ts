import * as functions from 'firebase-functions'
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

const ses = new SESClient({
  region: process.env.AWS_SES_REGION ?? 'ap-southeast-1',
  credentials: {
    accessKeyId:     process.env.AWS_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
  },
})

async function verifyRecaptcha(token: string): Promise<boolean> {
  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    { method: 'POST' },
  )
  const data = await res.json() as { success: boolean }
  return data.success
}

export const contactForm = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(204).send('')
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { name, email, phone, message, captchaToken } = req.body as {
    name?: string
    email?: string
    phone?: string
    message?: string
    captchaToken?: string
  }

  if (!name || !email || !message || !captchaToken) {
    res.status(400).json({ error: 'Missing required fields' })
    return
  }

  try {
    const captchaOk = await verifyRecaptcha(captchaToken)
    if (!captchaOk) {
      res.status(400).json({ error: 'reCAPTCHA verification failed' })
      return
    }

    const fromEmail = process.env.SES_FROM_EMAIL ?? ''
    const toEmail   = process.env.SES_TO_EMAIL   ?? ''

    await ses.send(new SendEmailCommand({
      Source:      fromEmail,
      Destination: { ToAddresses: [toEmail] },
      ReplyToAddresses: [email],
      Message: {
        Subject: { Data: `[Portfolio] ข้อความจาก ${name}` },
        Body: {
          Html: {
            Data: `
              <h2 style="color:#1D4ED8">New contact — Sleek EV Portfolio</h2>
              <table cellpadding="8" style="border-collapse:collapse">
                <tr><td><strong>Name</strong></td><td>${name}</td></tr>
                <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td><strong>Phone</strong></td><td>${phone ?? '-'}</td></tr>
              </table>
              <hr>
              <p><strong>Message:</strong></p>
              <p style="white-space:pre-wrap;line-height:1.6">${message.replace(/</g, '&lt;')}</p>
            `,
          },
          Text: {
            Data: `Name: ${name}\nEmail: ${email}\nPhone: ${phone ?? '-'}\n\n${message}`,
          },
        },
      },
    }))

    res.json({ success: true })
  } catch (err) {
    console.error('contactForm error', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})
