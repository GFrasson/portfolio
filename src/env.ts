import { z } from 'zod'

const envSchema = z
  .object({
    DATABASE_URI: z.string().min(1),
    PAYLOAD_SECRET: z.string().min(1),
    CLOUDINARY_NAME: z.string().optional(),
    CLOUDINARY_API_KEY: z.string().optional(),
    CLOUDINARY_API_SECRET: z.string().optional(),
    NODE_ENV: z.enum(['development', 'production']).default('development'),
  })
  .superRefine((data, ctx) => {
    if (data.NODE_ENV === 'production') {
      if (!data.CLOUDINARY_NAME) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'CLOUDINARY_NAME is required in production',
          path: ['CLOUDINARY_NAME'],
        })
      }
      if (!data.CLOUDINARY_API_KEY) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'CLOUDINARY_API_KEY is required in production',
          path: ['CLOUDINARY_API_KEY'],
        })
      }
      if (!data.CLOUDINARY_API_SECRET) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'CLOUDINARY_API_SECRET is required in production',
          path: ['CLOUDINARY_API_SECRET'],
        })
      }
    }
  })

export const env = envSchema.parse(process.env)
