import styled, { css } from 'styled-components';

interface ContainerProps {
  spaceBetweenSlides?: string;
  containerBorderRadius?: string;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  min-width: 100%;
  box-sizing: border-box;

  ${({ spaceBetweenSlides }) => spaceBetweenSlides && css`
    padding: 0 ${spaceBetweenSlides};
  `}

  ${({ containerBorderRadius }) => containerBorderRadius && css`
    border-radius: ${containerBorderRadius};
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
  background: url(${({ img }) => img}) no-repeat center;
  background-size: cover;
  box-sizing: border-box;

  ${({ slideBorderRadius }) => slideBorderRadius && css`
    border-radius: ${slideBorderRadius};
  `}

  ${({ focusSlide, slideFocusColor }) => focusSlide && css`
    border: 4px solid transparent;
    transition: border 0.3s;

    &:hover {
      border: 4px solid ${slideFocusColor ? slideFocusColor : '#FFF'};
    }
  `};
`;
