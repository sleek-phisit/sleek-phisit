import type { Metadata, Viewport } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'

const kanit = Kanit({
  weight: ['300', '400'],
  subsets: ['latin', 'thai'],
  display: 'swap',
  variable: '--font-kanit',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Phisit — Sleek EV Portfolio',
  description: 'Portfolio of work done at Sleek EV — IoT, Mobile, Web, Finance, Fleet Management & Insights',
  keywords: ['portfolio', 'sleek ev', 'electric vehicle', 'iot', 'react native', 'nextjs'],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Phisit Portfolio',
  },
  icons: {
    apple: '/icons/apple-touch-icon.png',
    icon: '/icons/icon-192.png',
  },
  openGraph: {
    title: 'Phisit — Sleek EV Portfolio',
    description: 'Portfolio of work done at Sleek EV',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={kanit.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
