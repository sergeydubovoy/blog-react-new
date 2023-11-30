import { observer } from "mobx-react";
import styled from "styled-components";

export const SAddButton = styled.button`
  height: 60px;
  width: 100%;
  border: none;
  border-radius: 20px;
  background-color: #304ffe;
  color: white;
  font-size: 16px;
  line-height: 20px;
  font-weight: 800;
  text-transform: uppercase;
  transition: all 0.2s linear;
  box-shadow: 1.4px 1.4px 2.2px rgba(0, 0, 0, 0.02),
    3.4px 3.4px 5.3px rgba(0, 0, 0, 0.028),
    6.4px 6.4px 10px rgba(0, 0, 0, 0.035),
    11.4px 11.4px 17.9px rgba(0, 0, 0, 0.042),
    21.3px 21.3px 33.4px rgba(0, 0, 0, 0.05), 40px 40px 80px rgba(0, 0, 0, 0.07);
  cursor: pointer;

  &:hover {
    background-color: #3d5afe;
  }

  &:disabled {
    background-color: gray;
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
