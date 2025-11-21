'use client'

import { Flex, Link as RadixLink } from '@radix-ui/themes'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'

export function LinksSection() {
  return (
    <AnimatedSection direction="left" delay={0.2}>
        <Flex direction="column" gap="4">
            <SectionHeader 
                icon={<ExternalLinkIcon width="24" height="24" />} 
                title="Links" 
            />
            <Flex direction="column" gap="2">
                <RadixLink href="#" size="3" color="ruby">
                    <Flex align="center" gap="2">
                        My Photography Portfolio <ExternalLinkIcon />
                    </Flex>
                </RadixLink>
                <RadixLink href="#" size="3" color="ruby">
                    <Flex align="center" gap="2">
                        Architecture Projects <ExternalLinkIcon />
                    </Flex>
                </RadixLink>
            </Flex>
        </Flex>
    </AnimatedSection>
  )
}
