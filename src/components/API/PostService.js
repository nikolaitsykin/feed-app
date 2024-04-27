import axios from "axios";

export async function PostService() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response;
}
