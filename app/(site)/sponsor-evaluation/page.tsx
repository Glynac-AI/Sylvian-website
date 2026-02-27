// app/sponsor-evaluation/page.tsx
'use client'

import Hero from '@/components/sponsor-evaluation/Hero'
import BehaviorSections from '@/components/sponsor-evaluation/BehaviorSections'
import OperatingRecords from '@/components/sponsor-evaluation/OperatingRecords'

export default function SponsorEvaluationPage() {
    return (
        <>
            <Hero />
            <BehaviorSections />
            <OperatingRecords />
        </>
    )
}
