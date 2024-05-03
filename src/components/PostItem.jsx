import React from "react";
import "../../src/styles/App.css";
import MyButton from "./UI/Button/Button";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const router = useNavigate();

  return (
    <div className="newPost">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <p>{props.post.body}</p>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Open</MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
