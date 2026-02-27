import type { CollectionConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        staticDir: path.resolve(dirname, '../public/media'),
        imageSizes: [
            {
                name: 'card',
                width: 800,
                height: 520,
                position: 'centre',
            },
            {
                name: 'thumbnail',
                width: 400,
                height: 260,
                position: 'centre',
            },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    access: {
        read: () => true,
        create: ({ req: { user } }) => !!user,
        update: ({ req: { user } }) => user?.role === 'admin',
        delete: ({ req: { user } }) => user?.role === 'admin',
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
    ],
}
