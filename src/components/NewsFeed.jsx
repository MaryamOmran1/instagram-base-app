import React from "react";
import { Link } from "react-router-dom";

const NewsFeed = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <Link to={`/posts/${post.id}`}>View Post</Link>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
