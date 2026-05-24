import type { Metadata } from 'next'
import './globals.css'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
