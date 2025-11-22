'use client'

import { Card, Flex, Text, IconButton, Box } from '@radix-ui/themes'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons'

interface ExpandableCardProps {
  title: string
  subtitle?: string
  date?: string
  company?: string
  children?: React.ReactNode
}

export function ExpandableCard({ title, subtitle, date, company, children }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card style={{ overflow: 'hidden' }}>
      <Flex direction="column" gap="1">
        <Flex justify="between" align="center">
          <Text weight="bold">{title}</Text>
          <Text size="1" color="gray">{date}</Text>
        </Flex>
        {company && <Text size="2" color="ruby">{company}</Text>}
        {subtitle && <Text size="2" mt="2">{subtitle}</Text>}

        <Box mt="2">
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <Box pt="2" pb="2">
                  {children}
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>

        {!!children && (
          <Flex justify="end" align="center" mt="2">
            <IconButton
              variant="ghost"
              color="gray"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label={isExpanded ? "Collapse" : "Expand"}
              style={{ cursor: "pointer" }}
            >
              <Flex align="center" gap="1">
                <Text size="1">
                  {isExpanded ? "Ver menos" : "Ver mais"}
                </Text>

                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {isExpanded ? (
                    <MinusIcon />
                  ) : (
                    <PlusIcon />
                  )}
                </motion.div>
              </Flex>
            </IconButton>
          </Flex>
        )}
      </Flex >
    </Card >
  )
}
