'use client'

import { Flex, Text } from '@radix-ui/themes'
import { RocketIcon } from '@radix-ui/react-icons'
import { ExpandableCard } from '@/app/(frontend)/components/ExpandableCard'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'

export function ExperienceSection() {
  return (
    <AnimatedSection direction="right">
        <Flex direction="column" gap="4">
            <SectionHeader 
                icon={<RocketIcon width="24" height="24" />} 
                title="Experience" 
            />
            
            <Flex direction="column" gap="3">
                <ExpandableCard 
                    title="Senior Frontend Engineer" 
                    date="2023 - Present"
                    company="Tech Company Inc."
                    subtitle="Leading the frontend team, architecting scalable solutions."
                >
                    <Text size="2" color="gray">
                        - Spearheaded the migration to Next.js 14.<br/>
                        - Improved site performance by 40%.<br/>
                        - Mentored 3 junior developers.<br/>
                        - Implemented a new design system using Radix UI.
                    </Text>
                </ExpandableCard>

                <ExpandableCard 
                    title="Software Developer" 
                    date="2021 - 2023"
                    company="Creative Agency"
                    subtitle="Developed award-winning websites for high-profile clients."
                >
                    <Text size="2" color="gray">
                        - Built interactive campaigns for major brands.<br/>
                        - Collaborated with designers to implement complex animations.<br/>
                        - Optimized assets for fast loading times.<br/>
                        - Won Awwwards Site of the Day.
                    </Text>
                </ExpandableCard>
            </Flex>
        </Flex>
    </AnimatedSection>
  )
}
