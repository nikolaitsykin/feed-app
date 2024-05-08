import axios from "axios";
import { _POSTS_URL } from "../utils/constants";

export const getPost = async (limit, page) => {
  const url = `${_POSTS_URL}?_limit=${limit}&_page=${page}`;
  const response = await axios.get(url);
  return response;
};

export async function getPostById(id) {
  const url = `${_POSTS_URL}/${id}`;
  const response = await axios.get(url);
  return response;
}

export async function getPostCommentsById(id) {
  const url = `${_POSTS_URL}/${id}/comments`;
  const response = await axios.get(url);
  return response;
}
