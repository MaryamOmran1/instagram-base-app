import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      isCreatingAccount
        ? await createUserWithEmailAndPassword(auth, email, password)
        : await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">{isCreatingAccount ? "Sign Up" : "Sign In"}</button>
      <p onClick={() => setIsCreatingAccount(!isCreatingAccount)}>
        {isCreatingAccount ? "Already have an account? Sign in" : "New user? Create account"}
      </p>
    </form>
  );
}