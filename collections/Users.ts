import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
    slug: 'users',
    auth: true,
    admin: {
        useAsTitle: 'email',
        defaultColumns: ['email', 'name', 'role'],
        // Sponsors only see the admin panel, not the full dashboard
        hidden: ({ user }) => user?.role === 'investor',
    },
    access: {
        // Only admins can read all users
        read: ({ req: { user } }) => {
            if (!user) return false
            if (user.role === 'admin') return true
            // Sponsors and investors can only read their own record
            return {
                id: { equals: user.id },
            }
        },
        // Only admins can create users (investors/sponsors are invited)
        create: ({ req: { user } }) => user?.role === 'admin',
        // Admins can update anyone; others can only update themselves
        update: ({ req: { user } }) => {
            if (!user) return false
            if (user.role === 'admin') return true
            return {
                id: { equals: user.id },
            }
        },
        // Only admins can delete users
        delete: ({ req: { user } }) => user?.role === 'admin',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'role',
            type: 'select',
            required: true,
            defaultValue: 'investor',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'Sponsor', value: 'sponsor' },
                { label: 'Investor', value: 'investor' },
            ],
            admin: {
                position: 'sidebar',
                description: 'Admin: full access. Sponsor: manage own offerings. Investor: website only.',
            },
        },
        // Sponsor-specific: which sponsor company this user belongs to
        {
            name: 'sponsor',
            type: 'relationship',
            relationTo: 'sponsors',
            hasMany: false,
            admin: {
                position: 'sidebar',
                description: 'Only required for sponsor users.',
                condition: (data) => data.role === 'sponsor',
            },
        },
    ],
}
