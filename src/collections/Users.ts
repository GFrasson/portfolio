import { admin } from '@/access/admin'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
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
              validate: (value: string | null | undefined) => {
                if (!value || typeof value !== 'string') {
                  return 'Slug deve ser um texto';
                }

                const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

                if (!slugRegex.test(value)) {
                  return 'Slug deve conter apenas letras minúsculas, números e hífens';
                }

                if (value.length < 3) {
                  return 'Slug deve ter no mínimo 3 caracteres';
                }

                if (value.length > 20) {
                  return 'Slug deve ter no máximo 20 caracteres';
                }

                return true
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
          label: 'Contacts',
          fields: [
            {
              name: 'contacts',
              type: 'group',
              fields: [
                {
                  name: 'linkedin',
                  type: 'text',
                  label: 'LinkedIn URL',
                },
                {
                  name: 'github',
                  type: 'text',
                  label: 'GitHub URL',
                },
                {
                  name: 'instagram',
                  type: 'text',
                  label: 'Instagram URL',
                },
                {
                  name: 'lattes',
                  type: 'text',
                  label: 'Lattes URL',
                },
                {
                  name: 'phone',
                  type: 'text',
                  label: 'Phone',
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
        {
          label: 'Languages',
          fields: [
            {
              name: 'languages',
              type: 'array',
              fields: [
                {
                  name: 'language',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'level',
                  type: 'select',
                  options: ['Nativo', 'Fluente', 'Avançado', 'Intermediário', 'Básico'],
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Skills',
          fields: [
            {
              name: 'skills',
              type: 'array',
              fields: [
                {
                  name: 'name',
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
