'use client'

import { Flex, Heading } from '@radix-ui/themes'
import { ReactNode } from 'react'

interface SectionHeaderProps {
  icon: ReactNode
  title: string
}

export function SectionHeader({ icon, title }: SectionHeaderProps) {
  return (
    <Heading as="h2" size="6" weight="medium">
      <Flex align="center" gap="2">
        {icon}
        {title}
      </Flex>
    </Heading>
  )
}
