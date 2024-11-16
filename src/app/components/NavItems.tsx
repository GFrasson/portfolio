'use client'

import { TabNav } from '@radix-ui/themes'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    name: 'Sobre',
    route: '/',
  },
  {
    name: 'Projetos',
    route: '/projects',
  },
]

export function NavItems() {
  const pathname = usePathname()

  return (
    <TabNav.Root>
      {navItems.map((navItem) => (
        <TabNav.Link
          key={navItem.name}
          href={navItem.route}
          active={pathname === navItem.route}
        >
          {navItem.name}
        </TabNav.Link>
      ))}
    </TabNav.Root>
  )
}
