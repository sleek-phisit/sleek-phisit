'use client'

import { useInView } from '@/hooks/useInView'

type AnimType = 'fly' | 'fade' | 'zoom'

export default function Animate({
  children,
  type = 'fly',
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  type?: AnimType
  delay?: number
  className?: string
}) {
  const { ref, inView } = useInView()

  const base =
    type === 'fly'
      ? 'reveal'
      : type === 'fade'
        ? 'reveal-fade'
        : 'reveal-zoom'

  return (
    <div
      ref={ref}
      className={`${base} ${inView ? 'in-view' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
