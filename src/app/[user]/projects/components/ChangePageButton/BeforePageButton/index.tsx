'use client'

import { PagesContext } from '@/app/contexts/PageContext'
import { useContext } from 'react'
import { Button, Flex, Text } from '@radix-ui/themes'
import { ArrowUpIcon } from '@radix-ui/react-icons'
import styles from '../styles.module.css'
import { useMobile } from '@/app/hooks/useMobile'

export function BeforePageButton() {
  const { goToBeforePage } = useContext(PagesContext)
  const isMobile = useMobile();

  if (isMobile) {
    return null
  }

  return (
    <Button
      className={styles.baseChangePageButton}
      variant="surface"
      onClick={() => goToBeforePage()}
    >
      <Flex align="center" justify="center" gap="1">
        <Text>Anterior</Text>
        <ArrowUpIcon />
      </Flex>
    </Button>
  )
}
