'use client'

import { Theme } from '@radix-ui/themes'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function RadixThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Theme
      appearance={mounted ? (theme as 'light' | 'dark') : 'light'}
      accentColor="ruby"
      grayColor="mauve"
      panelBackground="translucent"
      scaling="100%"
      radius="medium"
    >
      {children}
    </Theme>
  )
}
