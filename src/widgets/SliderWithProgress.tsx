// components/SliderWithProgress.tsx
'use client'

import {  useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import styled, { keyframes, css } from 'styled-components'

const slides = [
  { title: 'Slide 1', content: 'This is the first slide' },
  { title: 'Slide 2', content: 'Second one coming up!' },
  { title: 'Slide 3', content: 'Last but not least' },
]

 export const SliderWithProgress = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<any>(null)

  return (
    <SliderWrapper>
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{ delay: 4000 }}
        loop
      >
        {slides.map((slide, index) => (
          <StyledSlide key={index}>
            <h2>{slide.title}</h2>
            <p>{slide.content}</p>
            <ProgressBorder $active={index === activeIndex} $duration={4000} />
          </StyledSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  )
}



// В том же файле или выносишь отдельно

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: auto;
  overflow: hidden;
  border-radius: 2rem;
`

const StyledSlide = styled(SwiperSlide)`
  position: relative;
  padding: 5rem 2rem;
  background: #111;
  color: white;
  border: 2px solid #444;
  border-radius: 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
  }
  p {
    margin-top: 1rem;
  }
`

const borderAnimation = keyframes`
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
`

const ProgressBorder = styled.div<{ $active: boolean; $duration: number }>`
    position: absolute;
    inset: 0;
    border-radius: 2rem;
    pointer-events: none;
    border: 2px solid transparent;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        border: 2px solid #00ff99;
        border-radius: 2rem;
        box-sizing: border-box;
        z-index: 1;

        animation: ${({ $active, $duration }) =>
                $active
                        ? css`${borderAnimation} ${$duration}ms linear forwards`
                        : 'none'};
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
    }
`

