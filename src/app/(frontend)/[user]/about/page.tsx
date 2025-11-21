'use client'

import { Avatar, Badge, Box, Container, Flex, Grid, Heading, Section, Separator, Text, Link as RadixLink, Button } from '@radix-ui/themes'
import { motion } from 'motion/react'
import * as React from 'react'
import { RocketIcon, BackpackIcon, CodeIcon, ReaderIcon, EnvelopeClosedIcon, LinkedInLogoIcon, GitHubLogoIcon, ExternalLinkIcon, FileTextIcon } from '@radix-ui/react-icons'
import { ExpandableCard } from '@/components/ExpandableCard'

// Animation variants
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

export default function AboutPage() {
  return (
    <Box style={{ overflowX: 'hidden' }}>
        {/* Hero Section */}
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

        <Separator size="4" />

        {/* Main Content Grid */}
        <Section size="3">
            <Container size="3">
                <Grid columns={{ initial: '1', md: '2' }} gap="9">
                    
                    {/* Left Column: Bio, Contact, Links */}
                    <Flex direction="column" gap="8">
                        
                        {/* Bio */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Flex direction="column" gap="4">
                                <Heading as="h2" size="6" weight="medium">
                                    <Flex align="center" gap="2">
                                        <ReaderIcon width="24" height="24" />
                                        Biography
                                    </Flex>
                                </Heading>
                                <Text as="p" size="3" style={{ lineHeight: '1.7' }}>
                                    Hello! I'm Brenda, a software engineer based in Brazil. 
                                    I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
                                </Text>
                                <Text as="p" size="3" style={{ lineHeight: '1.7' }}>
                                    Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                                </Text>
                            </Flex>
                        </motion.div>

                        {/* Contact */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Flex direction="column" gap="4">
                                <Heading as="h2" size="6" weight="medium">
                                    <Flex align="center" gap="2">
                                        <EnvelopeClosedIcon width="24" height="24" />
                                        Contact
                                    </Flex>
                                </Heading>
                                <Flex direction="column" gap="3">
                                    <Flex align="center" gap="3">
                                        <Button variant="soft" color="gray" highContrast>
                                            <EnvelopeClosedIcon />
                                            hello@brenda.dev
                                        </Button>
                                    </Flex>
                                    <Flex gap="3">
                                        <Button variant="outline" color="gray">
                                            <LinkedInLogoIcon />
                                            LinkedIn
                                        </Button>
                                        <Button variant="outline" color="gray">
                                            <GitHubLogoIcon />
                                            GitHub
                                        </Button>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </motion.div>

                        {/* Links */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Flex direction="column" gap="4">
                                <Heading as="h2" size="6" weight="medium">
                                    <Flex align="center" gap="2">
                                        <ExternalLinkIcon width="24" height="24" />
                                        Links
                                    </Flex>
                                </Heading>
                                <Flex direction="column" gap="2">
                                    <RadixLink href="#" size="3" color="ruby">
                                        <Flex align="center" gap="2">
                                            My Photography Portfolio <ExternalLinkIcon />
                                        </Flex>
                                    </RadixLink>
                                    <RadixLink href="#" size="3" color="ruby">
                                        <Flex align="center" gap="2">
                                            Architecture Projects <ExternalLinkIcon />
                                        </Flex>
                                    </RadixLink>
                                </Flex>
                            </Flex>
                        </motion.div>

                         {/* Complementary Info */}
                         <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Flex direction="column" gap="4">
                                <Heading as="h2" size="6" weight="medium">
                                    <Flex align="center" gap="2">
                                        <FileTextIcon width="24" height="24" />
                                        Complementary Info
                                    </Flex>
                                </Heading>
                                <Text size="3" color="gray">
                                    I am also available for freelance work. If you have a project in mind, feel free to reach out!
                                    I speak English, Portuguese, and Spanish.
                                </Text>
                            </Flex>
                        </motion.div>

                    </Flex>

                    {/* Right Column: Experience, Education, Certificates */}
                    <Flex direction="column" gap="8">
                        
                        {/* Experience */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Flex direction="column" gap="4">
                                <Heading as="h2" size="6" weight="medium">
                                    <Flex align="center" gap="2">
                                        <RocketIcon width="24" height="24" />
                                        Experience
                                    </Flex>
                                </Heading>
                                
                                <Flex direction="column" gap="3">
                                    <ExpandableCard 
                                        title="Senior Frontend Engineer" 
                                        date="2023 - Present"
                                        company="Tech Company Inc."
                                        subtitle="Leading the frontend team, architecting scalable solutions."
                                    >
                                        <Text size="2" color="gray">
                                            - Spearheaded the migration to Next.js 14.<br/>
                                            - Improved site performance by 40%.<br/>
                                            - Mentored 3 junior developers.<br/>
                                            - Implemented a new design system using Radix UI.
                                        </Text>
                                    </ExpandableCard>

                                    <ExpandableCard 
                                        title="Software Developer" 
                                        date="2021 - 2023"
                                        company="Creative Agency"
                                        subtitle="Developed award-winning websites for high-profile clients."
                                    >
                                        <Text size="2" color="gray">
                                            - Built interactive campaigns for major brands.<br/>
                                            - Collaborated with designers to implement complex animations.<br/>
                                            - Optimized assets for fast loading times.<br/>
                                            - Won Awwwards Site of the Day.
                                        </Text>
                                    </ExpandableCard>
                                </Flex>
                            </Flex>
                        </motion.div>

                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Flex direction="column" gap="4">
                                <Heading as="h2" size="6" weight="medium">
                                    <Flex align="center" gap="2">
                                        <BackpackIcon width="24" height="24" />
                                        Education
                                    </Flex>
                                </Heading>
                                
                                <ExpandableCard 
                                    title="Computer Science, BS" 
                                    date="2017 - 2021"
                                    company="University of Technology"
                                >
                                    <Text size="2" color="gray">
                                        - Graduated with Honors.<br/>
                                        - Focus on Human-Computer Interaction.<br/>
                                        - Capstone Project: Accessible Web Navigation Tool.
                                    </Text>
                                </ExpandableCard>
                            </Flex>
                        </motion.div>

                         {/* Certificates */}
                         <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Flex direction="column" gap="4">
                                <Heading as="h2" size="6" weight="medium">
                                    <Flex align="center" gap="2">
                                        <CodeIcon width="24" height="24" />
                                        Certificates
                                    </Flex>
                                </Heading>
                                
                                <Flex gap="2" wrap="wrap">
                                    <Badge size="2" variant="surface" color="green">AWS Certified Cloud Practitioner</Badge>
                                    <Badge size="2" variant="surface" color="blue">Meta Frontend Developer</Badge>
                                    <Badge size="2" variant="surface" color="orange">Google UX Design</Badge>
                                </Flex>
                            </Flex>
                        </motion.div>

                    </Flex>
                </Grid>
            </Container>
        </Section>
    </Box>
  )
}
