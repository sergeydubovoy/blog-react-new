import React from "react";
import styled from "styled-components";
import { DeleteIcon } from "../Icons/DeleteIcon/DeleteIcon";
import { observer } from "mobx-react";
import PostStore from "../../store/PostStore";
import { darkTheme, lightTheme } from "../../styles/Theme";

const SDeleteButton = styled.button`
  position: absolute;
  padding: 0;
  top: 10px;
  right: 5px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`;

export type TDeleteButton = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  stroke: string;
};

export type TDeleteButtonProps = {
  deleteButton: TDeleteButton;
};

export const DeleteButton = observer(({ deleteButton }: TDeleteButtonProps) => {
  const theme = PostStore.theme === "light" ? darkTheme : lightTheme;
  return (
    <SDeleteButton onClick={deleteButton.onClick}>
      <DeleteIcon stroke={theme.backgroundColors.deleteIcon} />
    </SDeleteButton>
  );
});
