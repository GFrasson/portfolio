import { styled } from '@/styles'
import { Box, DropdownMenu } from '@radix-ui/themes'
import Link from 'next/link'

export const NavBarBox = styled(Box, {
  zIndex: '10',
  width: '100%',
  paddingY: '12px',
  paddingX: '24px',
  position: 'fixed',
})

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger, {
  position: 'fixed',
  top: '1.5rem',
  left: '1.5rem',
  zIndex: 10,
  cursor: 'pointer',
  backgroundColor: '$accent4',
})

export const DropdownMenuContent = styled(DropdownMenu.Content, {
  width: '10rem',
})

export const DropdownMenuLink = styled(Link, {
  textDecoration: 'none',
  color: '$mauve12',
})

export const DropdownMenuItem = styled(DropdownMenu.Item, {
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$accent6',
    color: '$mauve12',
  },
})
