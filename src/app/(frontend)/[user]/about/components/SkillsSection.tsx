'use client'

import { Flex, Text, Card } from '@radix-ui/themes'
import { LightningBoltIcon } from '@radix-ui/react-icons'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'
import type { User } from '@/payload-types'

export interface SkillsSectionProps {
  skills?: User['skills']
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  if (!skills || skills.length === 0) return null

  return (
    <AnimatedSection direction="left" delay={0.1}>
      <Flex direction="column" gap="4">
        <SectionHeader
          icon={<LightningBoltIcon width="24" height="24" />}
          title="Habilidades"
        />
        <Flex gap="2" wrap="wrap">
          {skills.map((skill, index) => (
            <Card key={index} style={{ padding: '8px 12px' }}>
              <Text weight="medium">{skill.name}</Text>
            </Card>
          ))}
        </Flex>
      </Flex>
    </AnimatedSection>
  )
}
