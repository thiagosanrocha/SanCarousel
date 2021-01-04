import React, { memo } from 'react';

import { Container, Image } from './styles';

interface SlideProps {
  img: string;
  spaceBetweenSlides?: string;
  focusSlide?: boolean;
  slideFocusColor?: string;
  slideBorderRadius?: string;
}

const Slide: React.FC<SlideProps> = ({
  img,
  spaceBetweenSlides,
  focusSlide,
  slideFocusColor,
  slideBorderRadius,
}) => (
  <Container
    spaceBetweenSlides={spaceBetweenSlides}
    containerBorderRadius={slideBorderRadius}
  >
    <Image
      img={img}
      focusSlide={focusSlide}
      slideFocusColor={slideFocusColor}
      slideBorderRadius={slideBorderRadius}
    />
  </Container>
);

export default memo(Slide);
