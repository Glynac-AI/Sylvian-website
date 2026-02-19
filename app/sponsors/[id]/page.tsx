// app/sponsors/[id]/page.tsx
'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SponsorHero from '@/components/sponsors/SponsorHero'
import SponsorDetailsTab from '@/components/sponsors/SponsorDetailsTab'
import SponsorOverview from '@/components/sponsors/SponsorOverview'
import SponsorPortfolio from '@/components/sponsors/SponsorPortfolio'
import SponsorCTA from '@/components/sponsors/SponsorCTA'
import { getSponsorById } from '@/data/mockSponsors'

export default function SponsorProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params)
    const sponsor = getSponsorById(parseInt(resolvedParams.id))

    if (!sponsor) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-[#111827] mb-4">Sponsor Not Found</h1>
                    <Link href="/offerings" className="text-[#0A3F28] underline">
                        Back to Offerings
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-white">
            <SponsorHero sponsor={sponsor} />
            <SponsorOverview sponsor={sponsor} />
            <SponsorDetailsTab operatingRecord={sponsor.operatingRecord} />
            <SponsorPortfolio portfolioIds={sponsor.activePortfolios} sponsorName={sponsor.name} />
            <SponsorCTA sponsorName={sponsor.name} portfolioIds={sponsor.activePortfolios} />
        </main>
    )
}
