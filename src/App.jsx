import React, { useEffect, useState } from 'react';
import { ref, push, onChildAdded } from 'firebase/database';
import { database } from './firebase';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const messagesRef = ref(database, 'messages');
    onChildAdded(messagesRef, (data) => {
      setMessages((prevMessages) => [...prevMessages, data.val()]);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      text: input,
      timestamp: new Date().toISOString(),
    };

    const messagesRef = ref(database, 'messages');
    push(messagesRef, newMessage);

    setInput('');
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // You can customize formatting here
  };

  return (
    <div className="container">
      <h1>Tamkeengram Chat</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>

      <ul>
        {messages.map((msg, index) => (
          <li key={index} className="message">
            <div>{msg.text}</div>
            <div className="timestamp">{formatDate(msg.timestamp)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;