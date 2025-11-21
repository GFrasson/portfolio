'use client'

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

export default function AboutPage() {
  return (
    <Box style={{ overflowX: 'hidden' }}>
        <HeroSection />

        <Separator size="4" />

        <Section size="3">
            <Container size="3">
                <Grid columns={{ initial: '1', md: '2' }} gap="9">
                    <Flex direction="column" gap="8">
                        <BioSection />
                        <ContactSection />
                        <LinksSection />
                        <ComplementaryInfoSection />
                    </Flex>

                    <Flex direction="column" gap="8">
                        <ExperienceSection />
                        <EducationSection />
                        <CertificatesSection />
                    </Flex>
                </Grid>
            </Container>
        </Section>
    </Box>
  )
}
