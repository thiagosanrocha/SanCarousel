import React from 'react';

import { Container } from './styles';

interface SliderContentProps {
  translate: number;
  transition: number;
  slideSize?: string;
}

const SliderContent: React.FC<SliderContentProps> = ({
  translate,
  transition,
  slideSize,
  children,
}) => (
  <Container
    translateX={translate}
    transition={transition}
    slideSize={slideSize}
  >
    {children}
  </Container>
);

export default SliderContent;
