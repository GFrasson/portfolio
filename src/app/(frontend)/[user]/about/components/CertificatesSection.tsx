'use client'

import { Flex, Link, Card, Text, Box } from '@radix-ui/themes'
import { LayersIcon } from '@radix-ui/react-icons'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'
import type { User } from '@/payload-types'

export interface CertificatesSectionProps {
  certificates?: User['certificates']
}

export function CertificatesSection({ certificates }: CertificatesSectionProps) {
  if (!certificates || certificates.length === 0) {
    return null;
  }

  return (
    <AnimatedSection direction="right" delay={0.2}>
      <Flex direction="column" gap="4">
        <SectionHeader
          icon={<LayersIcon width="24" height="24" />}
          title="Certificados"
        />

        <Flex direction="column" gap="3">
          {certificates.map((cert, index) => {
            const content = (
              <Card size="2" variant="surface">
                <Flex direction="column" gap="1">
                  {cert.type && (
                    <Text as="div" size="1" color="gray" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {cert.type}
                    </Text>
                  )}
                  <Text as="div" size="3" weight="bold">
                    {cert.name}
                  </Text>
                  {(cert.issuer || cert.date) && (
                    <Text as="div" size="2" color="gray">
                      {cert.issuer}
                      {cert.issuer && cert.date && ' • '}
                      {cert.date}
                    </Text>
                  )}
                </Flex>
              </Card>
            )

            if (cert.url) {
              return (
                <Link
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {content}
                </Link>
              )
            }

            return <Box key={index}>{content}</Box>
          })}
        </Flex>
      </Flex>
    </AnimatedSection>
  )
}
