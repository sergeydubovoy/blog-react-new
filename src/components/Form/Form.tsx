import { observer } from "mobx-react";
import React from "react";
import PostStore from "../../store/PostStore";
import { AddButton } from "../AddButton/AddButton";
import { InputText } from "../InputText/InputText";
import { InputTitle } from "../InputTitle/InputTitle";
import { SForm } from "./FormStyles";
import { INPUT_NAME, PLACEHOLDERS } from "../../utils/constants";

export type TForm = {
  textButton: string;
  placeholder?: string;
  value?: string;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  handleInputChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  onClick: () => void;
};

export type TFormProps = {
  form: TForm;
};

export const Form: React.FC<TFormProps> = observer(({ form }) => {
  return (
    <SForm onSubmit={PostStore.handleFormSubmit}>
      <InputTitle
        input={{
          placeholder: PLACEHOLDERS.title,
          onInput: PostStore.handleInputChange,
          value: PostStore.formData.title,
          name: INPUT_NAME.titleNameForm,
          type: "text",
        }}
      />
      <InputText
        textarea={{
          placeholder: PLACEHOLDERS.text,
          onInput: PostStore.handleInputChange,
          value: PostStore.formData.text,
          name: INPUT_NAME.textNameForm,
        }}
      />
      <AddButton
        button={{
          textButton: form.textButton,
          onClick: () =>
            PostStore.isModalOpen
              ? PostStore.handleUpdatePost(PostStore.selectedPost)
              : PostStore.handleAddButtonClick(),
          disabled: PostStore.isInvalidTextLength(),
        }}
      />
    </SForm>
  );
});
