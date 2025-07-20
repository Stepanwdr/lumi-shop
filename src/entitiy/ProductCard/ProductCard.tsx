'use client';

import styled from 'styled-components';
import Image from 'next/image';
import type {BaseItem} from "@/shared/types/Item";
import { Heart,ShoppingCart } from "lucide-react";
import { Rating } from "@/shared/ui/Rating";

type Props = {
  onClick : (id: number) => void;
  addToCard : (item:BaseItem) => void;
} & BaseItem;

 const ProductCard=({  onClick,addToCard,...item }: Props)=> {
   const discountedAmount =
     item.discounted
       ? item.price.amount * (1 + item.discounted / 100)
       : item.price.amount;

  return (
    <Card onClick={(ev)=>{
      onClick(+item.id)
    }}>
      <Heart color={'var(--color-primary)'} fill={'white'} className={'favourite-icon'} />
      <ImgWrapper>
        <Image src={item.images[0].url} alt={item.images[0].alt || ''} fill style={{ objectFit: 'cover' }} />
      </ImgWrapper>
      <Content>
         <Rating size={12} value={item.rating}/>
        <Price>{item.price.amount} {item.price.currency}</Price>
        <Discounted>{discountedAmount}</Discounted>
        <Title>{item.name}</Title>
        <AddButton onClick={(ev)=>{
          ev.stopPropagation()
          addToCard(item)
        }}>
          <ShoppingCart width={15} /> Գնել
        </AddButton>
      </Content>
    </Card>
  );
}

export default ProductCard

const Card = styled.article`
    width: 100%;
    max-width: 280px;
    border-radius: 1.25rem;
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
        z-index: 1;
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
    min-height: 10rem;
`;

const Title = styled.h3`
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--color-text-muted);
    margin: 0 0 0.5rem;
`;

const Price = styled.p`
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-accent);
`;


const AddButton =styled.button`
    display: flex;
    align-items: center;
    border-radius: 30px;
    padding: 5px;
    background: var(--color-primary);
    min-width: 40px;
    min-height: 40px;
    border: 2px solid white;
    width: 100%;
    justify-content: center;
    font-weight: bold;
    color: white;
    gap: 1rem;
    cursor: pointer;
`

const Discounted =styled.p`
    position: relative;
    color: var(--color-text-muted);
    &:after{
      content: '';
      height: 2px;
      background: var(--color-primary);
      width: 50%;
      position: absolute;
      left: -5px;
      bottom: 47%;
      transform: rotate(2deg)
  }
`