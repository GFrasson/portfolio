'use client'

import { Flex, Link as RadixLink } from '@radix-ui/themes'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'
import type { User } from '@/payload-types'

export interface LinksSectionProps {
  links?: User['links']
}

export function LinksSection({ links }: LinksSectionProps) {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <AnimatedSection direction="right" delay={0.4}>
      <Flex direction="column" gap="4">
        <SectionHeader
          icon={<ExternalLinkIcon width="24" height="24" />}
          title="Links"
        />
        <Flex direction="column" gap="2">
          {links.map((link, index) => (
            <RadixLink key={index} href={link.url} size="3" color="ruby" target="_blank" rel="noopener noreferrer">
              <Flex align="center" gap="2">
                {link.label} <ExternalLinkIcon />
              </Flex>
            </RadixLink>
          ))}
        </Flex>
      </Flex>
    </AnimatedSection>
  )
}
