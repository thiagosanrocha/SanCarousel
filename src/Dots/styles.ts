import styled from 'styled-components';

interface ContainerProps {
  marginRightDots?: string;
  marginBottomDots?: string;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  bottom: ${props => props.marginBottomDots ? props.marginBottomDots : '5%'};
  right: ${props => props.marginRightDots ? props.marginRightDots : '8%'};
  display: flex;
  align-items: center;
`;

interface DotProps {
  active?: boolean;
  dotsDiameter?: number;
}

export const Dot = styled.span<DotProps>`
  display: block;
  width: ${props => (props.dotsDiameter ? props.dotsDiameter : '10')}px;
  height: ${props => (props.dotsDiameter ? props.dotsDiameter : '10')}px;
  border-radius: 50%;
  background: ${props => (props.active ? '#FFF' : 'rgba(255, 255, 255, 0.5)')};
  cursor: pointer;

  & + span {
    margin-left: 10px;
  }
`;
