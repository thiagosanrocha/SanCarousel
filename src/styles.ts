import styled from 'styled-components';

interface ContainerProps {
  width?: string;
  height?: string;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  height: ${props => (props.height ? props.height : '100vh')};
  width: ${props => (props.width ? props.width : '100%')};
  overflow: hidden;
`;
