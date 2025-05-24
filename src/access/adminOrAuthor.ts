import type { AccessArgs } from 'payload'

import type { User } from '@/payload-types'
import { admin } from './admin';

type isAdminOrAuthor = (args: AccessArgs<User>) => boolean | {
    author: {
        equals: number | undefined;
    };
}

export const adminOrAuthor: isAdminOrAuthor = ({ req: { user } }) => {
    if (user && admin(user)) {
        return true;
    }

    return {
        author: {
            equals: user?.id,
        },
    }
}
