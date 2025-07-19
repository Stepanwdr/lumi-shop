'use client';

import styled from 'styled-components';
import Image from 'next/image';
import {BaseItem} from "@/shared/types/Item";
import {Heart,ShoppingCart} from "lucide-react";

type Props = {
  onClick : (id: number) => void;
} & BaseItem;

export const ProductCard=({  onClick,...item }: Props)=> {
  return (
    <Card onClick={()=>onClick(+item.id)}>
      <Heart color={'var(--color-primary)'} fill={'white'} className={'favourite-icon'} />
      <ImgWrapper>
        <Image src={item.images[0].url.replace('.','')} alt={item.images[0].alt || ''} fill style={{ objectFit: 'cover' }} />
      </ImgWrapper>
      <Content>
        <Price>{item.price.amount} {item.price.currency}</Price>
        <Title>{item.name}</Title>
        <AddButton>
          <ShoppingCart width={15} /> Գնել
        </AddButton>
      </Content>
    </Card>
  );
}


const Card = styled.article`
    width: 100%;
    max-width: 280px;
    border-radius: 1.25rem;        /* 20 px */
    background: #fff;
    position: relative;
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
    .favourite-icon{
        position: absolute;
        right: 15px;
        top: 15px;
        z-index: 10;
    }
`;

const ImgWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
`;

const Content = styled.div`
    padding: 1rem 1.25rem 1.5rem;
    position: relative;
    flex: content;
`;

const Title = styled.h3`
    font-size: 0.85rem;
    font-weight: 600;
    color: #111;
    margin: 0 0 0.5rem;
`;

const Price = styled.p`
    font-size: 1.25rem;
    font-weight: 700;
    color: #3b82f6;
`;


const AddButton =styled.button`
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 5px;
    background: var(--color-primary);
    min-width: 40px;
    min-height: 40px;
    top: 0;
    border: 2px solid white;
    width: 100%;
    justify-content: center;
    font-weight: bold;
    color: white;
    gap: 1rem;
`