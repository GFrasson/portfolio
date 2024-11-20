'use client'

import { useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ScrollBody } from './styles'

interface WindowSize {
  width: number
  height: number
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode
}) {
  // Scroll progress (0 to 1) of the window
  const { scrollYProgress } = useScroll()

  // Use framer motion's useSpring() hook to smooth the scrollYProgress value
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 50,
    // damping
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
      <ScrollBody style={{ y }} ref={contentRef}>
        {children}
      </ScrollBody>
    </>
  )
}
