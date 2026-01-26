import type { ReactNode } from 'react'

type Variant = 'heading' | 'subheading' | 'body' | 'muted'

type Props = {
  variant?: Variant
  children: ReactNode
  className?: string
}

const variants: Record<Variant, string> = {
  heading: 'text-3xl font-bold text-white',
  subheading: 'text-lg font-medium text-white',
  body: 'text-base text-white',
  muted: 'text-sm text-white/70',
}

export function Text({ variant = 'body', children, className = '' }: Props) {
  return <p className={`${variants[variant]} ${className}`}>{children}</p>
}
