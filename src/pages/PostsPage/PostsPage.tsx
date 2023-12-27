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
import { HEADING, BUTTON_TEXT } from "../../utils/constants";
import { Theme, lightTheme } from "../../styles/theme";

const PostsPage = observer(() => {
  useEffect(() => {
    PostStore.fetchPosts();
  }, []);

  return (
    <Theme theme={lightTheme}>
      <Container>
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
