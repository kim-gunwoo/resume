import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing:border-box;
  }
  html,body {
    font-family: Spoqa Han Sans,sans-serif;
    font-size: 10px;
    line-height: 1.9;
    font-weight: 500;
  }
  a {
    color : inherit;
    text-decoration: none; 
    outline: none;
  }
`;

export default GlobalStyles;
