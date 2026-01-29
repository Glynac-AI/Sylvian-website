// app/page.tsx
'use client'

import Hero from '@/components/home/Hero'
import OpeningSection from '@/components/home/OpeningSection'
import ValuePropositions from '@/components/home/ValuePropositions'
import ProductStructures from '@/components/home/ProductStructures'
import WhatSylvanTracks from '@/components/home/WhatSylvanTracks'

export default function HomePage() {
  return (
    <>
      <Hero />
      <OpeningSection />
      <ValuePropositions />
      <ProductStructures />
      <WhatSylvanTracks />
    </>
  )
}
