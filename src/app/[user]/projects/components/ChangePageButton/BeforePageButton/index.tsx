'use client'

import { PagesContext } from '@/app/contexts/PageContext'
import { useContext } from 'react'
import { Button, Flex, Text } from '@radix-ui/themes'
import { ArrowUpIcon } from '@radix-ui/react-icons'
import styles from '../styles.module.css'

interface BeforePageButtonProps {
  currentPage: number
}

export function BeforePageButton({ currentPage }: BeforePageButtonProps) {
  const { goToBeforePage } = useContext(PagesContext)

  return (
    <Button
      className={styles.baseChangePageButton}
      variant="surface"
      onClick={() => goToBeforePage(currentPage)}
    >
      <Flex align="center" justify="center" gap="1">
        <Text>Anterior</Text>
        <ArrowUpIcon />
      </Flex>
    </Button>
  )
}
