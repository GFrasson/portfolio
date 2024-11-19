import { styled } from '@/styles'
import Image from 'next/image'

export const ProjectImage = styled(Image, {
  position: 'absolute',

  variants: {
    type: {
      primary: {
        right: 0,
        top: '50%',
      },

      secondary: {
        top: 0,
        right: '40%',
        zIndex: 1,
      },
    },
  },
})
