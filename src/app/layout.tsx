import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'

const kanit = Kanit({
  weight: ['300', '400'],
  subsets: ['latin', 'thai'],
  display: 'swap',
  variable: '--font-kanit',
})

export const metadata: Metadata = {
  title: 'Phisit — Sleek EV Portfolio',
  description: 'Portfolio of work done at Sleek EV — IoT, Mobile, Web, Finance, Fleet Management & Insights',
  keywords: ['portfolio', 'sleek ev', 'electric vehicle', 'iot', 'react native', 'nextjs'],
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
