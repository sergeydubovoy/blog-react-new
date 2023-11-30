import { observer } from "mobx-react";
import { useEffect } from "react";
import { ErrorGetPosts } from "../../components/Errors/ErrorGetPosts";
import { Heading } from "../../components/Heading/Heading";
import { Loader } from "../../components/Loader/Loader";
import { Form } from "../../components/Form/Form";
import { Post } from "../../components/Post/Post";
import "../../index.css";
import PostStore from "../../store/PostStore";
import { Container, Feed, PopupBackground } from "./PostsPageStyles";

const HEADING = "МОЙ БЛОГ";
export const TEXT_LENGTH = { titleMax: 100, textMax: 200, textZero: 0 };
export const INPUT_NAME = {
  titleNameForm: "title",
  textNameForm: "text",
  titleNamePopup: "title",
  textNamePopup: "text",
};
export const BUTTON_TEXT = { publish: "ОПУБЛИКОВАТЬ", save: "СОХРАНИТЬ" };
export const PLACEHOLDERS = {
  title: "Напишите заголовок поста",
  text: "Напишите текст поста",
};

const PostsPage = observer(() => {
  useEffect(() => {
    PostStore.fetchPosts();
  }, []);

  return (
    <>
      <Container>
        <Heading text={HEADING} />
        <Form
          form={{
            textButton: BUTTON_TEXT.save,
            onClick: () => PostStore.handleAddButtonClick,
          }}
        />
        <Feed>
          {PostStore.isLoading && <Loader />}
          {PostStore.isErrorGetPosts ? (
            <ErrorGetPosts />
          ) : (
            PostStore.posts.map((post) => (
              <Post
                key={post.id}
                post={{
                  id: post.id,
                  title: post.title,
                  date: post.date,
                  text: post.text,
                }}
                functions={{
                  handleDelete: () => PostStore.handleDeleteButtonClick(post),
                  handleEdit: () => PostStore.handleEditButtonClick(post),
                }}
              />
            ))
          )}
        </Feed>
      </Container>
      {PostStore.selectedPost.id && (
        <PopupBackground>
          <Container>
            <Form
              form={{
                textButton: BUTTON_TEXT.save,
                onClick: () => PostStore.handleUpdatePost,
              }}
            />
          </Container>
        </PopupBackground>
      )}
    </>
  );
});

export default PostsPage;
