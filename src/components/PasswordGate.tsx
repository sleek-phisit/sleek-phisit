'use client'

import { useState, useEffect } from 'react'

const PASSWORD = 'Phisit'
const STORAGE_KEY = 'portfolio_auth'

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (sessionStorage.getItem(STORAGE_KEY) === '1') {
      setUnlocked(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, '1')
      setUnlocked(true)
    } else {
      setError(true)
      setInput('')
      setTimeout(() => setError(false), 2000)
    }
  }

  // avoid flash before sessionStorage check
  if (!mounted) return null

  if (unlocked) return <>{children}</>

  return (
    <div className="min-h-[100svh] flex items-center justify-center px-6 bg-surface-DEFAULT">
      {/* background grid */}
      <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#1D4ED8 1px, transparent 1px), linear-gradient(90deg, #1D4ED8 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-light/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-brand items-center justify-center text-heading text-white mb-4 breath">
            P
          </div>
          <div className="text-heading text-ink">Phisit K.</div>
          <div className="text-body text-ink-muted mt-1">Tech Project Lead · Sleek EV</div>
        </div>

        <div className="bg-white border border-surface-border rounded-2xl p-8 shadow-sm">
          <div className="text-body text-ink-muted text-center mb-6">
            กรุณาใส่รหัสผ่านเพื่อดูข้อมูล
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Password"
              className={`w-full bg-white border rounded-lg px-4 py-2.5 text-body text-ink placeholder-ink-faint focus:outline-none transition-colors ${
                error ? 'border-red-400 shake' : 'border-surface-border focus:border-brand'
              }`}
            />

            {error && (
              <p className="text-body text-red-500 text-center">รหัสผ่านไม่ถูกต้อง</p>
            )}

            <button
              type="submit"
              className="w-full bg-brand text-white text-body py-2.5 rounded-lg hover:bg-brand-dark transition-colors duration-200"
            >
              เข้าสู่ระบบ
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
