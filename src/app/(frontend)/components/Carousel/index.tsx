'use client'

import { Children, ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/zoom'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './styles.module.css'

import { EffectFade, Keyboard, Navigation, Pagination, Zoom } from 'swiper/modules'

interface CarouselProps {
  children: ReactNode
}

export function Carousel({ children }: CarouselProps) {
  return (
    <Swiper
      grabCursor={true}
      effect={'fade'}
      fadeEffect={{
        crossFade: true,
      }}
      modules={[EffectFade, Navigation, Pagination, Keyboard, Zoom]}
      className={styles.swiper}
      keyboard={{
        enabled: true,
      }}
      loop={true}
      navigation={true}
      pagination={{
        dynamicBullets: true,
      }}
      zoom={true}
    >
      {Children.map(children, (child, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-zoom-container">{child}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
