'use client'

import { Button, Flex } from '@radix-ui/themes'
import { EnvelopeClosedIcon, LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon, FileTextIcon, PaperPlaneIcon } from '@radix-ui/react-icons'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'
import type { User } from '@/payload-types'
import Link from 'next/link'

export interface ContactSectionProps {
  publicEmail?: User['publicEmail']
  contacts?: User['contacts']
}

export function ContactSection({ publicEmail, contacts }: ContactSectionProps) {
  const whatsappPhoneFormat = contacts?.phone ? contacts?.phone.replace(/\D/g, '') : ''
  const whatsappLink = `https://wa.me/${whatsappPhoneFormat}?text=Olá! Gostei do seu portfólio e queria conversar com você.`

  return (
    <AnimatedSection direction="left" delay={0.1}>
      <Flex direction="column" gap="4">
        <SectionHeader
          icon={<EnvelopeClosedIcon width="24" height="24" />}
          title="Contato"
        />
        <Flex direction="column" gap="3">
          {(publicEmail || contacts?.phone) && (
            <Flex align="center" gap="3">
              <Link href={`mailto:${publicEmail}`}>
                <Button variant="soft" color="ruby" highContrast style={{ cursor: 'pointer' }}>
                  <EnvelopeClosedIcon />
                  {publicEmail}
                </Button>
              </Link>

              {contacts?.phone && (
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="soft" color="ruby" highContrast style={{ cursor: 'pointer' }}>
                    <PaperPlaneIcon />
                    {contacts.phone}
                  </Button>
                </Link>
              )}
            </Flex>
          )}

          <Flex gap="3" wrap="wrap">
            {contacts?.linkedin && (
              <Link href={contacts.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" color="blue" style={{ cursor: 'pointer' }}>
                  <LinkedInLogoIcon />
                  LinkedIn
                </Button>
              </Link>
            )}
            {contacts?.instagram && (
              <Link href={contacts.instagram} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" color="pink" style={{ cursor: 'pointer' }}>
                  <InstagramLogoIcon />
                  Instagram
                </Button>
              </Link>
            )}
            {contacts?.lattes && (
              <Link href={contacts.lattes} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" color="amber" style={{ cursor: 'pointer' }}>
                  <FileTextIcon />
                  Lattes
                </Button>
              </Link>
            )}
            {contacts?.github && (
              <Link href={contacts.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" color="indigo" style={{ cursor: 'pointer' }}>
                  <GitHubLogoIcon />
                  GitHub
                </Button>
              </Link>
            )}
          </Flex>
        </Flex>
      </Flex>
    </AnimatedSection>
  )
}
