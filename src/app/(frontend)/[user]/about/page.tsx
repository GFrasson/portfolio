import { Box, Container, Flex, Grid, Section, Separator } from '@radix-ui/themes'
import * as React from 'react'
import { HeroSection } from './components/HeroSection'
import { BioSection } from './components/BioSection'
import { ContactSection } from './components/ContactSection'
import { LinksSection } from './components/LinksSection'
import { ComplementaryInfoSection } from './components/ComplementaryInfoSection'
import { ExperienceSection } from './components/ExperienceSection'
import { EducationSection } from './components/EducationSection'
import { CertificatesSection } from './components/CertificatesSection'
import { LanguagesSection } from './components/LanguagesSection'
import { SkillsSection } from './components/SkillsSection'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'

interface AboutPageProps {
  params: Promise<{
    user: string
  }>
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { user: userSlug } = await params
  const payload = await getPayload({ config: configPromise })

  const userResult = await payload.find({
    collection: 'users',
    where: {
      slug: {
        equals: userSlug,
      },
    },
  })

  const user = userResult.docs[0]

  if (!user) {
    notFound()
  }

  const avatarUrl = typeof user.avatar === 'object' && user.avatar?.url ? user.avatar.url : undefined

  return (
    <Box style={{ overflowX: 'hidden' }}>
      <HeroSection
        name={user.name}
        avatar={avatarUrl}
        role={user.role}
        interests={user.interests}
        shortDescription={user.shortDescription}
      />

      <Separator size="4" />

      <Section size="3">
        <Container size="3">
          <Grid columns={{ initial: '1', md: '2' }} gap="9">
            <Flex direction="column" gap="8">
              <BioSection biography={user.biography} />
              <ContactSection publicEmail={user.publicEmail} contacts={user.contacts} />
              <LinksSection links={user.links} />
              <LanguagesSection languages={user.languages} />
              <ComplementaryInfoSection
                complementaryInfo={user.complementaryInfo}
                location={user.location}
              />
            </Flex>

            <Flex direction="column" gap="8">
              <SkillsSection skills={user.skills} />
              <ExperienceSection experience={user.experience} />
              <EducationSection education={user.education} />
              <CertificatesSection certificates={user.certificates} />
            </Flex>
          </Grid>
        </Container>
      </Section>
    </Box>
  )
}
