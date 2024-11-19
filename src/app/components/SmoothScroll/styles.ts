import { styled } from '@/styles'
import { motion } from 'framer-motion'

export const ScrollBody = styled(motion.div, {
  width: '100vw',
  position: 'fixed',
  top: 0,
  display: 'flex',
  flexDirection: 'column',
})
