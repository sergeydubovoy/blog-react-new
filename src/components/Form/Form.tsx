import { observer } from "mobx-react";
import React from "react";
import PostStore from "../../store/PostStore";
import { AddButton } from "../AddButton/AddButton";
import { InputText } from "../InputText/InputText";
import { InputTitle } from "../InputTitle/InputTitle";
import { SForm } from "./FormStyles";
import { INPUT_NAME, PLACEHOLDERS } from "../../utils/constants";
import { CloseButton } from "../CloseButton/CloseButton";

export type TForm = {
  textButton: string;
  placeholder?: string;
  value?: string;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  handleInputChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  onClick: () => void;
  isModalForm: boolean;
};

export type TFormProps = {
  form: TForm;
};

export const Form: React.FC<TFormProps> = observer(({ form }) => {
  const isModalForm = form.isModalForm;

  let titleCurrentValue: string = "";
  let textCurrentValue: string = "";

  if (isModalForm) {
    titleCurrentValue = PostStore.isModalOpen ? PostStore.formData.title : "";
    textCurrentValue = PostStore.isModalOpen ? PostStore.formData.text : "";
  } else if (!isModalForm) {
    titleCurrentValue = PostStore.isModalOpen ? "" : PostStore.formData.title;
    textCurrentValue = PostStore.isModalOpen ? "" : PostStore.formData.text;
  }

  return (
    <SForm onSubmit={PostStore.handleFormSubmit} isModalForm={form.isModalForm}>
      <InputTitle
        input={{
          placeholder: PLACEHOLDERS.title,
          onInput: PostStore.handleInputChange,
          value: titleCurrentValue,
          name: INPUT_NAME.titleNameForm,
          type: "text",
        }}
      />
      <InputText
        textarea={{
          placeholder: PLACEHOLDERS.text,
          onInput: PostStore.handleInputChange,
          value: textCurrentValue,
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
      {PostStore.isModalOpen && isModalForm && (
        <CloseButton onClick={PostStore.handleCloseButtonClick} />
      )}
    </SForm>
  );
});
