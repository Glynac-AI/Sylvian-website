// app/evaluation-methodology/page.tsx
'use client'

import Hero from '@/components/evaluation-methodology/Hero'
import MethodologySections from '@/components/evaluation-methodology/MethodologySections'
import NeutralByDesign from '@/components/evaluation-methodology/NeutralByDesign'

export default function EvaluationMethodologyPage() {
    return (
        <>
            <Hero />
            <MethodologySections />
            <NeutralByDesign />
        </>
    )
}
