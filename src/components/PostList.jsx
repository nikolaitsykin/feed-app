import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove, error }) => {
  if (error) {
    return <h1>There is an error occured: "{error}."</h1>;
  }
  if (!posts.length) {
    return <h1 className="post__list__header">No posts found</h1>;
  }
  return (
    <div>
      <h1 className="post__list__header">{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
