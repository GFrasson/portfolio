'use client'

import { Avatar, Badge, Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import { motion } from 'motion/react'

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

export function HeroSection() {
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
                            size="9" 
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" 
                            fallback="B" 
                            radius="full"
                            style={{ border: '4px solid var(--ruby-9)' }}
                        />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                        <Heading as="h1" size="9" weight="bold" style={{ lineHeight: '1.1' }}>
                            Brenda
                        </Heading>
                        <Text size="5" color="gray" mt="2">
                            Creative Developer & UI Designer
                        </Text>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Flex gap="3" wrap="wrap" justify="center">
                            <Badge size="3" color="ruby" variant="soft" radius="full">
                                Architecture
                            </Badge>
                            <Badge size="3" color="indigo" variant="soft" radius="full">
                                Photography
                            </Badge>
                            <Badge size="3" color="cyan" variant="soft" radius="full">
                                Web Design
                            </Badge>
                        </Flex>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Text size="4" color="gray" style={{ maxWidth: '600px' }}>
                            I build accessible, pixel-perfect, performant, and beautiful web experiences.
                            Passionate about blending art with code.
                        </Text>
                    </motion.div>
                </Flex>
            </motion.div>
        </Container>
    </Section>
  )
}
