'use client'

import { ReactNode, useEffect, useState, WheelEvent } from 'react'
import { PageScrollSection } from '../PageScrollSection'
import SmoothScroll from '../SmoothScroll'

interface PageScrollProps {
  children: ReactNode[]
  disableScrollBar?: boolean
}

export function PageScroll({
  children,
  disableScrollBar = false,
}: PageScrollProps) {
  const [currentPage, setCurrentPage] = useState(0)

  function handleOnWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
      goToNextPage()
    } else {
      goToBeforePage()
    }
  }

  function goToNextPage() {
    if (currentPage >= children.length - 1) {
      return
    }

    setCurrentPage((state) => state + 1)

    window.scrollBy({
      top: window.innerHeight,
    })
  }

  function goToBeforePage() {
    if (currentPage <= 0) {
      return
    }

    setCurrentPage((state) => state - 1)

    window.scrollBy({
      top: -window.innerHeight,
    })
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
