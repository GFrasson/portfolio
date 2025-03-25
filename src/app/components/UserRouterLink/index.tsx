'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { AnchorHTMLAttributes, ReactNode } from 'react'

interface UserRouterLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  route: string
}

export function UserRouterLink({
  children,
  route,
  ...props
}: UserRouterLinkProps) {
  const { user } = useParams<{ user: string }>()

  return (
    <Link {...props} href={`/${user ?? "brenda"}/${route}`}>
      {children}
    </Link>
  )
}
