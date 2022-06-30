import { createGlobalStyle } from "styled-components";
import ICustomTheme from "../contracts/ICustomTheme";

const GlobalStyle = createGlobalStyle<{ theme: ICustomTheme }>`
  body {
    position: absolute;
    inset: 0;
  }

  #root {
    height: 100%;
    width: 100%;
  }
  
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
