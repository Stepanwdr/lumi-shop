'use client';

import styled from 'styled-components';
import Image from 'next/image';
import {BaseItem} from "@/shared/types/Item";

type Props = {
  item:BaseItem
  onClick : (id: number) => void;
};

export const ProductCard=({  onClick,...item }: Props)=> {
  return (
    <Card onClick={()=>onClick(+item.item.id)}>
      <ImgWrapper>
        <Image src={'/stories/story_1.png'} alt={item.item.images[0].alt || ''} fill style={{ objectFit: 'cover' }} />
      </ImgWrapper>
      <Content>
        <Title>{item.item.name}</Title>
        <Price>${item.item.price.amount}</Price>
      </Content>
    </Card>
  );
}


const Card = styled.article`
    width: 100%;
    max-width: 280px;
    border-radius: 1.25rem;        /* 20 px */
    background: #fff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06),
    0 0 0 1px rgba(255, 255, 255, 0.8),
    0 0 24px -6px rgba(59, 130, 246, 0.35); /* blue-tint shadow */
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08),
        0 0 0 1px rgba(255, 255, 255, 0.9),
        0 0 32px -4px rgba(59, 130, 246, 0.45);
    }
`;

const ImgWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
`;

const Content = styled.div`
    padding: 1rem 1.25rem 1.5rem;
`;

const Title = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    color: #111;
    margin: 0 0 0.5rem;
`;

const Price = styled.p`
    font-size: 1.25rem;
    font-weight: 700;
    color: #3b82f6;
`;
