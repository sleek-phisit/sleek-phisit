'use client'

import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'

type Status = 'idle' | 'loading' | 'success' | 'error'

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''

export default function LeadForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const set = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // reCAPTCHA is optional — skip if site key not configured
      if (RECAPTCHA_KEY && recaptchaRef.current) {
        const captchaToken = await recaptchaRef.current.executeAsync()
        recaptchaRef.current.reset()
        if (!captchaToken) {
          setStatus('error')
          return
        }
      }

      await addDoc(collection(db, 'leads'), {
        name:      form.name,
        email:     form.email,
        phone:     form.phone || null,
        message:   form.message,
        source:    'portfolio',
        createdAt: serverTimestamp(),
      })

      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      console.error('LeadForm error:', err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-brand-light border border-brand-muted rounded-2xl p-10 text-center">
        <div className="text-3xl mb-3">✓</div>
        <div className="text-heading text-ink mb-2">ส่งข้อความสำเร็จ</div>
        <p className="text-body text-ink-muted mb-6">ได้รับข้อความแล้ว จะติดต่อกลับเร็ว ๆ นี้ครับ</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-body text-brand border border-brand-muted px-5 py-2 rounded-lg hover:bg-white transition-colors"
        >
          ส่งใหม่อีกครั้ง
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-body text-ink-muted mb-1.5">
            ชื่อ <span className="text-brand">*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={set('name')}
            placeholder="ชื่อ-นามสกุล"
            className="w-full bg-white border border-surface-border rounded-lg px-4 py-2.5 text-body text-ink placeholder-ink-faint focus:outline-none focus:border-brand transition-colors"
          />
        </div>
        <div>
          <label className="block text-body text-ink-muted mb-1.5">
            อีเมล <span className="text-brand">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={set('email')}
            placeholder="email@example.com"
            className="w-full bg-white border border-surface-border rounded-lg px-4 py-2.5 text-body text-ink placeholder-ink-faint focus:outline-none focus:border-brand transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-body text-ink-muted mb-1.5">เบอร์โทรศัพท์</label>
        <input
          type="tel"
          value={form.phone}
          onChange={set('phone')}
          placeholder="0812345678"
          className="w-full bg-white border border-surface-border rounded-lg px-4 py-2.5 text-body text-ink placeholder-ink-faint focus:outline-none focus:border-brand transition-colors"
        />
      </div>

      <div>
        <label className="block text-body text-ink-muted mb-1.5">
          ข้อความ <span className="text-brand">*</span>
        </label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={set('message')}
          placeholder="สนใจพูดคุยเรื่อง..."
          className="w-full bg-white border border-surface-border rounded-lg px-4 py-2.5 text-body text-ink placeholder-ink-faint focus:outline-none focus:border-brand transition-colors resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-body text-red-500">เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง</p>
      )}

      <div className="flex items-center justify-between gap-4">
        <p className="text-body text-ink-faint">
          ข้อมูลของคุณจะถูกใช้เพื่อติดต่อกลับเท่านั้น
        </p>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex-shrink-0 bg-brand text-white text-body px-7 py-2.5 rounded-lg hover:bg-brand-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {status === 'loading' ? 'กำลังส่ง...' : 'ส่งข้อความ'}
        </button>
      </div>

      {RECAPTCHA_KEY && (
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={RECAPTCHA_KEY}
          size="invisible"
          badge="bottomright"
        />
      )}
    </form>
  )
}
