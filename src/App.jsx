import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import NewsFeed from "./components/NewsFeed";
import PostPage from "./components/PostPage"; // New component for individual post page
import ChatPage from "./components/ChatPage"; // Chat component

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">News Feed</Link>
        <Link to="/authform">Auth Form</Link>
        <Link to="/chat">Chat</Link>
      </nav>
      <Routes>
        <Route path="/" element={<NewsFeed />} />
        <Route path="/authform" element={<AuthForm />} />
        <Route path="/posts/:postId" element={<PostPage />} /> // Dynamic route
        for individual post
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
};

export default App;
