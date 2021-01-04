import React from 'react';

import { Container, Dot } from './styles';
import { Slides } from '../index';

interface DotsProps {
  slides: Slides[];
  activeSlide: number;
  dotsDiameter?: number;
  handleClick(index: number): void;
}

const Dots: React.FC<DotsProps> = ({
  slides,
  activeSlide,
  dotsDiameter,
  handleClick,
}) => (
  <Container>
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
