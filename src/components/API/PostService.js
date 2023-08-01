import axios from "axios";

export async function PostService() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
}
