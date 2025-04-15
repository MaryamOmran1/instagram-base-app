import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Composer from "./Composer";
import NewsFeed from "./NewsFeed";
import AuthForm from "./AuthForm";
import AppNavbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [shouldRenderAuthForm, setShouldRenderAuthForm] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedInUser(user);
      if (user) setShouldRenderAuthForm(false);
    });
    return () => unsubscribe();
  }, []);

  const toggleAuthForm = () => setShouldRenderAuthForm(!shouldRenderAuthForm);

  return (
    <div>
      <AppNavbar user={loggedInUser} />
      {shouldRenderAuthForm ? (
        <AuthForm />
      ) : (
        <>
          {loggedInUser ? <Composer user={loggedInUser} /> :
            <button onClick={toggleAuthForm}>Create Account or Sign In</button>
          }
          <NewsFeed currentUser={loggedInUser} />
        </>
      )}
    </div>
  );
}

export default App;