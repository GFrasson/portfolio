'use client'

import { useContext } from 'react'
import { PagesContext } from '@/app/(frontend)/contexts/PageContext'
import { Button, Flex, Text } from '@radix-ui/themes'
import { ArrowDownIcon } from '@radix-ui/react-icons'
import styles from '../styles.module.css'
import { useMobile } from '@/app/(frontend)/hooks/useMobile'

interface NextPageButtonProps {
  pagesAmount: number
}

export function NextPageButton({ pagesAmount }: NextPageButtonProps) {
  const { goToNextPage } = useContext(PagesContext)
  const isMobile = useMobile();

  if (isMobile) {
    return null
  }

  return (
    <Button
      className={styles.baseChangePageButton}
      variant="surface"
      onClick={() => goToNextPage(pagesAmount)}
    >
      <Flex align="center" justify="center" gap="1">
        <Text>Próximo</Text>
        <ArrowDownIcon />
      </Flex>
    </Button>
  )
}
