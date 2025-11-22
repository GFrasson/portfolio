'use client'

import { Flex } from '@radix-ui/themes'
import { BackpackIcon } from '@radix-ui/react-icons'
import { ExpandableCard } from '@/app/(frontend)/components/ExpandableCard'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { User } from '@/payload-types'

export interface EducationSectionProps {
  education?: User['education']
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <AnimatedSection direction="left" delay={0.2}>
      <Flex direction="column" gap="4">
        <SectionHeader
          icon={<BackpackIcon width="24" height="24" />}
          title="Histórico Acadêmico"
        />

        {education && education.length > 0 && (
          <Flex direction="column" gap="3">
            {education.map((item, index) => (
              <ExpandableCard
                key={index}
                title={item.degree}
                date={item.date}
                company={item.institution}
              >
                {item.description && (
                  <RichText data={item.description} />
                )}
              </ExpandableCard>
            ))}
          </Flex>
        )}
      </Flex>
    </AnimatedSection>
  )
}
