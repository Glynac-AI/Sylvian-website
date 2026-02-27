import type { CollectionConfig } from 'payload'

export const Offerings: CollectionConfig = {
    slug: 'offerings',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'sponsor', 'noteType', 'fundingStatus', 'targetYield'],
    },
    access: {
        // Everyone can read offerings (public listing page)
        read: () => true,
        // Admins can create any; sponsors can create their own
        create: ({ req: { user } }) => {
            if (!user) return false
            return user.role === 'admin' || user.role === 'sponsor'
        },
        // Admins can update any; sponsors can only update offerings that belong to them
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
        // Only admins can delete
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
                description: 'Which sponsor is offering this.',
            },
            // Auto-assign sponsor for sponsor-role users
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

        // ── Financials ─────────────────────────────────────────────
        {
            name: 'targetYield',
            type: 'text',
            required: true,
            admin: {
                description: 'e.g. "8.5%"',
            },
        },
        {
            name: 'investmentTerm',
            type: 'text',
            required: true,
            admin: {
                description: 'e.g. "24 Months"',
            },
        },
        {
            name: 'minimumInvestment',
            type: 'text',
            required: true,
            admin: {
                description: 'e.g. "$50,000"',
            },
        },
        {
            name: 'totalRaise',
            type: 'text',
            required: true,
            admin: {
                description: 'e.g. "$12,000,000"',
            },
        },
        {
            name: 'fundingProgress',
            type: 'number',
            required: true,
            min: 0,
            max: 100,
            admin: {
                description: 'Percentage funded (0–100)',
            },
        },

        // ── Card visuals ───────────────────────────────────────────
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },

        // ── Portfolio metrics (shown on card) ──────────────────────
        {
            name: 'totalProperties',
            type: 'number',
            required: true,
        },
        {
            name: 'geographicMarkets',
            type: 'array',
            required: true,
            minRows: 1,
            admin: {
                description: 'Markets this offering covers e.g. "Austin, TX"',
            },
            fields: [
                {
                    name: 'market',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'propertyAllocation',
            type: 'array',
            admin: {
                description: 'Property type breakdown shown on the card.',
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
            ],
        },

        // ── Description ────────────────────────────────────────────
        {
            name: 'description',
            type: 'textarea',
        },
    ],
}
