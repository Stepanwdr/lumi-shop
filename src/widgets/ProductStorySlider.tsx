'use client'

import React, {Dispatch, SetStateAction, useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styled, { keyframes } from "styled-components";
import {BaseItem} from "@/shared/types/Item";
import { mockItems } from "@/entitiy/ProductCard/mock";

interface Props{
  setStoryItem:Dispatch<SetStateAction<BaseItem | null>>
}

export const ProductStorySlider: React.FC<Props> = ({setStoryItem}) => {
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
        {mockItems.map((product, index) => (
          <SwiperSlide key={product.id} onClick={()=>setStoryItem(product)}>
            <StoryWrapper>
              <BorderWrapper>
                <StoryImage src={product.images[0].url} alt={product.name} />
                {index === activeIndex && <CircularProgress $active={index === activeIndex} />}
              </BorderWrapper>
            </StoryWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </StoryWrapper>
  );
};

const gradientAnimation = keyframes`
    0% { background-position: 0 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0 50%; }
`;

const StoryWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 0.5rem;
    gap: 1rem;
    
    .swiper-wrapper {
     gap: 1rem;
    }
`;


const BorderWrapper = styled.div`
  position: relative;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(270deg, white, #af002d, #319197);
  background-size: 600% 600%;
  animation: ${gradientAnimation} 6s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StoryImage = styled.img`
  width: 76px;
  height: 76px;
  border-radius: 50%;
  object-fit: cover;
  background: #fff;
  z-index: 2;
  border: 3px solid pink;
`;

const CircularProgress = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: conic-gradient(
    #ff49a0 ${({ $active }) => ($active ? '100%' : '0%')},
    transparent 0%
  );
  mask: radial-gradient(farthest-side, transparent 71%, black 72%);
  z-index: 1;
  transition: background 3s linear;
`;