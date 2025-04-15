import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function Composer({ user }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim()) {
      await addDoc(collection(db, "posts"), {
        text,
        author: {
          uid: user.uid,
          email: user.email
        },
        createdAt: serverTimestamp(),
        likes: [],
        comments: []
      });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Post</button>
    </form>
  );
}