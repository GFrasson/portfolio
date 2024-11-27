'use client'

import { ReactNode, createContext, useState } from 'react'

interface PageContextType {
  goToNextPage: (lastPageIndex: number) => void
  goToBeforePage: () => void
  currentPage: number
}

interface PagesProviderProps {
  children: ReactNode
}

export const PagesContext = createContext({} as PageContextType)

export function PagesProvider({ children }: PagesProviderProps) {
  const [currentPage, setCurrentPage] = useState(0)

  function goToNextPage(pagesAmount: number) {
    if (currentPage >= pagesAmount - 1) {
      return
    }

    const nextPage = currentPage + 1

    goToPage(nextPage)
  }

  function goToBeforePage() {
    if (currentPage <= 0) {
      return
    }

    const beforePage = currentPage - 1
    goToPage(beforePage)
  }

  function goToPage(page: number) {
    setCurrentPage(page)

    window.scrollTo({
      top: page * window.innerHeight,
    })
  }

  return (
    <PagesContext.Provider
      value={{
        goToNextPage,
        goToBeforePage,
        currentPage,
      }}
    >
      {children}
    </PagesContext.Provider>
  )
}
