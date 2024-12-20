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
import { PagesContext } from '@/app/contexts/PageContext'
import styles from './styles.module.css'

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
