'use client'

import { Flex } from '@radix-ui/themes'
import { ReaderIcon } from '@radix-ui/react-icons'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { User } from '@/payload-types'

export interface BioSectionProps {
  biography?: User['biography']
}

export function BioSection({ biography }: BioSectionProps) {
  return (
    <AnimatedSection direction="left">
        <Flex direction="column" gap="4">
            <SectionHeader 
                icon={<ReaderIcon width="24" height="24" />} 
                title="Biography" 
            />
            {biography && (
                <RichText data={biography} />
            )}
        </Flex>
    </AnimatedSection>
  )
}
