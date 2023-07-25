import React, { useState, useMemo } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css";
import MySelect from "./components/UI/Select/MySelect";
import MyInput from "./components/UI/Input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "qq", body: "ee" },
    { id: 2, title: "aa", body: "rr" },
    { id: 3, title: "zz", body: "gg" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [seachQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        String(a[selectedSort])?.localeCompare(String(b[selectedSort]), "en", {
          numeric: true,
        })
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(seachQuery) 
    );
  }, [seachQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MyInput
          value={seachQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={"Sort"}
          options={[
            { value: "title", name: "by name" },
            { value: "body", name: "by description" },
            { value: "id", name: "by order" },
          ]}
        />
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="JS Posts"
        />
      </div>
    </div>
  );
}

export default App;
