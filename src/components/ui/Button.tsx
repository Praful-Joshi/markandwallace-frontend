import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost'

type Props = {
  variant?: Variant
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const variants: Record<Variant, string> = {
  primary: 'bg-indigo-500 text-white',
  ghost: 'bg-transparent text-white/70',
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`
          rounded-full px-5 py-3
          ${variants[variant]}
          ${className}
        `}
    >
      {children}
    </button>
  )
}
