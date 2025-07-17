'use client';
import styled from 'styled-components';
import { Home, Search, ShoppingCart, User } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(var(--color-bg), 0.8);
  backdrop-filter: blur(12px);
  border-top: 1px solid var(--color-border);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`;

const Tab = styled.button<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  color: ${(p) => (p.$active ? 'var(--color-primary)' : 'var(--color-text-muted)')};
  transition: color 0.2s;
`;

const tabs = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Search, label: 'Search', path: '/search' },
  { icon: ShoppingCart, label: 'Cart', path: '/cart' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export function TabBar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Nav>
      {tabs.map(({ icon: Icon, label, path }) => (
        <Tab
          key={path}
          $active={pathname === path}
          onClick={() => router.push(path)}
        >
          <Icon size={24} />
          <span style={{ fontSize: 12 }}>{label}</span>
        </Tab>
      ))}
    </Nav>
  );
}