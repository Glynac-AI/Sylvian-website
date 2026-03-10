import type { CollectionConfig } from 'payload'

export const Sponsors: CollectionConfig = {
    slug: 'sponsors',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'admissionStatus', 'complianceStatus', 'aum'],
    },
    access: {
        read: () => true,
        create: ({ req: { user } }) => user?.role === 'admin',
        update: ({ req: { user } }) => {
            if (!user) return false
            if (user.role === 'admin') return true
            return false
        },
        delete: ({ req: { user } }) => user?.role === 'admin',
    },
    fields: [

        // ── Core Identity ──────────────────────────────────────────
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                description: 'URL-friendly identifier e.g. "sylvan-capital". Used in /sponsors/[slug].',
            },
        },
        {
            name: 'tagline',
            type: 'text',
            admin: {
                description: 'Short one-liner shown on the sponsor card e.g. "Institutional discipline meets operational excellence"',
            },
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
        },

        // ── Platform Status (sidebar) ──────────────────────────────
        {
            name: 'admissionStatus',
            type: 'select',
            required: true,
            defaultValue: 'VERIFIED',
            options: [
                { label: 'Verified', value: 'VERIFIED' },
                { label: 'Approved', value: 'APPROVED' },
            ],
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'complianceStatus',
            type: 'select',
            required: true,
            defaultValue: 'EXCELLENT',
            options: [
                { label: 'Excellent', value: 'EXCELLENT' },
                { label: 'Good', value: 'GOOD' },
                { label: 'Monitored', value: 'MONITORED' },
            ],
            admin: {
                position: 'sidebar',
                description: 'Used for filtering on the sponsors listing page.',
            },
        },
        {
            name: 'platformAdmissionDate',
            type: 'text',
            admin: {
                position: 'sidebar',
                description: 'e.g. "January 2022"',
            },
        },

        // ── Key Metrics (shown on card) ────────────────────────────
        {
            name: 'aum',
            type: 'text',
            required: true,
            admin: {
                description: 'Total assets under management e.g. "$500M+"',
            },
        },
        {
            name: 'historicalIRR',
            type: 'text',
            admin: {
                description: 'Avg. realized IRR e.g. "14.2%"',
            },
        },
        {
            name: 'propertiesManaged',
            type: 'number',
            required: true,
        },
        {
            name: 'yearsInBusiness',
            type: 'number',
            required: true,
            admin: {
                description: 'Years of operating history',
            },
        },
        {
            name: 'teamSize',
            type: 'text',
            admin: {
                description: 'e.g. "25+ professionals"',
            },
        },
        {
            name: 'totalTransactions',
            type: 'number',
            admin: {
                description: 'Total number of transactions completed',
            },
        },
        {
            name: 'totalCapitalDeployed',
            type: 'text',
            admin: {
                description: 'e.g. "$680M"',
            },
        },

        // ── Achievements & Commitments ─────────────────────────────
        {
            name: 'achievements',
            type: 'array',
            admin: {
                description: 'Key achievements shown on the detail page.',
            },
            fields: [
                {
                    name: 'achievement',
                    type: 'text',
                    required: true,
                    admin: { description: 'e.g. "Zero payment defaults across 132+ obligations"' },
                },
            ],
        },
        {
            name: 'transparencyCommitment',
            type: 'textarea',
            admin: {
                description: 'Statement about reporting and transparency commitments.',
            },
        },

        // ── Active Offerings ───────────────────────────────────────
        {
            name: 'activePortfolios',
            type: 'relationship',
            relationTo: 'offerings',
            hasMany: true,
            admin: {
                description: 'Link the offerings that belong to this sponsor.',
            },
        },
    ],
}