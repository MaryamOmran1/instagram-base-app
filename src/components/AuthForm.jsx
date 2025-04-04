import React from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle authentication logic here

    // On successful authentication, navigate to NewsFeed
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form elements here, e.g., Email and Password inputs */}
      <button type="submit">Login</button>
    </form>
  );
};

export default AuthForm;
