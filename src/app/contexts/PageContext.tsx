'use client'

import { ReactNode, createContext } from 'react'

interface PageContextType {
  goToNextPage: (currentPage: number, lastPageIndex: number) => void
  goToBeforePage: (currentPage: number) => void
}

interface PagesProviderProps {
  children: ReactNode
}

export const PagesContext = createContext({} as PageContextType)

export function PagesProvider({ children }: PagesProviderProps) {
  function goToNextPage(currentPage: number, pagesAmount: number) {
    if (currentPage >= pagesAmount - 1) {
      return
    }

    window.scrollBy({
      top: window.innerHeight,
    })
  }

  function goToBeforePage(currentPage: number) {
    if (currentPage <= 0) {
      return
    }

    window.scrollBy({
      top: -window.innerHeight,
    })
  }

  return (
    <PagesContext.Provider
      value={{
        goToNextPage,
        goToBeforePage,
      }}
    >
      {children}
    </PagesContext.Provider>
  )
}
