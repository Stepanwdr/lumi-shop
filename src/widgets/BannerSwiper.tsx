'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    title: 'Лучшее предложение недели',
    text: 'Скидка 25 % на все кроссовки Nike',
    img: 'https://picsum.photos/seed/nike/1200/400',
    link: '/offers/nike-sale',
  },
  {
    id: 2,
    title: 'Новинка',
    text: 'Только поступили новые смарт-часы',
    img: 'https://picsum.photos/seed/watch/1200/400',
    link: '/catalog/smart-watches',
  },
];

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
  height: 100%;
  max-height: 400px;
`;

const SlideLink = styled.a`
  position: relative;
  display: block;
  width: 100%;
  height: 16rem;
  @media (min-width: 768px) {
    height: 24rem;
  }
  border-radius: 1rem;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Subtitle = styled.p`
  color: #e5e5e5;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export default function BannerSwiper() {
  return (
    <Wrapper>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <SlideLink href={s.link}>
              <Image
                src={s.img}
                alt={s.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <Overlay>
                <Title>{s.title}</Title>
                <Subtitle>{s.text}</Subtitle>
              </Overlay>
            </SlideLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}