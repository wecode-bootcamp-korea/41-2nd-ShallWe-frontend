import styled from 'styled-components';

export const Button = styled.button`
  /* display: flex;
  justify-content: center;
  align-items: center; */

  width: ${({ width }) => (width ? width : '335px')};
  height: ${({ height }) => (height ? height : '50px')};
  margin: ${({ margin }) => (margin ? margin : '0 0 16px 0')};
  color: ${({ color }) => (color ? color : '#fffff')};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};
  border-radius: ${({ round }) => (round ? `9999px` : `8px`)};
  border: 1px solid ${({ border }) => (border ? border : 'none')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '13px')};
  padding: ${({ padding }) => (padding ? padding : '16px')};

  cursor: pointer;
  font-weight: 700;
  line-height: 20.4295px;
  transition: all 0.4s;

  &:hover,
  &:active {
    color: white;
    background-color: #ff7d3a;
  }
`;

export default Button;
