import React from "react";
import styled from "styled-components";

const SDeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  color: #304ffe;
  cursor: pointer;
`;

export type TDeleteButton = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type TDeleteButtonProps = {
  deleteButton: TDeleteButton;
};

export const DeleteButton = ({ deleteButton }: TDeleteButtonProps) => {
  return <SDeleteButton onClick={deleteButton.onClick}>✕</SDeleteButton>;
};