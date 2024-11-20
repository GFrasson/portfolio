import { styled } from '@/styles'
import { Button, Container, Heading, Text } from '@radix-ui/themes'
import Image from 'next/image'

export const PageContainer = styled(Container, {
  height: '100%',
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

  variants: {
    type: {
      primary: {
        right: 0,
        bottom: 0,

        borderTopRightRadius: '1rem',
        borderBottomLeftRadius: '1rem',
      },

      secondary: {
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
