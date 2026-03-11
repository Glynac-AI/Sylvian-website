// app/sponsors/[id]/page.tsx
import Link from 'next/link'
import { getSponsorById, getOfferingsBySponsor } from '@/lib/payload'
import SponsorDetailClient from './SponsorDetailClient'

function normalizeSponsor(s: any) {
    return {
        id: String(s.id),
        name: s.name ?? '',
        tagline: s.tagline ?? '',
        description: s.description ?? '',
        logo: s.logo?.url ?? s.logo ?? '',
        totalAUM: s.aum ?? '',
        propertiesManaged: s.propertiesManaged ?? 0,
        yearsInBusiness: s.yearsInBusiness ?? 0,
        teamSize: s.teamSize ?? '',
        historicalIRR: s.historicalIRR ?? '',
        platformAdmissionDate: s.platformAdmissionDate ?? '',
        admissionStatus: s.admissionStatus ?? 'VERIFIED',
        complianceStatus: s.complianceStatus ?? 'EXCELLENT',
        achievements: (s.achievements ?? []).map((a: any) => a.achievement ?? a),
        totalTransactions: s.totalTransactions ?? 0,
        totalCapitalDeployed: s.totalCapitalDeployed ?? '',
        transparencyCommitment: s.transparencyCommitment ?? '',
    }
}

function normalizeOffering(p: any) {
    return {
        id: String(p.id),
        title: p.title ?? '',
        image: p.image?.url ?? p.image ?? '',
        noteType: p.noteType ?? '',
        fundingStatus: p.fundingStatus ?? '',
        targetYield: p.targetYield ?? '',
        investmentTerm: p.investmentTerm ?? '',
        minimumInvestment: p.minimumInvestment ?? '',
    }
}

export default async function SponsorProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const [raw, rawOfferings] = await Promise.all([
        getSponsorById(id),
        getOfferingsBySponsor(id),
    ])
    const sponsor = raw ? { ...normalizeSponsor(raw), activeOfferings: rawOfferings.map(normalizeOffering) } : null

    if (!sponsor) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-[#111827] mb-4">Sponsor Not Found</h1>
                    <Link href="/sponsors" className="text-[#0A3F28] underline">
                        Back to Sponsors
                    </Link>
                </div>
            </div>
        )
    }

    return <SponsorDetailClient sponsor={sponsor} />
}
