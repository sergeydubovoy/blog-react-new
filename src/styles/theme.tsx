import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export type TThemeProps = {
  children: ReactNode;
  theme: {
    textColors: {
      textHeading: string;
      textTitle: string;
      textDescription: string;
      textDate: string;
    };
    backgroundColors: {
      postWrapper: string;
      popup: string;
      form: string;
    };
  };
};

export const lightTheme = {
  textColors: {
    textHeading: "#304ffe",
    textTitle: "black",
    textDescription: "black",
    textDate: "#304ffe",
  },
  backgroundColors: {
    postWrapper: "white",
    popup: "rgba(0, 0, 0, 0.5)",
    form: "white",
  },
};

export const darkTheme = {
  textColors: {
    textHeading: "yellow",
    textTitle: "white",
    textDescription: "white",
    textDate: "#8497ff",
  },
  backgroundColors: {
    postWrapper: "#333333",
    popup: "rgba(0, 0, 0, 0.5)",
    form: "#333333",
  },
};

// const GlobalStyle = createGlobalStyle`
//   body: {
//     background: #f5f5f5;
//     }
// `;

export const Theme = ({ children, theme }: TThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
