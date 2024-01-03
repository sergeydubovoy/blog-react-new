import { observer } from "mobx-react";
import styled from "styled-components";

export const SAddButton = styled.button`
  height: 60px;
  width: 100%;
  border: none;
  border-radius: 9px;
  background-color: ${(props) => props.theme.backgroundColors.addButton};
  color: white;
  font-size: 16px;
  line-height: 20px;
  font-weight: 800;
  text-transform: uppercase;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColors.addButtonHover};
  }

  &:disabled {
    background-color: #616161;
    cursor: not-allowed;
  }
`;

export type TAddButton = {
  disabled: boolean;
  textButton: string;
  onClick: () => void;
};

export type TAddButtonProps = {
  button: TAddButton;
};

export const AddButton = observer(({ button }: TAddButtonProps) => {
  return (
    <SAddButton onClick={button.onClick} disabled={button.disabled}>
      {button.textButton}
    </SAddButton>
  );
});
