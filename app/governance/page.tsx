'use client'

import CIOFramework from "@/components/governance/CIOFramework"
import End from "@/components/governance/End"
import Hero from "@/components/governance/Hero"
import Materials from "@/components/governance/Materials"
import StandardsControls from "@/components/governance/StandardsControls"

export default function Governance() {
    return(
        <>
            <Hero/>
            <CIOFramework/>
            <StandardsControls/>
            <Materials/>
            <End/>
        </>
    )
}