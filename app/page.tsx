// app/page.tsx
'use client'

import Hero from '@/components/home/Hero'
import StatementSection from '@/components/home/StatementSection'
import MainFeatures from '@/components/home/MainFeatures'
import AccelerateSection from '@/components/home/AccelerateSection'
import MeasurementSystemSection from '@/components/home/MeasurementSystemSection'
import ClosingCTA from '@/components/home/ClosingCTA'

export default function HomePage() {
  return (
    <main className="antialiased">
      <Hero />
      <StatementSection />
      <MainFeatures />
      <AccelerateSection />
      <MeasurementSystemSection />
      <ClosingCTA />
    </main>
  )
}
