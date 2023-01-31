import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
  box-sizing: border-box;
  }
  a {
    color: inherit;
  }
  .slick-slide{
    display: inline-block;
  }
`;

export default GlobalStyle;
