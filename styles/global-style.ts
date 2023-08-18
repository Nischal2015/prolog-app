import { DefaultTheme, createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { color } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  ${normalize}
  
  body {
    font-family: Inter, Sans-Serif;
    color: ${color("gray", 900)};
  }

  a {
    color: ${color("primary", 700)};
  }
`;
