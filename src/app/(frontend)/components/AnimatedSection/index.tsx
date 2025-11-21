'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  direction?: 'left' | 'right' | 'none'
  className?: string
}

export function AnimatedSection({ children, delay = 0, direction = 'none', className }: AnimatedSectionProps) {
  const initialX = direction === 'left' ? -20 : direction === 'right' ? 20 : 0

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
