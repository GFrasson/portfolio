'use client'

import { Button, Flex, Link } from '@radix-ui/themes'
import { EnvelopeClosedIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'
import type { User } from '@/payload-types'

export interface ContactSectionProps {
  publicEmail?: User['publicEmail']
}

export function ContactSection({ publicEmail }: ContactSectionProps) {
  return (
    <AnimatedSection direction="left" delay={0.1}>
      <Flex direction="column" gap="4">
        <SectionHeader
          icon={<EnvelopeClosedIcon width="24" height="24" />}
          title="Contato"
        />
        <Flex direction="column" gap="3">
          {publicEmail && (
            <Flex align="center" gap="3">
              <Link href={`mailto:${publicEmail}`}>
                <Button variant="soft" color="gray" highContrast style={{ cursor: 'pointer' }}>
                  <EnvelopeClosedIcon />
                  {publicEmail}
                </Button>
              </Link>
            </Flex>
          )}
          <Flex gap="3">
            <Button variant="outline" color="gray">
              <LinkedInLogoIcon />
              LinkedIn
            </Button>
            <Button variant="outline" color="gray">
              <GitHubLogoIcon />
              GitHub
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </AnimatedSection>
  )
}
