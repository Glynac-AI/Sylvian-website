// app/how-investors-use-sylvan/page.tsx
'use client'

import Hero from '@/components/how-investors-use-sylvan/Hero'
import UseCaseSections from '@/components/how-investors-use-sylvan/UseCaseSections'
import ClosingCTA from '@/components/how-investors-use-sylvan/ClosingCTA'

export default function HowInvestorsUseSylvanPage() {
    return (
        <>
            <Hero />
            <section className="bg-white py-12 px-6 border-l-4 border-[#D9B44A]">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl italic font-serif leading-relaxed text-gray-700">
                        &ldquo;Investors use Sylvan's standardized sponsor operating records to make their own informed decisions.&rdquo;
                    </p>
                </div>
            </section>
            <UseCaseSections />
            <ClosingCTA />
        </>
    )
}
