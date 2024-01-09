import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import { EditIcon } from "../Icons/EditIcon/EditIcon";
import PostStore from "../../store/PostStore";
import { darkTheme, lightTheme } from "../../styles/Theme";

const SEditButton = styled.button`
  position: absolute;
  padding: 0;
  top: 30px;
  right: 5px;
  width: 20px;
  height: 20px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  color: #304ffe;
  cursor: pointer;
`;

export type TEditButton = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type TEditButtonProps = {
  editButton: TEditButton;
};

export const EditButton = observer(({ editButton }: TEditButtonProps) => {
  const theme = PostStore.theme === "light" ? darkTheme : lightTheme;
  return (
    <SEditButton onClick={editButton.onClick}>
      <EditIcon stroke={theme.backgroundColors.editIcon} />
    </SEditButton>
  );
});
