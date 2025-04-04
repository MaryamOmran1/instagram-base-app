import React, { useState } from "react";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = (event) => {
    event.preventDefault();

    if (input.trim()) {
      // Add the new message to the messages array
      setMessages([...messages, input]);
      setInput(""); // Clear the input field
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Chat</h1>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "400px",
          overflowY: "scroll",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{ padding: "5px", borderBottom: "1px solid #eee" }}
          >
            {msg}
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSendMessage}
        style={{ display: "flex", marginTop: "10px" }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button type="submit" style={{ padding: "10px" }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
