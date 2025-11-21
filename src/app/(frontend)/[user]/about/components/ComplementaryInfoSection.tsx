'use client'

import { Flex, Text } from '@radix-ui/themes'
import { FileTextIcon } from '@radix-ui/react-icons'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'

export function ComplementaryInfoSection() {
  return (
    <AnimatedSection direction="left" delay={0.3}>
        <Flex direction="column" gap="4">
            <SectionHeader 
                icon={<FileTextIcon width="24" height="24" />} 
                title="Complementary Info" 
            />
            <Text size="3" color="gray">
                I am also available for freelance work. If you have a project in mind, feel free to reach out!
                I speak English, Portuguese, and Spanish.
            </Text>
        </Flex>
    </AnimatedSection>
  )
}
