'use client'

import { Flex } from '@radix-ui/themes'
import { RocketIcon } from '@radix-ui/react-icons'
import { ExpandableCard } from '@/app/(frontend)/components/ExpandableCard'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { User } from '@/payload-types'

export interface ExperienceSectionProps {
  experiences?: User['experience']
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <AnimatedSection direction="left" delay={0.1}>
      <Flex direction="column" gap="4">
        <SectionHeader
          icon={<RocketIcon width="24" height="24" />}
          title="Experiência"
        />

        <Flex direction="column" gap="3">
          {experiences.map((item, index) => (
            <ExpandableCard
              key={index}
              title={item.title}
              date={item.date}
              company={item.company}
              subtitle={item.subtitle || undefined}
            >
              {item.hasDescription && item.description && (
                <RichText data={item.description} />
              )}
            </ExpandableCard>
          ))}
        </Flex>
      </Flex>
    </AnimatedSection>
  )
}
