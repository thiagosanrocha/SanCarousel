import styled, { css } from 'styled-components';

interface ContainerProps {
  translateX: number;
  transition: number;
  slideSize?: string;
  customShadowSlides?: string;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  width: ${props => (props.slideSize ? props.slideSize : '100%')};
  display: flex;
  align-items: center;
  margin: 0 auto;

  ${props => css`
    transform: translateX(-${props.translateX}%);
    transition: transform ${props.transition}s;
  `}
`;
