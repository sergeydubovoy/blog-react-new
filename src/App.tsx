import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { PostPage } from "./pages/PostPage/PostPage";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/blog-react-new/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="posts/:postId" element={<PostPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
