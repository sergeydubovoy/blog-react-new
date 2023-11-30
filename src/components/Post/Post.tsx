import React from "react";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { EditButton } from "../EditButton/EditButton";
import { PostDate, PostText, PostTitle, PostWrapper } from "./PostStyles";
import { observer } from "mobx-react";

export type TPost = {
  id: string;
  title: string;
  date: string;
  text: string;
};

export type TPostFunctions = {
  handleDelete: (id: string) => void;
  handleEdit: (id: string, title: string, text: string) => void;
};

export type TPostProps = {
  post: TPost;
  functions: TPostFunctions;
};

export const Post: React.FC<TPostProps> = observer(({ post, functions }) => {
  return (
    <PostWrapper id={post.id}>
      <PostTitle>{post.title ? post.title : "Нет заголовка"}</PostTitle>
      <PostDate>{post.date ? post.date : "Нет даты"}</PostDate>
      <PostText>{post.text ? post.text : "Нет текста"}</PostText>
      <DeleteButton
        deleteButton={{
          onClick: () => functions.handleDelete(post.id),
        }}
      />
      <EditButton
        editButton={{
          onClick: () => functions.handleEdit(post.id, post.title, post.text),
        }}
      />
    </PostWrapper>
  );
});
