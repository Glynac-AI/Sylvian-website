import React from 'react'

interface ArrowListProps {
  items: string[]
  className?: string
}

export default function ArrowList({ items, className = '' }: ArrowListProps) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-slate-700">
          <span className="mt-0.5 text-[#7A7F76]">→</span>
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}
