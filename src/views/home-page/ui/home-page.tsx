"use client"

import styled from 'styled-components';
import { TabBar } from "@/shared/ui/TabBar";
import { ProductCard } from "@/widgets/ProductCard";
import BannerSwiper from "@/widgets/BannerSwiper";
import { useRouter } from "next/navigation";
import { ProductStorySlider } from "@/widgets/ProductStorySlider";

const mock = Array.from({ length: 24 }, (_, i) => ({
  id: i.toString(),
  name: `LuMi Product ${i + 1}`,
  price: 29.9 + i,
  image: `/logo.png`,
}));

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
  return (
    <Wrapper>
      <BannerSwiper />
      <ProductStorySlider/>
      <Grid>
        {mock.map((p) => (
          <ProductCard key={p.id} {...p} onClick={(id)=>router.push(`items/${id}`)} />
        ))}
      </Grid>
      <TabBar />
    </Wrapper>
  );
}

const Wrapper =styled.div`
     display: flex;
    flex-direction: column;
    gap: 1rem;
;
`