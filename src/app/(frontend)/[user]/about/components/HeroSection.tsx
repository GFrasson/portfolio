'use client'

import { Avatar, Badge, Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import { motion } from 'motion/react'
import type { User } from '@/payload-types'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
}

export interface HeroSectionProps {
  avatar?: string | null
  name: string
  role?: User['role']
  interests?: User['interests']
  shortDescription?: User['shortDescription']
}

export function HeroSection({ avatar, name, role, interests, shortDescription }: HeroSectionProps) {
  return (
    <Section size="3" style={{ position: 'relative' }}>
      <Container size="3">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Flex direction="column" gap="6" align="center" style={{ textAlign: 'center' }}>
            <motion.div variants={itemVariants}>
              <Avatar
                size={{ initial: '8', md: '9' }}
                src={avatar || ''}
                fallback={name?.[0] || 'U'}
                radius="full"
                style={{ border: '4px solid var(--ruby-9)' }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Heading as="h1" size={{ initial: '8', md: '9' }} weight="bold" style={{ lineHeight: '1.1' }}>
                {name}
              </Heading>
              {role && (
                <Text size="5" color="gray" mt="2">
                  {role}
                </Text>
              )}
            </motion.div>

            {interests && interests.length > 0 && (
              <motion.div variants={itemVariants}>
                <Flex gap="3" wrap="wrap" justify="center">
                  {interests.map((item, index) => (
                    item.interest && (
                      <Badge key={index} size="3" color="ruby" variant="soft" radius="full">
                        {item.interest}
                      </Badge>
                    )
                  ))}
                </Flex>
              </motion.div>
            )}

            {shortDescription && (
              <motion.div variants={itemVariants}>
                <Text size="4" color="gray" style={{ maxWidth: '600px' }}>
                  {shortDescription}
                </Text>
              </motion.div>
            )}
          </Flex>
        </motion.div>
      </Container>
    </Section>
  )
}
