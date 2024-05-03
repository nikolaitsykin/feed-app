import React, { useEffect, useState } from "react";
import { getPost } from "../../components/API/PostService";
import PostFilter from "../../components/PostFilter";
import PostForm from "../../components/PostForm";
import PostList from "../../components/PostList";
import Button from "../../components/UI/Button/Button";
import Loader from "../../components/UI/Loader/Loader";
import Modal from "../../components/UI/Modal/Modal";
import { useFetching } from "../../hooks/useFetcing";
import { usePagination } from "../../hooks/usePagination";
import { usePosts } from "../../hooks/usePost";
import "../../styles/App.css";
import Pagination from "../UI/Pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [
    totalPages,
    limit,
    page,
    pagesArray,
    getPageCount,
    getPagesArray,
    setTotalPages,
    setPage,
    setPagesArray,
  ] = usePagination();

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await getPost(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
      setPagesArray(getPagesArray(totalPages));
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, [totalPages]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
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
      <Pagination page={page} changePage={changePage} pages={pagesArray} />
    </div>
  );
}

export default Posts;
