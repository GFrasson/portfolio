'use client'

import { useContext } from 'react'
import { BaseChangePageButton } from '..'
import { PagesContext } from '@/app/contexts/PageContext'
import { Flex, Text } from '@radix-ui/themes'
import { ArrowDownIcon } from '@radix-ui/react-icons'

interface NextPageButtonProps {
  currentPage: number
  pagesAmount: number
}

export function NextPageButton({
  currentPage,
  pagesAmount,
}: NextPageButtonProps) {
  const { goToNextPage } = useContext(PagesContext)

  return (
    <BaseChangePageButton
      variant="surface"
      onClick={() => goToNextPage(currentPage, pagesAmount)}
    >
      <Flex align="center" justify="center" gap="1">
        <Text>Próximo</Text>
        <ArrowDownIcon />
      </Flex>
    </BaseChangePageButton>
  )
}
