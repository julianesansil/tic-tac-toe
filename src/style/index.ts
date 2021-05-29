import { createGlobalStyle } from 'styled-components';
import fonts from './fonts.css';
import resetCSS from './reset.css';

const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${resetCSS}

  body, input {
    font-family: ${props => props.theme.fonts};
    font-size: 16px;
  }
`;

export default GlobalStyle;
