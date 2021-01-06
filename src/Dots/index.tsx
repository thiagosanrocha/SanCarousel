import React from 'react';

import { Container, Dot } from './styles';
import { Slides } from '../index';

interface DotsProps {
  slides: Slides[];
  activeSlide: number;
  dotsDiameter?: number;
  marginRightDots?: string;
  marginBottomDots?: string;
  handleClick(index: number): void;
}

const Dots: React.FC<DotsProps> = ({
  slides,
  activeSlide,
  dotsDiameter,
  marginRightDots,
  marginBottomDots,
  handleClick,
}) => (
  <Container
    marginRightDots={marginRightDots}
    marginBottomDots={marginBottomDots}
  >
    {slides.map((slide, index) => (
      <Dot
        key={slide.id}
        active={index === activeSlide}
        onClick={() => handleClick(index)}
        dotsDiameter={dotsDiameter}
      />
    ))}
  </Container>
);

export default Dots;
