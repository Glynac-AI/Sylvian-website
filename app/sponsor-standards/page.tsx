// app/sponsor-standards/page.tsx
'use client'

import Hero from '@/components/sponsor-standards/Hero'
import StandardsSections from '@/components/sponsor-standards/StandardsSections'
import NeutralByDesign from '@/components/sponsor-standards/NeutralByDesign'

export default function SponsorStandardsPage() {
    return (
        <>
            <Hero />
            <section className="bg-[#0A3F28] text-white py-8 px-6 border-l-4 border-[#D9B44A]">
                <div className="max-w-7xl mx-auto">
                    <p className="text-lg italic font-serif leading-relaxed">
                        These standards exist to protect the integrity of the evidence and the comparability of sponsor behavior across the platform.
                    </p>
                </div>
            </section>
            <StandardsSections />
            <NeutralByDesign />
        </>
    )
}
