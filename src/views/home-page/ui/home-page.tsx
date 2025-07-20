"use client"

import styled from 'styled-components';
import { TabBar } from "@/shared/ui/TabBar";
import BannerSwiper from "@/widgets/BannerSwiper";
import { useRouter } from "next/navigation";
import { ProductStorySlider } from "@/widgets/ProductStorySlider";
import {ProductStoryPreview} from "@/widgets/ProductStoryPreview";
import {mockItems} from "@/entitiy/ProductCard/mock";
import React, {useState} from "react";
import {BaseItem, CATEGORIES} from "@/shared/types/Item";
import dynamic from "next/dynamic";

interface TabProps {
  $active?: boolean;
}
export const mockCategories: CATEGORIES[] | 'All' = [
  'women',
  'men',
  'kids',
  'shoes',
  'home',
  'beauty',
  'electronics',
  'sport',
  'pets',
  'health',
  'handmade'
];
const ProductCard = dynamic(() => import("@/entitiy/ProductCard/ProductCard"), {
  loading: () => <div>Loading...</div>,
  ssr: false, // если это клиентский компонент
});

export  const  HomePage=()=> {
  const router = useRouter()

  const [storyItem,setStoryItem]=useState<BaseItem | null>( null);
  const [activeTab, setActiveTab] = useState('all');
  const [activeCategory, setActiveCategory] = useState<CATEGORIES | 'All'>('women');

  return (
    <Wrapper>
      <BannerSwiper />
      <Title>New</Title>
      <ProductStorySlider setStoryItem={setStoryItem}/>
      <Tabs>
        <Tab
          $active={activeCategory === 'All'}
          onClick={() => setActiveCategory('All')}
        >
         All
        </Tab>
        {mockCategories.map((category) => (
          <Tab
            key={category}
            $active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Tab>
        ))}
      </Tabs>
      <Grid>
        {mockItems.map((p) => (
          <ProductCard  key={p.id} {...p} onClick={(id)=>router.push(`items/${id}`)} />
        ))}
      </Grid>
      <TabBar />
      {storyItem && <ProductStoryPreview product={storyItem} onClose={() => setStoryItem(null)}/>}
    </Wrapper>
  );
}

const Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 12px 16px 100px; /* space for TabBar */
    
  @media (min-width: 768px) {
      grid-template-columns: repeat(6, 1fr);
  }  
`;

const Title =styled.h2`
    padding: 1rem;
`

const Tabs =styled.div`
  display: flex;
  padding: 1.1rem;
  padding-left: 0;
  align-items: center;    
  gap: .5rem;
  margin-left: 1rem;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
        display: none;
    }
`

const Tab = styled.div<TabProps>`
    padding: 10px 20px;
    border-radius: 30px;
    background: ${({ $active }) => ($active ? 'var(--color-primary)' : '#fff')};
    color: ${({ $active }) => ($active ? '#fff' : 'var(--color-primary)')};
    font-weight: 500;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    text-transform: capitalize;
    &:hover {
        background: ${({ $active }) => ($active ? '#111' : '#f0f0f0')};
    }
`;