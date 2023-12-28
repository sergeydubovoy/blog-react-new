import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  padding: 10px;
  width: 100%;
  min-height: 100px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  line-height: 20px;
  outline: #304ffe;
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

export type TTextArea = {
  name?: string;
  placeholder?: string;
  value?: string;
  onInput: (event: React.FormEvent<HTMLTextAreaElement>) => void;
};

export type TTextAreaProps = {
  textarea: TTextArea;
};

export const InputText: React.FC<TTextAreaProps> = observer(({ textarea }) => {
  return (
    <TextArea
      name={textarea.name}
      placeholder={textarea.placeholder}
      onInput={textarea.onInput}
      value={textarea.value}
    />
  );
});
