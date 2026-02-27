import type { CollectionConfig } from 'payload'

export const Sponsors: CollectionConfig = {
    slug: 'sponsors',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'location', 'strategy', 'rating'],
    },
    access: {
        // Everyone can read sponsors (public listing page)
        read: () => true,
        // Only admins can create sponsors
        create: ({ req: { user } }) => user?.role === 'admin',
        // Admins can update any; sponsors can only update their own record
        update: ({ req: { user } }) => {
            if (!user) return false
            if (user.role === 'admin') return true
            return false
        },
        // Only admins can delete
        delete: ({ req: { user } }) => user?.role === 'admin',
    },
    fields: [
        // ── Core identity ──────────────────────────────────────────
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
                description: 'URL-friendly identifier e.g. "meridian-capital". Used in /sponsors/[slug].',
            },
        },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
            admin: {
                description: 'Sponsor logo image.',
            },
        },
        {
            name: 'location',
            type: 'text',
            required: true,
            admin: {
                description: 'Headquarters e.g. "New York, NY"',
            },
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },

        // ── Strategy & Profile ─────────────────────────────────────
        {
            name: 'strategy',
            type: 'select',
            required: true,
            options: [
                { label: 'Opportunistic', value: 'Opportunistic' },
                { label: 'Value-Add', value: 'Value-Add' },
                { label: 'Core-Plus', value: 'Core-Plus' },
                { label: 'Core', value: 'Core' },
                { label: 'Debt', value: 'Debt' },
            ],
        },
        {
            name: 'aum',
            type: 'text',
            required: true,
            admin: {
                description: 'Assets under management e.g. "$2.4B"',
            },
        },
        {
            name: 'yearsActive',
            type: 'number',
            required: true,
            admin: {
                description: 'Years in business',
            },
        },
        {
            name: 'propertiesManaged',
            type: 'number',
            required: true,
        },

        // ── Sylvan Rating ──────────────────────────────────────────
        {
            name: 'rating',
            type: 'select',
            required: true,
            options: [
                { label: 'A — Exemplary', value: 'A' },
                { label: 'B — Satisfactory', value: 'B' },
                { label: 'C — Under Review', value: 'C' },
            ],
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'ratingLabel',
            type: 'text',
            admin: {
                position: 'sidebar',
                description: 'Short label shown on the card e.g. "Exemplary Compliance"',
            },
        },
    ],
}
