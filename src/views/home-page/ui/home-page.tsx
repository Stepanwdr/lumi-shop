"use client"

import styled from 'styled-components';
import { TabBar } from "@/shared/ui/TabBar";
import BannerSwiper from "@/widgets/BannerSwiper";
import { useRouter } from "next/navigation";
import { ProductStorySlider } from "@/widgets/ProductStorySlider";
import {ProductStoryPreview} from "@/widgets/ProductStoryPreview";
import {ProductCard} from "@/entitiy/ProductCard/ProductCard";
import {mockItems} from "@/entitiy/ProductCard/mock";
import {useState} from "react";
import {BaseItem} from "@/shared/types/Item";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 12px 16px 100px; /* space for TabBar */
    
  @media (min-width: 768px) {
      grid-template-columns: repeat(6, 1fr);

  }  
`;

export  const  HomePage=()=> {
  const router = useRouter()

  const [storyItem,setStoryItem]=useState<BaseItem | null>( null);

  return (
    <Wrapper>
      <BannerSwiper />
      <ProductStorySlider setStoryItem={setStoryItem}/>
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