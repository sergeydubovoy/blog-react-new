import { observer } from "mobx-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton/BackButton";
import { ErrorGetPosts } from "../../components/Errors/ErrorGetPosts";
import "../../index.css";
import PostStore from "../../store/PostStore";
import { SContainer } from "../MainPage/MainPageStyles";
import { Theme, darkTheme, lightTheme } from "../../styles/Theme";
import {
  SPostDate,
  SPostText,
  SPostTitle,
} from "../../components/Post/PostStyles";
import styled from "styled-components";

const SContainerLarge = styled(SContainer)`
  width: 700px;
`;

const SPostTitleLarge = styled(SPostTitle)`
  font-size: 28px;
  line-height: 42px;
`;

const SPostDateLarge = styled(SPostDate)`
  font-size: 18px;
  line-height: 18px;
`;

const SPostTextLarge = styled(SPostText)`
  margin-top: 20px;
  font-size: 18px;
  line-height: 18px;
`;

export const PostPage = observer(() => {
  const { postId } = useParams();

  useEffect(() => {
    PostStore.fetchPosts();
  }, [postId]);

  const selectedPost = PostStore.posts.find((post) => post.id === postId);
  const theme = PostStore.theme === "light" ? darkTheme : lightTheme;

  return (
    <Theme theme={theme}>
      <Link
        style={{ textDecoration: "none", position: "fixed", display: "flex" }}
        to={"/blog-react-new/"}
      >
        <BackButton />
      </Link>
      <SContainerLarge>
        {selectedPost ? (
          <div id={postId}>
            <SPostTitleLarge>
              {selectedPost.title ? selectedPost.title : "Нет заголовка"}
            </SPostTitleLarge>
            <SPostDateLarge>
              {selectedPost.date ? selectedPost.date : "Нет даты"}
            </SPostDateLarge>
            <SPostTextLarge>
              {selectedPost.text ? selectedPost.text : "Нет текста"}
            </SPostTextLarge>
          </div>
        ) : (
          <ErrorGetPosts />
        )}
      </SContainerLarge>
    </Theme>
  );
});
