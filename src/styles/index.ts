import type * as Stitches from '@stitches/react'
import { createStitches, defaultThemeMap } from '@stitches/react'
import { tomato, jade, amber, mauve } from '@radix-ui/colors'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      blackOverlay: 'rgba(0, 0, 0, 0.7)',

      accent1: tomato.tomato1,
      accent2: tomato.tomato2,
      accent3: tomato.tomato3,
      accent4: tomato.tomato4,
      accent5: tomato.tomato5,
      accent6: tomato.tomato6,
      accent7: tomato.tomato7,
      accent8: tomato.tomato8,
      accent9: tomato.tomato9,
      accent10: tomato.tomato10,
      accent11: tomato.tomato11,
      accent12: tomato.tomato12,

      ...jade,
      ...amber,
      ...mauve,
    },
  },

  utils: {
    marginX: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
  },
})
