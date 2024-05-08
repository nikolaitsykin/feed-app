import About from "../pages/About";
import Login from "../pages/Login";
import Post from "../pages/Post";
import Posts from "../pages/Posts";
import {
  _ABOUT_PATH,
  _LOGIN_PATH,
  _POST_ID_PATH,
  _POSTS_PATH,
} from "../utils/constants";

export const privateRoutes = [
  {
    path: _POSTS_PATH,
    exaxt: true,
    element: Posts,
  },
  {
    path: _POST_ID_PATH,
    exaxt: true,
    element: Post,
  },
  {
    path: _ABOUT_PATH,
    exaxt: true,
    element: About,
  },

];

export const publicRoutes = [
  {
    path: _LOGIN_PATH,
    exaxt: true,
    element: Login,
  },
];
