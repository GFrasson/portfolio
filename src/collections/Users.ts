import { admin } from '@/access/admin'
import type { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      options: ['admin'],
      defaultValue: [],
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        readOnly: true,
      },
      access: {
        create: ({ req: { user } }) => admin(user),
        update: ({ req: { user } }) => admin(user),
        read: ({ req: { user } }) => admin(user)
      },
      hooks: {
        beforeChange: [
          ({ data }) => {
            if (data?.name) {
              return slugify(data.name, { lower: true, strict: true })
            }
          },
        ],
      },
    },
  ],
}
