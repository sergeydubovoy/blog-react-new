import React from "react";
import styled from "styled-components";
import { DeleteIcon } from "../Icons/DeleteIcon/DeleteIcon";

const SDeleteButton = styled.button`
  position: absolute;
  padding: 0;
  top: 10px;
  right: 10px;
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

export const DeleteButton = ({ deleteButton }: TDeleteButtonProps) => {
  return (
    <SDeleteButton onClick={deleteButton.onClick}>
      <DeleteIcon stroke={"#304ffe"} />
    </SDeleteButton>
  );
};
