import styled, { css } from 'styled-components';

interface ContainerProps {
  spaceBetweenSlides?: string;
  containerBorderRadius?: string;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  min-width: 100%;
  box-sizing: border-box;

  ${props => props.spaceBetweenSlides && css`
    padding: 0 ${props.spaceBetweenSlides};
  `}

  ${props =>
    props.containerBorderRadius &&
    css`
      border-radius: ${props.containerBorderRadius};
    `}
`;

interface ImageProps {
  img: string;
  focusSlide?: boolean;
  slideFocusColor?: string;
  slideBorderRadius?: string;
}

export const Image = styled.div<ImageProps>`
  height: 100%;
  width: 100%;
  background: url(${props => props.img}) no-repeat center;
  background-size: cover;

  ${props =>
    props.slideBorderRadius &&
    css`
      border-radius: ${props.slideBorderRadius};
    `}

  ${props =>
    props.focusSlide &&
    css`
      border: 4px solid transparent;
      transition: border 0.3s;

      &:hover {
        border: 4px solid
          ${props.slideFocusColor ? props.slideFocusColor : '#FFF'};
      }
    `};
`;
