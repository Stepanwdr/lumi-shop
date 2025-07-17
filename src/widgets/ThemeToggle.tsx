'use client';
import { Sun, Moon } from 'lucide-react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Toggle = styled.button`
  background: none;
  border: none;
  color: var(--color-primary);
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: transform 0.2s;
  &:hover {
    transform: rotate(30deg);
  }
`;

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = (localStorage.getItem('lumi-theme') as 'light' | 'dark') || 'light';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('lumi-theme', next);
  };

  return (
    <Toggle onClick={toggle} aria-label="Toggle theme">
      {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
    </Toggle>
  );
}