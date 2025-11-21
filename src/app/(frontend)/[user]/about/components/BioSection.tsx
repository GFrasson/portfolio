'use client'

import { Flex, Text } from '@radix-ui/themes'
import { ReaderIcon } from '@radix-ui/react-icons'
import { AnimatedSection } from '@/app/(frontend)/components/AnimatedSection'
import { SectionHeader } from '@/app/(frontend)/components/SectionHeader'

export function BioSection() {
  return (
    <AnimatedSection direction="left">
        <Flex direction="column" gap="4">
            <SectionHeader 
                icon={<ReaderIcon width="24" height="24" />} 
                title="Biography" 
            />
            <Text as="p" size="3" style={{ lineHeight: '1.7' }}>
                Hello! I'm Brenda, a software engineer based in Brazil. 
                I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
            </Text>
            <Text as="p" size="3" style={{ lineHeight: '1.7' }}>
                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </Text>
        </Flex>
    </AnimatedSection>
  )
}
