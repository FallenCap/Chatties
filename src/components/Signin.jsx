import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleButton from "react-google-button";
import "./css/Signin.css";

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const Signin = () => {
  return (
    <div>
      <GoogleButton className="rounded-pill" onClick={googleSignIn} />
    </div>
  );
};

export default Signin;
