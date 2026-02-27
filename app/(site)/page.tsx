// app/page.tsx
'use client'

import Hero from '@/components/home/Hero'
import StatementSection from '@/components/home/StatementSection'
import MainFeatures from '@/components/home/MainFeatures'
import ProductStructures from '@/components/home/ProductStructures'
import WhatSylvanTracks from '@/components/home/WhatSylvanTracks'
import ClosingCTA from '@/components/home/ClosingCTA'

export default function HomePage() {
  return (
    <main className="antialiased">
      <Hero />
      <StatementSection />
      <MainFeatures />
      <ProductStructures />
      <WhatSylvanTracks />
      <ClosingCTA />
    </main>
  )
}
