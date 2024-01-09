import styled from "styled-components";
import { observer } from "mobx-react";
import PostStore from "../../store/PostStore";
import { darkTheme, lightTheme } from "../../styles/Theme";

const theme = PostStore.theme === "light" ? darkTheme : lightTheme;

const STitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 25px;
  line-height: 30px;
  font-weight: 700;
  color: ${theme.textColors.heading};
  font-family: "Nunito Sans", sans-serif;
  line-height: 1.5;
  font-weight: 400;
`;

type THeading = {
  text: string;
};

export const Heading = observer(({ text }: THeading) => (
  <STitle>{text}</STitle>
));
