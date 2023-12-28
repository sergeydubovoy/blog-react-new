import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";

const SInput = styled.input`
  padding: 5px 10px;
  width: 100%;
  height: 50px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  line-height: 20px;
  box-sizing: border-box;
  transition: border 0.3s ease;

  &:hover {
    border: 1px solid #304ffe;
  }

  &:focus {
    outline: none;
    border: 1px solid #304ffe;
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
