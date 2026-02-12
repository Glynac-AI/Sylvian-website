// app/how-investors-use-sylvan/page.tsx
'use client'

import Hero from '@/components/how-investors-use-sylvan/Hero'
import UseCaseSections from '@/components/how-investors-use-sylvan/UseCaseSections'
import ClosingCTA from '@/components/how-investors-use-sylvan/ClosingCTA'

export default function HowInvestorsUseSylvanPage() {
    return (
        <>
            <Hero />
            <section className="bg-[#0A3F28] text-white py-8 px-6 border-l-4 border-[#D9B44A]">
                <div className="max-w-7xl mx-auto">
                    <p className="text-lg italic font-serif leading-relaxed">
                        Investors use Sylvan's standardized sponsor operating records to make their own informed decisions.
                    </p>
                </div>
            </section>
            <UseCaseSections />
            <ClosingCTA />
        </>
    )
}
