import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatSection from "./components/ChatSection";

const App = () => {
  const [user] = useAuthState(auth);
  // console.log(user);

  return (
    <div>
      <div className="container mx-auto text-center">
        <Navbar />
      </div>
      {user ? (
        <div className="container">
          <ChatSection />
        </div>
      ) : null}
    </div>
  );
};

export default App;
