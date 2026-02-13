import React from 'react'

interface BannerQuoteProps {
  children: React.ReactNode
  className?: string
  backgroundClassName?: string
}

export default function BannerQuote({
  children,
  className = '',
  backgroundClassName = 'bg-[#F5F5F3]',
}: BannerQuoteProps) {
  return (
    <div className={`${backgroundClassName} px-10 py-12 ${className}`}>
      <div className="flex items-start gap-6">
        <div className="h-full w-[3px] bg-[#C6A64A]" />
        <div className="font-serif italic text-slate-800 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}
