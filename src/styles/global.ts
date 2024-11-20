import { globalCss } from '@/styles'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    // background: 'linear-gradient(180deg, $accent5, $white)',
    // color: '$gray900',
    fontFamily: 'Solway',
    '-webkit-font-smoothing': 'antialiased',
  },

  '.radix-themes': {
    // '--heading-font-family': 'var(--font-solway)',
    '--default-font-family': 'var(--font-solway)',
    '--default-font-weight': '400',
  },
})
