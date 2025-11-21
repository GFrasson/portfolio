'use client'

import { Badge, Flex, Link } from '@radix-ui/themes'
import { CodeIcon } from '@radix-ui/react-icons'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'
import type { User } from '@/payload-types'

export interface CertificatesSectionProps {
  certificates?: User['certificates']
}

export function CertificatesSection({ certificates }: CertificatesSectionProps) {
  return (
    <AnimatedSection direction="right" delay={0.3}>
        <Flex direction="column" gap="4">
            <SectionHeader 
                icon={<CodeIcon width="24" height="24" />} 
                title="Certificates" 
            />
            
            {certificates && certificates.length > 0 && (
                <Flex gap="2" wrap="wrap">
                    {certificates.map((cert, index) => (
                        cert.url ? (
                            <Link key={index} href={cert.url} target="_blank" rel="noopener noreferrer">
                                <Badge size="2" variant="surface" color="green" style={{ cursor: 'pointer' }}>
                                    {cert.name}
                                </Badge>
                            </Link>
                        ) : (
                            <Badge key={index} size="2" variant="surface" color="green">
                                {cert.name}
                            </Badge>
                        )
                    ))}
                </Flex>
            )}
        </Flex>
    </AnimatedSection>
  )
}
