import type { User } from '@/payload-types'

type isAdmin = (user: (User & {
    collection: "users";
}) | null) => boolean

export const admin: isAdmin = (user) => {
    return user?.roles?.includes('admin') ?? false
}