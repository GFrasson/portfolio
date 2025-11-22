'use client'

import { Flex, Text } from '@radix-ui/themes'
import { FileTextIcon, GlobeIcon } from '@radix-ui/react-icons'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { User } from '@/payload-types'

export interface ComplementaryInfoSectionProps {
  complementaryInfo?: User['complementaryInfo']
  location?: User['location']
}

export function ComplementaryInfoSection({ complementaryInfo, location }: ComplementaryInfoSectionProps) {
  if (!complementaryInfo && !location) {
    return null;
  }

  return (
    <AnimatedSection direction="right" delay={0.3}>
      <Flex direction="column" gap="4">
        <SectionHeader
          icon={<FileTextIcon width="24" height="24" />}
          title="Informações Complementares"
        />
        {complementaryInfo && (
          <RichText data={complementaryInfo} />
        )}
        {location && (
          <Flex align="center" gap="2">
            <GlobeIcon />
            <Text size="3" color="gray">
              {location}
            </Text>
          </Flex>
        )}
      </Flex>
    </AnimatedSection>
  )
}
