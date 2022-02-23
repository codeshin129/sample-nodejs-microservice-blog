import React from "react";
import PostsCreate from "./PostsCreate";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="container">
      <h1>Creat Post</h1>
      <PostsCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};
export default App;
