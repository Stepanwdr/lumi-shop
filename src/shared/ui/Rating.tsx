'use client'

import React from 'react';
import styled from 'styled-components';
import { Star } from 'lucide-react'; // или замени на свою иконку

interface RatingProps {
  value: number; // от 0 до 5
  max?: number;
  size?: number;
}

export const Rating: React.FC<RatingProps> = ({ value, max = 5, size = 20 }) => {
  const stars = Array.from({ length: max }, (_, i) => i + 1);

  return (
    <StarWrapper>
      {stars.map((star) => (
        <StarIcon key={star} $filled={value >= star} $size={size} />
      ))}
    </StarWrapper>
  );
};

// Стили

const StarWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const StarIcon = styled(Star)<{ $filled: boolean; $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  stroke: ${({ $filled }) => ($filled ? '#FFC107' : '#ccc')};
  fill: ${({ $filled }) => ($filled ? '#FFC107' : 'none')};
  transition: all 0.2s ease;
`;
