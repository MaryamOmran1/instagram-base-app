import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  // Here you would typically fetch the post details using postId

  return (
    <div>
      <h1>Post {postId}</h1>
      <button onClick={() => navigate("/")}>Go Back</button>
      {/* Render post details here */}
    </div>
  );
};

export default PostPage;
