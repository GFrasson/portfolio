'use client'

import { Flex, Text, Grid, Card, Badge } from '@radix-ui/themes'
import { GlobeIcon } from '@radix-ui/react-icons'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'
import type { User } from '@/payload-types'

export interface LanguagesSectionProps {
  languages?: User['languages']
}

export function LanguagesSection({ languages }: LanguagesSectionProps) {
  if (!languages || languages.length === 0) {
    return null;
  }

  return (
    <AnimatedSection direction="right" delay={0.3}>
      <Flex direction="column" gap="4">
        <SectionHeader
          icon={<GlobeIcon width="24" height="24" />}
          title="Idiomas"
        />
        <Grid columns={{ initial: '1', sm: '2' }} gap="3">
          {languages.map((lang, index) => (
            <Card key={index}>
              <Flex justify="between" align="center">
                <Text>{lang.language}</Text>
                <Badge color="gray">{lang.level}</Badge>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Flex>
    </AnimatedSection>
  )
}
