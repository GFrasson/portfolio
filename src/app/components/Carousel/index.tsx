'use client'

import { Children, ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './styles.module.css'

import {
  EffectCreative,
  Keyboard,
  Navigation,
  Pagination,
} from 'swiper/modules'

interface CarouselProps {
  children: ReactNode
}

export function Carousel({ children }: CarouselProps) {
  return (
    <Swiper
      grabCursor={true}
      effect={'creative'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      modules={[EffectCreative, Navigation, Pagination, Keyboard]}
      className={styles.swiper}
      keyboard={{
        enabled: true,
      }}
      loop={true}
      navigation={true}
      pagination={{
        dynamicBullets: true,
      }}
    >
      {Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}
