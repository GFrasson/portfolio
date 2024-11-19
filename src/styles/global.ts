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
    // fontFamily: 'Roboto, sans-serif',
    '-webkit-font-smoothing': 'antialiased',
  },
})
