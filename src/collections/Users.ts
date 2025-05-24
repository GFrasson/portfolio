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
      hidden: true,
      admin: {
        readOnly: true,
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
