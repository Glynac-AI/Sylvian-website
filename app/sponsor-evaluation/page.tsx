// app/sponsor-evaluation/page.tsx
'use client'

import Hero from '@/components/sponsor-evaluation/Hero'
import BehaviorSections from '@/components/sponsor-evaluation/BehaviorSections'
import OperatingRecords from '@/components/sponsor-evaluation/OperatingRecords'

export default function SponsorEvaluationPage() {
    return (
        <>
            <Hero />
            <section className="bg-[#0A3F28] text-white py-8 px-6 border-l-4 border-[#D9B44A]">
                <div className="max-w-7xl mx-auto">
                    <p className="text-lg italic font-serif leading-relaxed">
                        Sponsor behavior is the only reliable predictor of sponsor behavior.
                    </p>
                </div>
            </section>
            <BehaviorSections />
            <OperatingRecords />
        </>
    )
}
