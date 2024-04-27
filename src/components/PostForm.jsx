import React, { useState } from "react";
import "../../src/styles/App.css";
import Button from "./UI/Button/Button";
import MyInput from "./UI/Input/Input";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const [errors, setErrors] = useState({});

  const validateValues = (inputValues) => {
    let errors = {};
    if (inputValues.title.length < 1) {
      errors.title = "Add post title";
    }
    if (inputValues.body.length < 1) {
      errors.body = "Add post description";
    }
    return errors;
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateValues(post);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const newPost = { ...post, id: Date.now() };
      create(newPost);
      setPost({ title: "", body: "" });
      setErrors({});
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <MyInput
          value={post.title}
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="Post name"
          style={{ border: errors.title ? "1px solid red" : null }}
        />
        {errors.title ? <p className="error">Add post title</p> : null}
        <MyInput
          value={post.body}
          name="body"
          onChange={handleChange}
          type="text"
          placeholder="Post description"
          style={{ border: errors.body ? "1px solid red" : null }}
        />
        {errors.body ? <p className="error">Add post description</p> : null}

        <Button type="submit">Add new post</Button>
      </form>
    </div>
  );
};

export default PostForm;
