'use client'

import { Badge, Flex } from '@radix-ui/themes'
import { CodeIcon } from '@radix-ui/react-icons'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'

export function CertificatesSection() {
  return (
    <AnimatedSection direction="right" delay={0.3}>
        <Flex direction="column" gap="4">
            <SectionHeader 
                icon={<CodeIcon width="24" height="24" />} 
                title="Certificates" 
            />
            
            <Flex gap="2" wrap="wrap">
                <Badge size="2" variant="surface" color="green">AWS Certified Cloud Practitioner</Badge>
                <Badge size="2" variant="surface" color="blue">Meta Frontend Developer</Badge>
                <Badge size="2" variant="surface" color="orange">Google UX Design</Badge>
            </Flex>
        </Flex>
    </AnimatedSection>
  )
}
