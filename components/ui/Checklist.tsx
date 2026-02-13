import React from 'react'

interface ChecklistProps {
  items: string[]
  className?: string
}

export default function Checklist({ items, className = '' }: ChecklistProps) {
  return (
    <ul className={`divide-y divide-slate-200 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 py-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#174F3B] text-[10px] font-semibold text-white">
            ✓
          </span>
          <span className="text-slate-700 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}
