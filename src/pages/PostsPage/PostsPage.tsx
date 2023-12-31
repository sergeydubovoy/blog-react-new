import { observer } from "mobx-react";
import { useEffect } from "react";
import { ErrorGetPosts } from "../../components/Errors/ErrorGetPosts";
import { Form } from "../../components/Form/Form";
import { Heading } from "../../components/Heading/Heading";
import { Loader } from "../../components/Loader/Loader";
import { Post } from "../../components/Post/Post";
import "../../index.css";
import PostStore from "../../store/PostStore";
import { Theme, lightTheme, darkTheme } from "../../styles/Theme";
import { BUTTON_TEXT, HEADING } from "../../utils/constants";
import { Container, Feed, PopupBackground } from "./PostsPageStyles";
import ThemeButton from "../../components/ThemeButton/ThemeButton";

const PostsPage = observer(() => {
  useEffect(() => {
    PostStore.fetchPosts();
  }, []);

  return (
    <Theme theme={PostStore.theme === "light" ? darkTheme : lightTheme}>
      <Container>
        <ThemeButton />
        <Heading text={HEADING} />
        <Form
          form={{
            textButton: BUTTON_TEXT.save,
            onClick: () => PostStore.handleAddButtonClick,
            isModalForm: false,
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
                isModalForm: true,
              }}
            />
          </Container>
        </PopupBackground>
      )}
    </Theme>
  );
});

export default PostsPage;
