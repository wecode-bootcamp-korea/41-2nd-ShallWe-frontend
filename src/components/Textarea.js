import styled from 'styled-components';

const Textarea = styled.textarea`
  display: inline-block;

  width: ${({ width }) => (width ? width : '335px')};
  height: ${({ height }) => (height ? height : '50px')};
  margin: ${({ margin }) => (margin ? margin : '8px')};
  border-radius: ${({ round }) => (round ? `9999px` : `8px`)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '13px')};
  padding: ${({ padding }) => (padding ? padding : '14px')};
  color: ${({ color }) => (color ? color : '#fffff')};
  border: 1px solid #e0e0e0;

  line-height: 22px;

  &:active,
  &:hover {
    border: 1px solid #ff4772;
  }
`;

export default Textarea;
