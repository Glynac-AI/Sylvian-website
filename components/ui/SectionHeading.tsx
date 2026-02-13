import React from 'react'

interface SectionHeadingProps {
  line1: string
  line2: string
  align?: 'left' | 'center'
  size?: 'xl' | 'lg' | 'md'
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

const sizeClasses: Record<NonNullable<SectionHeadingProps['size']>, string> = {
  xl: 'text-4xl md:text-5xl',
  lg: 'text-3xl md:text-4xl',
  md: 'text-2xl md:text-3xl',
}

export default function SectionHeading({
  line1,
  line2,
  align = 'left',
  size = 'lg',
  className = '',
  as = 'h2',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center' : 'text-left'
  const HeadingTag = as

  return (
    <div className={`${alignment} ${className}`}>
      <HeadingTag className={`font-serif font-normal leading-tight text-slate-900 ${sizeClasses[size]}`}>
        <span className="block">{line1}</span>
        <span className="block italic text-slate-700">{line2}</span>
      </HeadingTag>
    </div>
  )
}
