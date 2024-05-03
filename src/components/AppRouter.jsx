import React from "react";
import { Route, Routes } from "react-router-dom";
import { _ABOUT_PATH, _POSTS_ID_PATH, _ROOT_PATH } from "../utils/constants";
import About from "./pages/About";
import Error from "./pages/Error";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={_ROOT_PATH} exact element={<Posts />} />
      <Route path={_POSTS_ID_PATH} exact element={<Post />} />
      <Route path={_ABOUT_PATH} element={<About />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Posts />} />
    </Routes>
  );
};

export default AppRouter;
