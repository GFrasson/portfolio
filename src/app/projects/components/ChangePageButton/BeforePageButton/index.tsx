'use client'

import { PagesContext } from '@/app/contexts/PageContext'
import { BaseChangePageButton } from '..'
import { useContext } from 'react'
import { Flex, Text } from '@radix-ui/themes'
import { ArrowUpIcon } from '@radix-ui/react-icons'

interface BeforePageButtonProps {
  currentPage: number
}

export function BeforePageButton({ currentPage }: BeforePageButtonProps) {
  const { goToBeforePage } = useContext(PagesContext)

  return (
    <BaseChangePageButton
      variant="surface"
      onClick={() => goToBeforePage(currentPage)}
    >
      <Flex align="center" justify="center" gap="1">
        <Text>Anterior</Text>
        <ArrowUpIcon />
      </Flex>
    </BaseChangePageButton>
  )
}
