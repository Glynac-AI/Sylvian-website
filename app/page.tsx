import Hero from '@/components/home/Hero'
import OverviewSection from '@/components/home/OverviewSection'
import FrameworkSection from '@/components/home/FrameworkSection'
import ActionSection from '@/components/home/ActionSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <OverviewSection />
      <FrameworkSection />
      <ActionSection />
    </>
  )
}