// app/sponsor-standards/page.tsx
'use client'

import Hero from '@/components/sponsor-standards/Hero'
import StandardsSections from '@/components/sponsor-standards/StandardsSections'
import NeutralByDesign from '@/components/sponsor-standards/NeutralByDesign'

export default function SponsorStandardsPage() {
    return (
        <>
            <Hero />
            <StandardsSections />
            <NeutralByDesign />
        </>
    )
}
