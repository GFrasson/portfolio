'use client'

import { useScroll, useSpring, useTransform, motion } from 'framer-motion'
import { useContext, useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import { PagesContext } from '@/app/(frontend)/contexts/PageContext'

interface WindowSize {
  width: number
  height: number
}

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({
  children,
}: SmoothScrollProps) {
  const { currentPage } = useContext(PagesContext)

  // Scroll progress (0 to 1) of the window
  const { scrollYProgress } = useScroll()

  // Use framer motion's useSpring() hook to smooth the scrollYProgress value
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 50,
  })

  // The height of the content in pixels
  const [contentHeight, setContentHeight] = useState(0)

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  })

  // The value to transform the content to
  const y = useTransform(
    smoothProgress,
    (v) => v * -(contentHeight - windowSize.height),
  )

  // A reference to hold the value of the content
  const contentRef = useRef<HTMLDivElement>(null)

  // Reset the `contentHeight` value when the children change, or when the window resizes
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight)
      }
    }

    // Call the resize handler once, initially
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [contentRef])

  useEffect(() => {
    const progress = currentPage / (contentHeight / windowSize.height - 1)

    if (!Number.isNaN(progress)) {
      scrollYProgress.set(progress)
      const scrollY = progress * (contentHeight - windowSize.height)
      window.scrollTo({ top: scrollY, behavior: 'instant' })
    }
  }, [currentPage, contentHeight, windowSize.height, scrollYProgress])

  return (
    <>
      {/**
       * An invisible div with the actual height of the content.
       * This will expand the height of the body and trigger the default browser scrollbar.
       */}
      <div style={{ height: contentHeight }} />

      {/**
       * The content.  If it exceeds the height of the viewport, translate its y-position to the top.
       * Its position is fixed by default and moves when the user scrolls.
       */}
      <motion.div style={{ y }} ref={contentRef} className={styles.scrollBody}>
        {children}
      </motion.div>
    </>
  )
}
