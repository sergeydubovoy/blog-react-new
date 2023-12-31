import { ReactNode } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

export type TThemeProps = {
  children: ReactNode;
  theme: {
    textColors: {
      heading: string;
      title: string;
      description: string;
      date: string;
    };
    backgroundColors: {
      post: string;
      popup: string;
      form: string;
      body: string;
    };
  };
};

export const lightTheme = {
  textColors: {
    heading: "#304ffe",
    title: "black",
    description: "black",
    date: "#304ffe",
  },
  backgroundColors: {
    post: "white",
    popup: "rgba(0, 0, 0, 0.5)",
    form: "white",
    body: "#f5f5f5",
    addButton: "#3D5AFE",
    addButtonHover: "#304FFE",
    deleteIcon: "#3D5AFE",
    editIcon: "#3D5AFE",
  },
};

export const darkTheme = {
  textColors: {
    heading: "yellow",
    title: "white",
    description: "white",
    date: "#8497ff",
  },
  backgroundColors: {
    post: "#333333",
    popup: "rgba(0, 0, 0, 0.5)",
    form: "#333333",
    body: "#333333",
    addButton: "#3949AB",
    addButtonHover: "#3f51b5",
    deleteIcon: "white",
    editIcon: "white",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.backgroundColors.body};
    font-family: "Nunito Sans", sans-serif;
    line-height: 1.5;
    font-weight: 400;
  }
`;

export const Theme = ({ children, theme }: TThemeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
