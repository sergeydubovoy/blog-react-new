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
      placeholders: string;
    };
    backgroundColors: {
      post: string;
      popup: string;
      form: string;
      body: string;
      addButton: string;
      deleteIcon: string;
      editIcon: string;
      closeIcon: string;
      backIcon: string;
      inputs: string;
    };
    borderColors: {
      post: string;
      form: string;
      inputs: string;
    };
    hoverColors: {
      inputs: string;
      addButtonHover: string;
    };
    focusColors: {
      inputs: string;
    };
  };
};

export const lightTheme = {
  textColors: {
    heading: "#3375f6",
    title: "black",
    description: "black",
    date: "#517ab5",
    placeholders: "#b1b1b1",
    inputs: "#000000",
  },
  backgroundColors: {
    post: "white",
    popup: "rgba(0, 0, 0, 0.5)",
    form: "#ffffff",
    body: "#edeef0",
    addButton: "#3375f6",
    deleteIcon: "#517ab5",
    editIcon: "#517ab5",
    closeIcon: "#517ab5",
    closeIconFill: "white",
    backIcon: "#517ab5",
    inputs: "white",
  },
  borderColors: {
    post: "#dfe3e6",
    form: "#dfe3e6",
    inputs: "#dfe3e6",
  },
  hoverColors: {
    inputs: "#878787",
    addButtonHover: "#304FFE",
  },
  focusColors: {
    inputs: "#3375f6",
  },
};

export const darkTheme = {
  textColors: {
    heading: "#3375f6",
    title: "white",
    description: "white",
    date: "#7ea8e6",
    placeholders: "#828282",
    inputs: "#e1e3e6",
  },
  backgroundColors: {
    post: "#222222",
    popup: "rgba(0, 0, 0, 0.5)",
    form: "#222222",
    body: "#141414",
    addButton: "#3949AB",
    deleteIcon: "#878787",
    editIcon: "#878787",
    closeIcon: "#878787",
    closeIconFill: "#8787872a",
    backIcon: "#878787",
    inputs: "#222222",
  },
  borderColors: {
    post: "#363738",
    form: "#363738",
    inputs: "#363738",
  },
  hoverColors: {
    inputs: "#878787",
    addButtonHover: "#3f51b5",
  },
  focusColors: {
    inputs: "#3375f6",
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
