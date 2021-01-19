import React, { memo } from 'react';

import { Container, Image } from './styles';

interface SlideProps {
  img: string;
  spaceBetweenSlides?: string;
  focusSlide?: boolean;
  slideFocusColor?: string;
  slideBorderRadius?: string;
  focusSlideThickness?: string;
}

const Slide: React.FC<SlideProps> = ({
  img,
  spaceBetweenSlides,
  focusSlide,
  slideFocusColor,
  slideBorderRadius,
  focusSlideThickness,
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
      focusSlideThickness={focusSlideThickness}
    />
  </Container>
);

export default memo(Slide);
