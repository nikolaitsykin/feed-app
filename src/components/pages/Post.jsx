import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../../hooks/useFetcing";
import { getPostById, getPostCommentsById } from "../API/PostService";
import Loader from "../UI/Loader/Loader";

const Post = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const result = await getPostById(id);
    setPost(result.data);
  });

  const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(
    async (id) => {
      const result = await getPostCommentsById(id);
      setComments(result.data);
    }
  );

  useEffect(() => {
    fetchPostById(params.id);
    fetchCommentsById(params.id);
  }, []);

  return (
    <div>
      <h1>You have operned ID:{params.id} post page</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="post__content">
          {post.id}. {post.title}
        </div>
      )}
      <h1>Comments</h1>
      {isCommentsLoading ? (
        <Loader />
      ) : (
        comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <h5>{comment.email}</h5>
            <div>{comment.body}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default Post;
