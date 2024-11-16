import { globalCss } from '@/styles'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray100',
    color: '$gray900',
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: 'Roboto, sans-serif',
  },
})
