import { ThemeProvider, createGlobalStyle } from "styled-components";

const lightTheme = {
  title: "#304ffe",
  date: "#304ffe",
  postTitle: "black",
};

const darkTheme = {
  colors: {
    title: "white",
    date: "90CAF9",
    postTitle: "white",
  },
};

const GlobalStyle = createGlobalStyle`
  body: {
    background: #f5f5f5;
    }
`;

export const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
