import styled from 'styled-components';

const Card = styled.div`
  width: ${({ width }) => (width ? width : '130px')};
  height: ${({ height }) => (height ? height : '137px')};
  border: 1px solid ${({ border }) => (border ? border : '#3e3e3e')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '10px')};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'white')};
`;

export default Card;
