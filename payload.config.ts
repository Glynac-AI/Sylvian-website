import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'

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
    plugins: [
        s3Storage({
            collections: {
                media: true,
            },
            bucket: process.env.S3_BUCKET || '',
            config: {
                credentials: {
                    accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
                },
                region: process.env.S3_REGION || 'us-east-1',
                ...(process.env.S3_ENDPOINT ? {
                    endpoint: process.env.S3_ENDPOINT,
                    forcePathStyle: true,
                } : {}),
            },
        }),
    ],
    admin: {
        user: 'users',
    },
})
