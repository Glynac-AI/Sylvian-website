'use client'

import SponsorHero from '@/components/sponsors/SponsorHero'
import SponsorDetailsTab from '@/components/sponsors/SponsorDetailsTab'
import SponsorOverview from '@/components/sponsors/SponsorOverview'
import SponsorPortfolio from '@/components/sponsors/SponsorPortfolio'
import SponsorCTA from '@/components/sponsors/SponsorCTA'
import { mockSponsors } from '@/data/mockSponsors'

interface Offering {
    id: string
    title: string
    image: string
    noteType: string
    fundingStatus: string
    targetYield: string
    investmentTerm: string
    minimumInvestment: string
}

interface SponsorDetailClientProps {
    sponsor: {
        id: string
        name: string
        tagline: string
        description: string
        logo: string
        totalAUM: string
        propertiesManaged: number
        yearsInBusiness: number
        teamSize: string
        historicalIRR: string
        activeOfferings: Offering[]
        platformAdmissionDate: string
        admissionStatus: string
        complianceStatus: string
        achievements: string[]
        totalTransactions: number
        totalCapitalDeployed: string
        transparencyCommitment: string
    }
}

// Mock operating record — no input pipeline exists yet
const mockOperatingRecord = mockSponsors[0].operatingRecord

export default function SponsorDetailClient({ sponsor }: SponsorDetailClientProps) {
    return (
        <main className="min-h-screen bg-white">
            <SponsorHero sponsor={sponsor} />
            <SponsorOverview sponsor={sponsor} />
            <SponsorDetailsTab operatingRecord={mockOperatingRecord} />
            <SponsorPortfolio offerings={sponsor.activeOfferings} sponsorName={sponsor.name} />
            <SponsorCTA sponsorName={sponsor.name} offeringCount={sponsor.activeOfferings.length} />
        </main>
    )
}
