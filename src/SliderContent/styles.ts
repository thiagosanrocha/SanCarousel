import styled, { css } from 'styled-components';

interface ContainerProps {
  translateX: number;
  transition: number;
  slideSize?: string;
  customShadowSlides?: string;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  width: ${({ slideSize }) => (slideSize ? slideSize : '100%')};
  display: flex;
  align-items: center;
  margin: 0 auto;

  ${({ translateX, transition }) => css`
    transform: translateX(-${translateX}%);
    transition: transform ${transition}s;
  `}
`;
