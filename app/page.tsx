// app/page.tsx
'use client'

import Hero from '@/components/home/Hero'
import AccelerateSection from '@/components/home/AccelerateSection'
import LockboxSection from '@/components/home/LockboxSection'
import RentalYieldsSection from '@/components/home/RentalYieldsSection'
import FeaturedPortfolios from '@/components/home/FeaturedPortfolios'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AccelerateSection />
      <LockboxSection />
      <RentalYieldsSection />
      <FeaturedPortfolios />
    </>
  )
}