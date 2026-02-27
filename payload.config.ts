import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Users } from './collections/Users'
import { Sponsors } from './collections/Sponsors'
import { Offerings } from './collections/Offerings'
import { Media } from './collections/Media'

export default buildConfig({
    secret: process.env.PAYLOAD_SECRET || '',
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URL,
        },
    }),
    editor: lexicalEditor(),
    collections: [
        Users,
        Sponsors,
        Offerings,
        Media,
    ],
    admin: {
        user: 'users',
    },
})
