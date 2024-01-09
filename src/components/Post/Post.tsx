import React from "react";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { EditButton } from "../EditButton/EditButton";
import { SPostDate, SPostText, SPostTitle, SPostWrapper } from "./PostStyles";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

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
  to: string;
};

export const Post: React.FC<TPostProps> = observer(
  ({ post, functions, to }) => {
    return (
      <SPostWrapper id={post.id}>
        <Link style={{ textDecoration: "none" }} to={to}>
          <SPostTitle>{post.title ? post.title : "Нет заголовка"}</SPostTitle>
        </Link>
        <SPostDate>{post.date ? post.date : "Нет даты"}</SPostDate>
        <SPostText>{post.text ? post.text : "Нет текста"}</SPostText>
        <DeleteButton
          deleteButton={{
            stroke: "#304ffe",
            onClick: () => functions.handleDelete(post.id),
          }}
        />
        <EditButton
          editButton={{
            onClick: () => functions.handleEdit(post.id, post.title, post.text),
          }}
        />
      </SPostWrapper>
    );
  }
);
