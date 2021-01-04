import styled, { css } from 'styled-components';

interface ContainerProps {
  direction: string;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 0;
  ${props =>
    props.direction === 'left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  svg {
    font-size: 40px;
    color: #fff;
    background: none;
    cursor: pointer;
    transition: background ease-in 0.2s, transform ease-in 0.2s;
    border-radius: 50%;
    margin: 0 10px;

    &:hover {
      background: rgba(0, 0, 0, 0.4);
      transform: scale(1.3);
    }
  }
`;
