import type { CollectionConfig } from 'payload'

export const Project: CollectionConfig = {
  slug: 'projects',
  fields: [
    {
      name: "id",
      type: "number",
      required: true,
      unique: true,
      hidden: true
    },
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
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
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
      ]
    },
  ],
}
