import React, { memo } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

interface ArrowProps {
  direction: string;
  handleClick(): void;
}

const Arrow: React.FC<ArrowProps> = ({ direction, handleClick }) => (
  <Container direction={direction} onClick={handleClick}>
    {direction === 'left' ? <FiChevronLeft /> : <FiChevronRight />}
  </Container>
);

export default memo(Arrow);
