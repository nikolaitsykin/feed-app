import React, { useState } from "react";
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";
import "../../src/styles/App.css";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    if (post.title === "") {
      console.log("Add post title");
    } else if (post.body === "") {
      console.log("Add post description");
    } else {
      const newPost = { ...post, id: Date.now() };
      create(newPost);
      setPost({ title: "", body: "", error: "" });
    }
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post name"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Post description"
      />
      <MyButton onClick={addNewPost}>Add post</MyButton>
    </form>
  );
};

export default PostForm;
