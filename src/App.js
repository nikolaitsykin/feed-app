import React, { useEffect, useState } from "react";
import { PostService } from "./components/API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Button from "./components/UI/Button/Button";
import { Loader } from "./components/UI/Loader/Loader";
import Modal from "./components/UI/Modal/Modal";
import { useFetching } from "./hooks/useFetcing";
import { usePosts } from "./hooks/usePost";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService();
    setPosts(response.data.slice(0, 20));
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <Button className="mt-10" onClick={() => setModal(true)}>
        Create post
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="JS Posts"
          error={postError}
        />
      )}
    </div>
  );
}

export default App;
