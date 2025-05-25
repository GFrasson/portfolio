import { admin } from '@/access/admin'
import { adminOrAuthor } from '@/access/adminOrAuthor';
import { authenticated } from '@/access/authenticated'
import type { CollectionConfig } from 'payload'

export const Project: CollectionConfig = {
  slug: 'projects',
  access: {
    create: authenticated,
    read: adminOrAuthor,
    update: adminOrAuthor,
    delete: adminOrAuthor
  },
  admin: {
    defaultColumns: ['title', 'summary'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true
    },
    {
      name: "summary",
      type: "textarea",
      required: true
    },
    {
      name: "description",
      type: "richText",
      required: true
    },
    {
      name: "published",
      type: "checkbox",
      required: true
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      access: {
        create: ({ req: { user } }) => admin(user),
        update: ({ req: { user } }) => admin(user),
        read: ({ req: { user } }) => admin(user)
      },
      hooks: {
        beforeChange: [
          ({ req: { user }, value }) => {
            if (admin(user)) {
              return value
            }

            // Se o usuário estiver autenticado, define como autor
            if (user) {
              return user.id
            }
          }
        ]
      }
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        }
      ],
      admin: {
        isSortable: true
      }
    },
  ],
}
