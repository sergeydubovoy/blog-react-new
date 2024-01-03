import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";

const SInput = styled.input`
  padding: 5px 10px;
  width: 100%;
  height: 50px;
  border: 1px solid ${(props) => props.theme.borderColors.inputs};
  border-radius: 8px;
  font-size: 16px;
  line-height: 20px;
  box-sizing: border-box;
  transition: border 0.3s ease;
  color: ${(props) => props.theme.textColors.inputs};
  background: ${(props) => props.theme.backgroundColors.inputs};

  &:hover {
    border: 1px solid ${(props) => props.theme.hoverColors.inputs};
  }

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.focusColors.inputs};
  }

  &::placeholder {
    color: ${(props) => props.theme.textColors.placeholders};
  }
`;

export type TInput = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onInput: (event: React.FormEvent<HTMLInputElement>) => void;
};

export type TInputProps = {
  input: TInput;
};

export const InputTitle = observer(({ input }: TInputProps) => {
  return (
    <SInput
      type={input.type}
      name={input.name}
      placeholder={input.placeholder}
      value={input.value}
      onInput={input.onInput}
    />
  );
});
