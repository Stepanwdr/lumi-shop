'use client'

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styled, { keyframes } from "styled-components";

const products = [
  { id: 1, name: "Product A", image: "/stories/story_1.png" },
  { id: 2, name: "Product B", image: "/stories/story_2.png" },
  { id: 3, name: "Product C", image: "/stories/story_3.png" },
  { id: 4, name: "Product C", image: "/stories/story_4.png" },
  { id: 5, name: "Product C", image: "/stories/story_5.png" },
  { id: 6, name: "Product C", image: "/stories/story_6.png" },
];

export const ProductStorySlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <StoryWrapper>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={5}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id}>
            <StoryWrapper>
              <BorderWrapper>
                <StoryImage src={product.image} alt={product.name} />
                {index === activeIndex && <ProgressBar />}
              </BorderWrapper>
            </StoryWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </StoryWrapper>
  );
};
const progress = keyframes`
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
`;

const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

const StoryWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 0.5rem;
`;

const BorderWrapper = styled.div`
    min-width: 84px;
    min-height: 84px;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(270deg, #ff7a18, #af002d, #319197);
    background-size: 600% 600%;
    animation: ${gradientAnimation} 6s ease infinite;
`;

const StoryImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    background: #fff;
    border: 3px dotted white;
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 3px;
    background: #ccc;
    margin-top: 6px;
    overflow: hidden;
    border-radius: 2px;

    &::after {
        content: '';
        display: block;
        height: 100%;
        background: linear-gradient(to right, #ff7a18, #af002d);
        animation: ${progress} 5s linear forwards;
        transform-origin: left;
    }
`;