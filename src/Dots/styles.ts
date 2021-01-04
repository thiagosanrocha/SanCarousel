import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 5%;
  right: 8%;
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
