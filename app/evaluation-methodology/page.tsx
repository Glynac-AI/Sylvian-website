// app/evaluation-methodology/page.tsx
'use client'

import Hero from '@/components/evaluation-methodology/Hero'
import MethodologySections from '@/components/evaluation-methodology/MethodologySections'
import NeutralByDesign from '@/components/evaluation-methodology/NeutralByDesign'

export default function EvaluationMethodologyPage() {
    return (
        <>
            <Hero />
            <section className="bg-white py-12 px-6 border-l-4 border-[#D9B44A]">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl italic font-serif leading-relaxed text-gray-700">
                        &ldquo;Sylvan does not rely on sponsor narratives, discretionary reporting, or retrospective explanations.&rdquo;
                    </p>
                </div>
            </section>
            <MethodologySections />
            <NeutralByDesign />
        </>
    )
}
