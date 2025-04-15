import { useEffect, useState } from "react";
import { collection, onSnapshot, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";

export default function NewsFeed({ currentUser }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    return onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const handleLike = async (postId) => {
    if (!currentUser) return;
    const postRef = doc(db, "posts", postId);
    const post = posts.find(p => p.id === postId);
    if (!post.likes.some(like => like.uid === currentUser.uid)) {
      await updateDoc(postRef, {
        likes: arrayUnion({ uid: currentUser.uid, email: currentUser.email })
      });
    }
  };

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <p><strong>{post.author?.email}</strong>: {post.text}</p>
          <button onClick={() => handleLike(post.id)}>Like</button>
          <p>Likes: {post.likes.length}</p>
          <ul>
            {post.comments.map((c, i) => (
              <li key={i}><strong>{c.author.email}</strong>: {c.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}