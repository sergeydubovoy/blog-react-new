import React from "react";
import styled from "styled-components";
import { CloseIcon } from "../Icons/CloseIcon/CloseIcon";
import { observer } from "mobx-react";
import PostStore from "../../store/PostStore";
import { darkTheme, lightTheme } from "../../styles/Theme";

const SCloseButton = styled.button`
  position: absolute;
  padding: 0;
  top: 0px;
  right: -30px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`;

export type TCloseButton = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const CloseButton = observer(({ onClick }: TCloseButton) => {
  const theme = PostStore.theme === "light" ? darkTheme : lightTheme;
  return (
    <SCloseButton onClick={onClick}>
      <CloseIcon stroke={theme.backgroundColors.closeIcon} fill={theme.backgroundColors.closeIconFill} />
    </SCloseButton>
  );
});
