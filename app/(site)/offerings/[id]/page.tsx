// app/offerings/[id]/page.tsx
import Link from 'next/link'
import { getOfferingById } from '@/lib/payload'
import OfferingDetailClient from './OfferingDetailClient'

// Normalize Payload shape to what the detail page expects
function normalize(o: any) {
    const sponsor = o.sponsor && typeof o.sponsor === 'object' ? o.sponsor : {}
    return {
        ...o,
        image: o.image?.url ?? o.image ?? '',
        portfolioMetrics: {
            totalProperties: o.totalProperties ?? 0,
            totalValue: o.totalValue ?? '',
            averageOccupancy: o.averageOccupancy ?? '',
            totalSquareFeet: o.totalSquareFeet ?? 0,
            totalUnits: o.totalUnits ?? 0,
            geographicMarkets: (o.geographicMarkets ?? []).map((m: any) => m.market ?? m),
        },
        highlights: (o.highlights ?? []).map((h: any) => h.highlight ?? h),
        properties: (o.properties ?? []).map((p: any) => ({
            ...p,
            image: p.image?.url ?? p.image ?? '',
        })),
        diversification: o.diversification ?? {},
        riskFactors: o.riskFactors ?? [],
        capitalStack: o.capitalStack ?? [],
        investmentStructure: o.investmentStructure ?? {},
        financials: o.financials ?? {},
        documents: o.documents ?? [],
        sponsorProfile: {
            name: sponsor.name ?? '',
            totalAUM: sponsor.aum ?? '',
            historicalPerformance: sponsor.historicalIRR ? `Avg. Realized IRR: ${sponsor.historicalIRR}` : '',
            propertiesManaged: sponsor.propertiesManaged ?? 0,
            yearsInBusiness: sponsor.yearsInBusiness ?? 0,
            teamSize: sponsor.teamSize ?? '',
            description: sponsor.description ?? '',
        },
    }
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const raw = await getOfferingById(id)
    const portfolio = raw ? normalize(raw) : null

    if (!portfolio) {
        return (
            <div className="min-h-screen bg-[#F3F4F1] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-[#095520] mb-4">Portfolio Not Found</h1>
                    <Link href="/offerings" className="text-[#095520] underline">
                        Back to Offerings
                    </Link>
                </div>
            </div>
        )
    }

    return <OfferingDetailClient portfolio={portfolio} />
}
