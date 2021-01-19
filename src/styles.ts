import styled, { css } from 'styled-components';

interface ContainerProps {
  width?: string;
  height?: string;
  borderRadius?: string;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  height: ${({ height }) => (height ? height : '100vh')};
  width: ${({ width }) => (width ? width : '100%')};
  overflow: hidden;

  ${({ borderRadius }) => borderRadius && css`
    border-radius: ${borderRadius};
  `}
`;
