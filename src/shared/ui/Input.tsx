'use client';
import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-bg-soft);
  color: var(--color-text);
  font-size: 16px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px var(--color-primary);
  }
`;