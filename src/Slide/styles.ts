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
  focusSlideThickness?: string;
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

  ${({ focusSlide, slideFocusColor, focusSlideThickness }) => focusSlide && css`
    transition: box-shadow 300ms;

    &:hover {
      box-shadow: inset 0 0 0 
        ${focusSlideThickness ? focusSlideThickness : '4px'} 
        ${slideFocusColor ? slideFocusColor : '#FFF'};
    }
  `}
`;
