import { observer } from "mobx-react";
import { useEffect } from "react";
import { ErrorGetPosts } from "../../components/Errors/ErrorGetPosts";
import { Form } from "../../components/Form/Form";
import { Loader } from "../../components/Loader/Loader";
import { Post } from "../../components/Post/Post";
import "../../index.css";
import PostStore from "../../store/PostStore";
import { Theme, darkTheme, lightTheme } from "../../styles/Theme";
import { BUTTON_TEXT } from "../../utils/constants";
import { SContainer, Feed, PopupBackground } from "./MainPageStyles";

export const MainPage = observer(() => {
  useEffect(() => {
    PostStore.fetchPosts();
  }, []);

  const theme = PostStore.theme === "light" ? darkTheme : lightTheme;

  return (
    <Theme theme={theme}>
      <SContainer>
        <Form
          form={{
            textButton: BUTTON_TEXT.publish,
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
                to={`/posts/${post.id}`}
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
      </SContainer>
      {PostStore.isModalOpen && (
        <PopupBackground>
          <SContainer>
            <Form
              form={{
                textButton: BUTTON_TEXT.save,
                onClick: () => PostStore.handleUpdatePost,
                isModalForm: true,
              }}
            />
          </SContainer>
        </PopupBackground>
      )}
    </Theme>
  );
});
