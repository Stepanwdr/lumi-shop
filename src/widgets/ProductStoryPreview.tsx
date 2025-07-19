import styled from 'styled-components';
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { BaseItem } from '@/shared/types/Item';

interface Props {
  product: BaseItem | null;
  onClose: () => void;
}

export const ProductStoryPreview: FC<Props> = ({ product, onClose }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!product) return;

    const total = 5000;            // 5 секунд
    const step = 50;               // обновляем каждые 50 мс
    const tick = 100 / (total / step);

    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          onClose();
          return 100;
        }
        return p + tick;
      });
    }, step);

    return () => {
      clearInterval(timer);
      setProgress(0);              // сброс при размонтировании
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <Overlay onClick={onClose}>
      <StoryCard onClick={(e) => e.stopPropagation()}>
        {/* Прогресс-бар */}
        <ProgressBar>
          <Progress fill={progress} />
        </ProgressBar>

        <StoryImage
          src={'/stories/story_1.png'}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />

        <BottomBar>
          <Title>{product.name}</Title>
          <Price>{product.price.amount.toLocaleString('ru-RU')} ₽</Price>
        </BottomBar>
      </StoryCard>
    </Overlay>
  );
};
/* ------------------ styled ------------------ */

const StoryImage = styled(Image)`
    width: 100%;
    height: 100%;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%);
  color: #fff;
`;

const Title = styled.h2`
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 4px;
`;

const Price = styled.span`
  font-size: 1rem;
  font-weight: 700;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  cursor: pointer;
    height: 100%;
    padding: 20px;
`;

const StoryCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 9/16;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  cursor: default;
    height: 100%;
`;

/* --- прогресс --- */
const ProgressBar = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  z-index: 10;
`;

const Progress = styled.div<{ fill: number }>`
  height: 100%;
  background: #fff;
  border-radius: 2px;
  width: ${({ fill }) => fill}%;
  transition: width 50ms linear;
    background: conic-gradient(
      #ff49a0,
      100%,
      transparent 0%
    );
`;