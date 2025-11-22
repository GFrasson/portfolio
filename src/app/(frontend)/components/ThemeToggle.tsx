'use client'

import { Flex, Switch, Text } from '@radix-ui/themes'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Flex gap="2" align="center" px="2" py="1">
        <SunIcon width="16" height="16" />
        <Switch size="1" disabled />
        <MoonIcon width="16" height="16" />
      </Flex>
    )
  }

  return (
    <Flex gap="2" align="center" px="2" py="1">
      <SunIcon width="16" height="16" />
      <Switch
        size="1"
        checked={theme === 'dark'}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        aria-label="Toggle theme"
      />
      <MoonIcon width="16" height="16" />
    </Flex>
  )
}
