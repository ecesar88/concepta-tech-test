import { DefaultTheme } from "styled-components";

interface ICustomTheme extends DefaultTheme {
  colors: {
    black100: string;
    black200: string;
    black300: string;
    black400: string;
    black500: string;
    black600: string;
    black700: string;
    black800: string;
    black900: string;
    white100: string;
    white200: string;
    blue100: string;
    blue200: string;
    blue300: string;
    blue400: string;
  };
}

export default ICustomTheme;
