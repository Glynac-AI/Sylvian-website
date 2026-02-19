// data/mockSponsors.ts

export interface PaymentEvent {
    month: string
    status: 'on-time' | 'late' | 'injection'
    daysLate?: number
    amount?: string
}

export interface LiquidityEvent {
    date: string
    event: string
    amount: string
    speedDays: number
}

export interface ForecastRevisionEvent {
    date: string
    rationale: string
    noiImpact: string | null
    irrImpactBps: number
    analystNote: string
}

export interface SystemicMetric {
    label: string
    fillPct: number
    color: 'red' | 'orange' | 'green'
    statusLabel: string
}

export interface SponsorOperatingRecord {
    paymentBehavior: {
        onTimeRate: number
        totalPayments: number
        latePayments: number
        sponsorInjections: number
        last12Months: PaymentEvent[]
        liquidityEvents: LiquidityEvent[]
        avgResponseDays: number
    }
    reserveDiscipline: {
        currentAdequacy: number
        requiredReserves: string
        actualReserves: string
        managementStyle: 'PROACTIVE' | 'REACTIVE'
        injectionsLTM: number
        bufferAmount: string
        historicalAdequacy: number[]
    }
    forecastAccuracy: {
        averageVariance: number
        varianceTrend: 'improving' | 'stable' | 'declining'
        reforecastFrequency: string
        lastVariance: number
        revisionEvents: ForecastRevisionEvent[]
        volatilityIndex: number
        dataConfidence: 'High' | 'Medium' | 'Low'
        volatilityTrend: { label: string; value: number }[]
    }
    disclosureBehavior: {
        avgDays: number
        worstInstanceDays: number
        worstInstanceQuarter: string
        quarterlyTrend: { label: string; days: number }[]
        transparencyRating: 'TOP TIER' | 'STRONG' | 'ADEQUATE'
        issueCount: number
        proactiveCount: number
        totalEvents: number
        exampleEvent?: { issue: string; resolution: string }
    }
    consistencyOverTime: {
        activeDealCount: number
        consistencyRating: 'EXCELLENT' | 'STRONG' | 'ADEQUATE'
        trend: 'IMPROVING' | 'STABLE' | 'DECLINING'
        dealPerformance: {
            dealName: string
            status: 'OK' | 'LATE' | 'ISSUE' | 'INJECTION'
        }[]
    }
    systemicRecurrence: {
        riskDetected: boolean
        analystNote: string
        metrics: SystemicMetric[]
    }
}

export interface TeamMember {
    name: string
    role: string
    experience: string
    bio: string
}

export interface Sponsor {
    id: number
    name: string
    tagline: string
    description: string
    logo?: string
    totalAUM: string
    propertiesManaged: number
    yearsInBusiness: number
    teamSize: string
    historicalIRR: string
    activePortfolios: number[] // Array of portfolio IDs
    operatingRecord: SponsorOperatingRecord
    team: TeamMember[]
    investmentStrategy: string
    coreMarkets: string[]
    assetClassFocus: string[]
    // Platform credentials
    platformAdmissionDate: string
    admissionStatus: 'APPROVED' | 'VERIFIED'
    complianceStatus: 'EXCELLENT' | 'GOOD' | 'MONITORED'
    // Key achievements
    achievements: string[]
    totalTransactions: number
    totalCapitalDeployed: string
    // Transparency commitment
    transparencyCommitment: string
}

export const mockSponsors: Sponsor[] = [
    {
        id: 1,
        name: 'Sylvan Capital',
        tagline: 'Institutional discipline meets operational excellence',
        description: 'Sylvan Capital is a vertically integrated real estate investment and management firm specializing in multifamily and commercial properties across high-growth markets. Our experienced team combines institutional-grade underwriting with hands-on asset management to deliver consistent, risk-adjusted returns.',
        totalAUM: '$500M+',
        propertiesManaged: 45,
        yearsInBusiness: 12,
        teamSize: '25+ professionals',
        historicalIRR: '14.2%',
        activePortfolios: [1, 2, 3],
        investmentStrategy: 'Core-plus and value-add strategies focused on cash-flowing assets in high-growth markets with strong demographic tailwinds.',
        coreMarkets: ['Austin, TX', 'Phoenix, AZ', 'Charlotte, NC', 'Nashville, TN', 'Denver, CO', 'Atlanta, GA'],
        assetClassFocus: ['Multifamily', 'Commercial Office', 'Mixed-Use'],
        platformAdmissionDate: 'January 2022',
        admissionStatus: 'VERIFIED',
        complianceStatus: 'EXCELLENT',
        achievements: [
            'Zero payment defaults across 132+ obligations',
            'Maintained reserves above 105% for 36 consecutive months',
            'Sub-12 hour average disclosure time on material events',
            'Consistent performance across 8 active obligations'
        ],
        totalTransactions: 47,
        totalCapitalDeployed: '$680M',
        transparencyCommitment: 'Committed to real-time reporting, proactive disclosure, and standardized operating frameworks. All obligations operate under ring-fenced SPV structures with mandatory covenant compliance and monthly investor reporting.',
        operatingRecord: {
            paymentBehavior: {
                onTimeRate: 98.5,
                totalPayments: 132,
                latePayments: 2,
                sponsorInjections: 3,
                last12Months: [
                    { month: 'JAN', status: 'on-time' },
                    { month: 'FEB', status: 'on-time' },
                    { month: 'MAR', status: 'on-time' },
                    { month: 'APR', status: 'on-time' },
                    { month: 'MAY', status: 'on-time' },
                    { month: 'JUN', status: 'on-time' },
                    { month: 'JUL', status: 'on-time' },
                    { month: 'AUG', status: 'on-time' },
                    { month: 'SEP', status: 'injection', amount: '$125k' },
                    { month: 'OCT', status: 'on-time' },
                    { month: 'NOV', status: 'injection', amount: '$51k' },
                    { month: 'DEC', status: 'on-time' }
                ],
                liquidityEvents: [
                    { date: 'Aug 14', event: 'Debt Shortfall', amount: '$45,000', speedDays: 2 },
                    { date: 'Feb 01', event: 'Reserve Dip', amount: '$12,500', speedDays: 1 },
                    { date: 'Nov 10', event: 'Constr. Overrun', amount: '$115,000', speedDays: 5 },
                ],
                avgResponseDays: 1.8
            },
            reserveDiscipline: {
                currentAdequacy: 108,
                requiredReserves: '$2.8M',
                actualReserves: '$3.0M',
                managementStyle: 'PROACTIVE',
                injectionsLTM: 0,
                bufferAmount: '+$200k',
                historicalAdequacy: [108, 110, 107, 109, 106, 113, 111, 108, 111, 114, 115, 113]
            },
            forecastAccuracy: {
                averageVariance: -4.2,
                varianceTrend: 'stable',
                reforecastFrequency: 'Quarterly with immediate adjustments when needed',
                lastVariance: -3.8,
                revisionEvents: [
                    { date: 'Aug 10, 2025', rationale: 'Global Model Update', noiImpact: '-5.2%', irrImpactBps: -150, analystNote: 'Insurance premiums +40%' },
                    { date: 'Feb 15, 2025', rationale: 'Project Helix Re-Budget', noiImpact: null, irrImpactBps: -25, analystNote: 'Added $500k contingency' },
                ],
                volatilityIndex: 3.2,
                dataConfidence: 'High',
                volatilityTrend: [
                    { label: 'Q1 24', value: 1.1 },
                    { label: 'Q2 24', value: -1.0 },
                    { label: 'Q3 24', value: 2.1 },
                    { label: 'Q4 24', value: 0.5 },
                    { label: 'Q1 25', value: -1.8 },
                    { label: 'Q2 25', value: 0.2 },
                ]
            },
            disclosureBehavior: {
                avgDays: 1.4,
                worstInstanceDays: 35,
                worstInstanceQuarter: 'Q3 2024',
                quarterlyTrend: [
                    { label: 'Q1 24', days: 1.2 },
                    { label: 'Q2 24', days: 1.5 },
                    { label: 'Q3 24', days: 35 },
                    { label: 'Q4 24', days: 1.3 },
                    { label: 'Q1 25', days: 1.6 },
                ],
                transparencyRating: 'TOP TIER',
                issueCount: 3,
                proactiveCount: 11,
                totalEvents: 12,
            },
            consistencyOverTime: {
                activeDealCount: 8,
                consistencyRating: 'EXCELLENT',
                trend: 'STABLE',
                dealPerformance: [
                    { dealName: 'DEAL A', status: 'OK' },
                    { dealName: 'DEAL B', status: 'OK' },
                    { dealName: 'DEAL C', status: 'OK' },
                    { dealName: 'DEAL D', status: 'OK' },
                    { dealName: 'DEAL E', status: 'OK' },
                    { dealName: 'DEAL F', status: 'OK' },
                    { dealName: 'DEAL G', status: 'INJECTION' },
                    { dealName: 'DEAL H', status: 'OK' }
                ]
            },
            systemicRecurrence: {
                riskDetected: true,
                analystNote: 'Reporting delays are systemic (affecting 5/5 assets). Budget issues are localized to Metro Lofts & West End.',
                metrics: [
                    { label: 'Reporting Timeliness', fillPct: 40, color: 'red', statusLabel: 'Critical' },
                    { label: 'Budget Adherence', fillPct: 60, color: 'orange', statusLabel: 'Watchlist' },
                    { label: 'Payment Reliability', fillPct: 100, color: 'green', statusLabel: 'Healthy' },
                ]
            }
        },
        team: [
            {
                name: 'Michael Chen',
                role: 'Founder & CEO',
                experience: '18 years in real estate investment',
                bio: 'Previously served as Managing Director at a $2B institutional fund. Led over $500M in real estate transactions across multiple asset classes.'
            },
            {
                name: 'Sarah Rodriguez',
                role: 'Chief Investment Officer',
                experience: '15 years in acquisitions and underwriting',
                bio: 'Former VP of Acquisitions at a national REIT. Specialized in multifamily and mixed-use developments in high-growth markets.'
            },
            {
                name: 'David Thompson',
                role: 'Head of Asset Management',
                experience: '12 years in property operations',
                bio: 'Built and scaled asset management teams for institutional platforms. Focus on operational excellence and value creation.'
            },
            {
                name: 'Jennifer Park',
                role: 'CFO',
                experience: '14 years in real estate finance',
                bio: 'Former Controller at a multi-billion dollar real estate firm. Expert in fund accounting, compliance, and investor reporting.'
            }
        ]
    }
]

// Helper function to get sponsor by ID
export function getSponsorById(id: number): Sponsor | undefined {
    return mockSponsors.find(sponsor => sponsor.id === id)
}
