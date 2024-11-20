import { styled } from '@/styles'
import { Button, Heading, Text } from '@radix-ui/themes'
import Image from 'next/image'

export const PageContainer = styled('div', {
  height: '100%',
  maxWidth: '88%',
  margin: '0 auto',
})

export const ProjectHeading = styled(Heading, {
  maxWidth: '20rem',
})

export const DescriptionText = styled(Text, {
  maxWidth: '20rem',
  textAlign: 'justify',
})

export const ShowProjectButton = styled(Button, {
  width: '7rem',
  fontWeight: 'bold',
  cursor: 'pointer',
})

export const ChangePageButton = styled(Button, {
  width: '7rem',
  fontWeight: 'bold',
  cursor: 'pointer',
})

export const ProjectImage = styled(Image, {
  position: 'absolute',
  objectFit: 'cover',

  variants: {
    type: {
      primary: {
        width: '50%',
        height: '75%',

        right: 0,
        bottom: 0,

        borderTopRightRadius: '1rem',
        borderBottomLeftRadius: '1rem',
      },

      secondary: {
        width: '30%',
        height: '45%',

        top: 0,
        right: '35%',
        zIndex: 1,

        borderBottomLeftRadius: '1rem',
        borderBottomRightRadius: '1rem',

        transition: 'ease-in-out 1s',

        '&:hover': {
          transformOrigin: 'top left',
          transform: 'scale(1.5)',

          transition: 'ease-in-out 1s',
        },
      },
    },
  },
})
