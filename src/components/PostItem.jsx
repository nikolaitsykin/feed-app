import React from "react";
import "../../src/styles/App.css";
import MyButton from "./UI/Button/Button";

const PostItem = (props) => {
  return (
    <div className="newPost">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <p>{props.post.body}</p>
      </div>
      <div>
        <MyButton onClick={() => props.remove(props.post)}>
          Delete post
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;
