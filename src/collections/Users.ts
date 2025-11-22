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
      type: 'tabs',
      tabs: [
        {
          label: 'Profile',
          fields: [
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
                read: ({ req: { user } }) => admin(user),
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
            {
              name: 'avatar',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'role',
              type: 'text',
              label: 'Professional Role',
            },
            {
              name: 'shortDescription',
              type: 'textarea',
            },
            {
              name: 'interests',
              type: 'array',
              fields: [
                {
                  name: 'interest',
                  type: 'text',
                },
              ],
            },
            {
              name: 'location',
              type: 'text',
            },
            {
              name: 'publicEmail',
              type: 'text',
            },
            {
              name: 'complementaryInfo',
              type: 'richText',
            },
          ],
        },
        {
          label: 'Biography',
          fields: [
            {
              name: 'biography',
              type: 'richText',
            },
          ],
        },
        {
          label: 'Experience',
          fields: [
            {
              name: 'experience',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'company',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'date',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'subtitle',
                  type: 'text',
                },
                {
                  name: 'description',
                  type: 'richText',
                },
              ],
            },
          ],
        },
        {
          label: 'Education',
          fields: [
            {
              name: 'education',
              type: 'array',
              fields: [
                {
                  name: 'degree',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'institution',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'date',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'richText',
                },
              ],
            },
          ],
        },
        {
          label: 'Certificates',
          fields: [
            {
              name: 'certificates',
              type: 'array',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'type',
                  type: 'text',
                  required: false,
                },
                {
                  name: 'issuer',
                  type: 'text',
                  required: false,
                },
                {
                  name: 'date',
                  type: 'text',
                  required: false,
                },
                {
                  name: 'url',
                  type: 'text',
                  required: false,
                },
              ],
            },
          ],
        },
        {
          label: 'Links',
          fields: [
            {
              name: 'links',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
