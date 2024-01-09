import { observer } from "mobx-react";
import styled from "styled-components";
import { BackIcon } from "../Icons/BackIcon/BackIcon";
import { darkTheme, lightTheme } from "../../styles/Theme";
import PostStore from "../../store/PostStore";

const SBackButton = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  align-items: flex-start;
  gap: 10px;
  width: 100px;
  height: 100vh;
  background: rgba(255, 255, 255, 0);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const SBackText = styled.p`
  line-height: 1.5;
  font-weight: 400;
  color: #828282;
`;

export const BackButton = observer(() => {
  const theme = PostStore.theme === "light" ? darkTheme : lightTheme;
  return (
    <SBackButton>
      <BackIcon fill={theme.backgroundColors.backIcon} />
      <SBackText>Назад</SBackText>
    </SBackButton>
  );
});
