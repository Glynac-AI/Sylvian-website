'use client'

import End from "@/components/operations/End"
import Hero from "@/components/operations/Hero"
import Mid from "@/components/operations/Mid"
import SetupSettlement from "@/components/operations/SetupSettlement"
import TheThree from "@/components/operations/TheThree"

export default function Operations() {
    return (
        <>
            <Hero/>
            <SetupSettlement/>
            <Mid/>
            <TheThree/>
            <End/>
        </>
    )
}
