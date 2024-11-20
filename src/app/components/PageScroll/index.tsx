'use client'

import { ReactNode, useContext, useEffect, WheelEvent } from 'react'
import { PageScrollSection } from '../PageScrollSection'
import SmoothScroll from '../SmoothScroll'
import { PagesContext } from '@/app/contexts/PageContext'

interface PageScrollProps {
  children: ReactNode[]
  disableScrollBar?: boolean
  pagesAmount: number
}

export function PageScroll({
  children,
  disableScrollBar = false,
  pagesAmount,
}: PageScrollProps) {
  const { goToNextPage, goToBeforePage } = useContext(PagesContext)

  function handleOnWheel(event: WheelEvent, currentPage: number) {
    if (event.deltaY > 0) {
      goToNextPage(currentPage, pagesAmount)
    } else {
      goToBeforePage(currentPage)
    }
  }

  useEffect(() => {
    if (!disableScrollBar) {
      return
    }

    const body = document.querySelector('body')
    if (!body) {
      return
    }

    const bodyOverflowInitialValue = body.style.overflow
    body.style.overflow = 'hidden'

    return () => {
      body.style.overflow = bodyOverflowInitialValue
    }
  }, [disableScrollBar])

  return (
    <SmoothScroll>
      {children.map((child, index) => (
        <PageScrollSection
          key={index}
          onWheel={(event) => handleOnWheel(event, index)}
        >
          {child}
        </PageScrollSection>
      ))}
    </SmoothScroll>
  )
}
