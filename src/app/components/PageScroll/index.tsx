'use client'

import { ReactNode, useEffect, WheelEvent } from 'react'
import { PageScrollSection } from '../PageScrollSection'
import SmoothScroll from '../SmoothScroll'

interface PageScrollProps {
  children: ReactNode[]
  disableScrollBar?: boolean
  onGoToNextPage: () => void
  onGoToBeforePage: () => void
}

export function PageScroll({
  children,
  disableScrollBar = false,
  onGoToNextPage,
  onGoToBeforePage,
}: PageScrollProps) {
  function handleOnWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
      onGoToNextPage()
    } else {
      onGoToBeforePage()
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
        <PageScrollSection key={index} onWheel={handleOnWheel}>
          {child}
        </PageScrollSection>
      ))}
    </SmoothScroll>
  )
}
