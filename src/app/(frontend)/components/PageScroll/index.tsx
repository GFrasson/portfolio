'use client'

import {
  Children,
  ReactNode,
  useContext,
  useEffect,
  useState,
  WheelEvent,
} from 'react'
import SmoothScroll from '../SmoothScroll'
import { PagesContext } from '@/app/(frontend)/contexts/PageContext'
import styles from './styles.module.css'
import { useMobile } from '@/app/(frontend)/hooks/useMobile'

interface PageScrollProps {
  children: ReactNode
  disableScrollBar?: boolean
  pagesAmount: number
}

export function PageScroll({
  children,
  disableScrollBar = false,
  pagesAmount,
}: PageScrollProps) {
  const { goToNextPage, goToBeforePage } = useContext(PagesContext)
  const [isScrolling, setIsScrolling] = useState(false)
  const isMobile = useMobile()
  const hasScrollBar = isMobile || !disableScrollBar

  function handleOnWheel(event: WheelEvent) {
    if (isScrolling) {
      return
    }

    setIsScrolling(true)

    if (event.deltaY > 0) {
      goToNextPage(pagesAmount)
    } else {
      goToBeforePage()
    }

    setTimeout(() => setIsScrolling(false), 600)
  }
  
  useEffect(() => {
    if (hasScrollBar) {
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
  }, [hasScrollBar])

  if (isMobile) {
    return (
      <>
        {Children.map(children, (child, index) => (
          <section
            key={index}
            className={styles.pageSection}
          >
            {child}
          </section>
        ))}
      </>
    )
  }

  return (
    <SmoothScroll>
      {Children.map(children, (child, index) => (
        <section
          key={index}
          onWheel={(event) => handleOnWheel(event)}
          className={styles.pageScrollSection}
        >
          {child}
        </section>
      ))}
    </SmoothScroll>
  )
}
