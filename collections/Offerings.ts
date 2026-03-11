import type { CollectionConfig } from 'payload'

export const Offerings: CollectionConfig = {
    slug: 'offerings',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'sponsor', 'noteType', 'fundingStatus', 'targetYield'],
    },
    access: {
        read: () => true,
        create: ({ req: { user } }) => {
            if (!user) return false
            return user.role === 'admin' || user.role === 'sponsor'
        },
        update: ({ req: { user } }) => {
            if (!user) return false
            if (user.role === 'admin') return true
            if (user.role === 'sponsor') {
                return {
                    sponsor: { equals: user.sponsor },
                }
            }
            return false
        },
        delete: ({ req: { user } }) => user?.role === 'admin',
    },
    fields: [

        // ── Core ───────────────────────────────────────────────────
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'sponsor',
            type: 'relationship',
            relationTo: 'sponsors',
            required: true,
            hasMany: false,
            admin: {
                position: 'sidebar',
            },
            hooks: {
                beforeChange: [
                    ({ value, req }) => {
                        if (req.user?.role === 'sponsor' && req.user?.sponsor) {
                            return req.user.sponsor
                        }
                        return value
                    },
                ],
            },
        },
        {
            name: 'noteType',
            type: 'select',
            required: true,
            options: [
                { label: 'Senior Secured', value: 'Senior Secured' },
                { label: 'Bridge & Refinance', value: 'Bridge & Refinance' },
                { label: 'Completion', value: 'Completion' },
            ],
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'fundingStatus',
            type: 'select',
            required: true,
            defaultValue: 'Active',
            options: [
                { label: 'Active', value: 'Active' },
                { label: 'Closing Soon', value: 'Closing Soon' },
                { label: 'Closed', value: 'Closed' },
            ],
            admin: {
                position: 'sidebar',
            },
        },
        // ── Hero Image ─────────────────────────────────────────────
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },

        // ── Key Financials (card + detail page) ────────────────────
        {
            name: 'targetYield',
            type: 'text',
            required: true,
            admin: { description: 'e.g. "7.8%"' },
        },
        {
            name: 'investmentTerm',
            type: 'text',
            required: true,
            admin: { description: 'e.g. "5 years"' },
        },
        {
            name: 'minimumInvestment',
            type: 'text',
            required: true,
            admin: { description: 'e.g. "$50,000"' },
        },
        {
            name: 'totalRaise',
            type: 'text',
            required: true,
            admin: { description: 'e.g. "$18,500,000"' },
        },
        {
            name: 'fundingProgress',
            type: 'number',
            required: true,
            min: 0,
            max: 100,
            admin: { description: 'Percentage funded (0–100)' },
        },

        // ── Overview ───────────────────────────────────────────────
        {
            name: 'description',
            type: 'textarea',
        },
        {
            name: 'highlights',
            type: 'array',
            admin: {
                description: 'Bullet point highlights shown in the overview section.',
            },
            fields: [
                {
                    name: 'highlight',
                    type: 'text',
                    required: true,
                    admin: { description: 'e.g. "Average 94% occupancy rate"' },
                },
            ],
        },

        // ── Portfolio Metrics ──────────────────────────────────────
        {
            name: 'totalProperties',
            type: 'number',
            required: true,
        },
        {
            name: 'totalValue',
            type: 'text',
            admin: { description: 'e.g. "$112,000,000"' },
        },
        {
            name: 'averageOccupancy',
            type: 'text',
            admin: { description: 'e.g. "94%"' },
        },
        {
            name: 'totalSquareFeet',
            type: 'number',
            admin: { description: 'Total square footage across all properties' },
        },
        {
            name: 'totalUnits',
            type: 'number',
            admin: { description: 'Total residential units (0 for commercial-only portfolios)' },
        },
        {
            name: 'geographicMarkets',
            type: 'array',
            required: true,
            minRows: 1,
            fields: [
                {
                    name: 'market',
                    type: 'text',
                    required: true,
                    admin: { description: 'e.g. "Austin, TX"' },
                },
            ],
        },
        {
            name: 'propertyAllocation',
            type: 'array',
            admin: {
                description: 'Property type breakdown.',
            },
            fields: [
                {
                    name: 'type',
                    type: 'text',
                    required: true,
                    admin: { description: 'e.g. "Multifamily"' },
                },
                {
                    name: 'percentage',
                    type: 'number',
                    required: true,
                    min: 0,
                    max: 100,
                },
                {
                    name: 'count',
                    type: 'number',
                    admin: { description: 'Number of properties of this type' },
                },
            ],
        },

        // ── Diversification ────────────────────────────────────────
        {
            name: 'diversification',
            type: 'group',
            fields: [
                {
                    name: 'geographicDiversification',
                    type: 'text',
                    admin: { description: 'e.g. "4 markets across 4 states"' },
                },
                {
                    name: 'assetTypeDiversification',
                    type: 'text',
                    admin: { description: 'e.g. "Class A Multifamily"' },
                },
                {
                    name: 'tenantDiversification',
                    type: 'text',
                    admin: { description: 'e.g. "485+ residential tenants"' },
                },
            ],
        },

        // ── Risk Factors ───────────────────────────────────────────
        {
            name: 'riskFactors',
            type: 'array',
            admin: {
                description: 'Risk factors and mitigations shown on the detail page.',
            },
            fields: [
                {
                    name: 'risk',
                    type: 'text',
                    required: true,
                    admin: { description: 'e.g. "Interest Rate Risk"' },
                },
                {
                    name: 'description',
                    type: 'textarea',
                    required: true,
                },
                {
                    name: 'mitigation',
                    type: 'textarea',
                    required: true,
                },
            ],
        },

        // ── Individual Properties ──────────────────────────────────
        {
            name: 'properties',
            type: 'array',
            admin: {
                description: 'Individual properties in this portfolio.',
            },
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'location',
                    type: 'text',
                    required: true,
                    admin: { description: 'e.g. "Austin, TX"' },
                },
                {
                    name: 'propertyType',
                    type: 'text',
                    required: true,
                    admin: { description: 'e.g. "Multifamily"' },
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
                {
                    name: 'squareFeet',
                    type: 'number',
                },
                {
                    name: 'occupancyRate',
                    type: 'text',
                    admin: { description: 'e.g. "95%"' },
                },
                {
                    name: 'yearBuilt',
                    type: 'number',
                },
                {
                    name: 'totalUnits',
                    type: 'number',
                    admin: { description: 'Leave blank for commercial properties' },
                },
                {
                    name: 'annualRent',
                    type: 'text',
                    admin: { description: 'e.g. "$3,240,000"' },
                },
                {
                    name: 'propertyValue',
                    type: 'text',
                    admin: { description: 'e.g. "$28,500,000"' },
                },
            ],
        },

        // ── Capital Stack ──────────────────────────────────────────
        {
            name: 'capitalStack',
            type: 'array',
            admin: {
                description: 'Capital stack layers shown in the visualization.',
            },
            fields: [
                {
                    name: 'layer',
                    type: 'text',
                    required: true,
                    admin: { description: 'e.g. "Senior Debt"' },
                },
                {
                    name: 'amount',
                    type: 'text',
                    required: true,
                    admin: { description: 'e.g. "$67,200,000"' },
                },
                {
                    name: 'percentage',
                    type: 'number',
                    required: true,
                    min: 0,
                    max: 100,
                },
                {
                    name: 'description',
                    type: 'text',
                    admin: { description: 'e.g. "First in line for repayment • Lowest risk"' },
                },
                {
                    name: 'yieldRange',
                    type: 'text',
                    admin: { description: 'e.g. "5.5% - 6.0%"' },
                },
            ],
        },

        // ── Investment Structure ───────────────────────────────────
        {
            name: 'investmentStructure',
            type: 'group',
            fields: [
                {
                    name: 'structureType',
                    type: 'text',
                    admin: { description: 'e.g. "Ring-Fenced SPV Structure with Individual Lockboxes"' },
                },
                {
                    name: 'totalSeniorDebt',
                    type: 'text',
                    admin: { description: 'e.g. "$67,200,000"' },
                },
                {
                    name: 'weightedAvgLTV',
                    type: 'text',
                    admin: { description: 'e.g. "60%"' },
                },
                {
                    name: 'weightedAvgDSCR',
                    type: 'text',
                    admin: { description: 'e.g. "1.48x"' },
                },
                {
                    name: 'totalReserves',
                    type: 'text',
                    admin: { description: 'e.g. "$1,850,000"' },
                },
            ],
        },

        // ── Financials ─────────────────────────────────────────────
        {
            name: 'financials',
            type: 'group',
            fields: [
                {
                    name: 'projectedAnnualReturn',
                    type: 'text',
                    admin: { description: 'e.g. "7.8% - 8.5%"' },
                },
                {
                    name: 'cashDistributionSchedule',
                    type: 'text',
                    admin: { description: 'e.g. "Quarterly"' },
                },
                {
                    name: 'holdPeriod',
                    type: 'text',
                    admin: { description: 'e.g. "5 years"' },
                },
                {
                    name: 'exitStrategy',
                    type: 'text',
                    admin: { description: 'e.g. "Selective refinance or portfolio sale"' },
                },
                {
                    name: 'totalAnnualRent',
                    type: 'text',
                    admin: { description: 'e.g. "$12,245,000"' },
                },
            ],
        },

        // ── Documents (Data Room) ──────────────────────────────────
        {
            name: 'documents',
            type: 'array',
            admin: {
                description: 'Document categories shown in the Data Room section.',
            },
            fields: [
                {
                    name: 'category',
                    type: 'text',
                    required: true,
                    admin: { description: 'e.g. "Offering Documents"' },
                },
                {
                    name: 'files',
                    type: 'array',
                    fields: [
                        {
                            name: 'name',
                            type: 'text',
                            required: true,
                            admin: { description: 'e.g. "Portfolio Private Placement Memorandum"' },
                        },
                        {
                            name: 'size',
                            type: 'text',
                            admin: { description: 'e.g. "4.8 MB"' },
                        },
                        {
                            name: 'uploadDate',
                            type: 'date',
                        },
                        {
                            name: 'isGated',
                            type: 'checkbox',
                            defaultValue: false,
                            admin: { description: 'If checked, requires login to access.' },
                        },
                        {
                            name: 'file',
                            type: 'upload',
                            relationTo: 'media',
                            admin: { description: 'Upload the actual file (optional — can just list name/size for display).' },
                        },
                    ],
                },
            ],
        },
    ],
}