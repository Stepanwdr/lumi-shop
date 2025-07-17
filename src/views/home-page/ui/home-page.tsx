import styled from 'styled-components';
import { ThemeToggle } from "@/shared/ui/Toggle";
import { SearchBar } from "@/widgets/SearchBar";
import { TabBar } from "@/shared/ui/TabBar";
import { ProductCard } from "@/widgets/ProductCard";
import RootLayout from "@/shared/ui/layout";
import BannerSwiper from "@/widgets/BannerSwiper";

const mock = Array.from({ length: 24 }, (_, i) => ({
  id: i.toString(),
  name: `LuMi Product ${i + 1}`,
  price: 29.9 + i,
  image: `https://picsum.photos/seed/${i}/400`,
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

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  h1 {
    font-weight: 700;
    font-size: 24px;
    color: var(--color-primary);
  }
`;

export  const  HomePage=()=> {
  return (
    <RootLayout>
      <Header>
        <h1>LuMi</h1>
        <SearchBar />
        <ThemeToggle />
        {/*<BannerSwiper />*/}
      </Header>

      <Grid>
        {mock.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </Grid>
      <TabBar />
    </RootLayout>
  );
}