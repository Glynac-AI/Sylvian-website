// app/sponsors/page.tsx
export const dynamic = 'force-dynamic'

import { getSponsors } from '@/lib/payload'
import SponsorsClient from './SponsorsClient'

// Mock operating record — no input pipeline exists yet
const mockOperatingRecord = {
    paymentBehavior: { onTimeRate: 98.5 },
    reserveDiscipline: { currentAdequacy: 108 },
    disclosureBehavior: { transparencyRating: 'TOP TIER' as const },
}

function normalize(s: any) {
    const portfolioIds = (s.activePortfolios ?? []).map((p: any) =>
        typeof p === 'object' ? p.id : p
    )
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
        activePortfolios: portfolioIds,
        platformAdmissionDate: s.platformAdmissionDate ?? '',
        admissionStatus: s.admissionStatus ?? 'VERIFIED',
        complianceStatus: s.complianceStatus ?? 'EXCELLENT',
        achievements: (s.achievements ?? []).map((a: any) => a.achievement ?? a),
        totalTransactions: s.totalTransactions ?? 0,
        totalCapitalDeployed: s.totalCapitalDeployed ?? '',
        transparencyCommitment: s.transparencyCommitment ?? '',
        operatingRecord: mockOperatingRecord,
        team: [],
        investmentStrategy: '',
        coreMarkets: [],
        assetClassFocus: [],
    }
}

export default async function SponsorsPage() {
    const raw = await getSponsors()
    const sponsors = raw.map(normalize)

    return <SponsorsClient sponsors={sponsors} />
}
