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
  width: 130px;
  height: 100vh;
  background: ${(props) => props.theme.backgroundColors.backButton};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.hoverColors.backButton};
  }
`;

const SBackButtonInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const SBackText = styled.p`
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  color: #828282;
`;

export const BackButton = observer(() => {
  const theme = PostStore.theme === "light" ? darkTheme : lightTheme;
  return (
    <SBackButton>
      <SBackButtonInner>
        <BackIcon fill={theme.backgroundColors.backIcon} />
        <SBackText>Назад</SBackText>
      </SBackButtonInner>
    </SBackButton>
  );
});
