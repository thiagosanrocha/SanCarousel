import styled from 'styled-components';

interface ContainerProps {
  marginRightDots?: string;
  marginBottomDots?: string;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;

  bottom: ${({ marginBottomDots }) => 
    marginBottomDots ? marginBottomDots : '5%'};

  right: ${({ marginRightDots }) => marginRightDots ? marginRightDots : '8%'};

  display: flex;
  align-items: center;
`;

interface DotProps {
  active?: boolean;
  dotsDiameter?: number;
}

export const Dot = styled.span<DotProps>`
  display: block;
  width: ${({ dotsDiameter }) => (dotsDiameter ? dotsDiameter : '10')}px;
  height: ${({ dotsDiameter }) => (dotsDiameter ? dotsDiameter : '10')}px;
  border-radius: 50%;
  background: ${({ active }) => (active ? '#FFF' : 'rgba(255, 255, 255, 0.5)')};
  cursor: pointer;

  & + span {
    margin-left: 10px;
  }
`;
