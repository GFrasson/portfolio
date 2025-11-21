'use client'

import { Button, Flex } from '@radix-ui/themes'
import { EnvelopeClosedIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'

export function ContactSection() {
  return (
    <AnimatedSection direction="left" delay={0.1}>
        <Flex direction="column" gap="4">
            <SectionHeader 
                icon={<EnvelopeClosedIcon width="24" height="24" />} 
                title="Contact" 
            />
            <Flex direction="column" gap="3">
                <Flex align="center" gap="3">
                    <Button variant="soft" color="gray" highContrast>
                        <EnvelopeClosedIcon />
                        hello@brenda.dev
                    </Button>
                </Flex>
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
