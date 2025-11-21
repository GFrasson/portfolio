'use client'

import { Flex, Text } from '@radix-ui/themes'
import { BackpackIcon } from '@radix-ui/react-icons'
import { ExpandableCard } from '@/app/(frontend)/components/ExpandableCard'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'

export function EducationSection() {
  return (
    <AnimatedSection direction="right" delay={0.2}>
        <Flex direction="column" gap="4">
            <SectionHeader 
                icon={<BackpackIcon width="24" height="24" />} 
                title="Education" 
            />
            
            <ExpandableCard 
                title="Computer Science, BS" 
                date="2017 - 2021"
                company="University of Technology"
            >
                <Text size="2" color="gray">
                    - Graduated with Honors.<br/>
                    - Focus on Human-Computer Interaction.<br/>
                    - Capstone Project: Accessible Web Navigation Tool.
                </Text>
            </ExpandableCard>
        </Flex>
    </AnimatedSection>
  )
}
