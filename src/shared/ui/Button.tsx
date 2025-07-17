'use client';
import styled from 'styled-components';

export const Button = styled.button<{
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  border-radius: ${(p) =>
  p.size === 'sm' ? 'var(--radius-sm)' : 'var(--radius-md)'};

  padding: ${(p) =>
  p.size === 'sm' ? '6px 12px' : p.size === 'lg' ? '14px 24px' : '10px 16px'};

  font-size: ${(p) =>
  p.size === 'sm' ? '14px' : p.size === 'lg' ? '18px' : '16px'};

  ${(p) => {
  switch (p.variant) {
    case 'primary':
      return `
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          color: #fff;
          box-shadow: var(--shadow-m);
          &:hover {
            box-shadow: var(--shadow-glow);
            transform: scale(1.02);
          }
        `;
    case 'secondary':
      return `
          background: var(--color-bg-soft);
          color: var(--color-text);
          border: 1px solid var(--color-border);
        `;
    case 'ghost':
    default:
      return `
          background: transparent;
          color: var(--color-primary);
        `;
  }
}}
`;