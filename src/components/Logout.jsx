import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "../firbase";
import { Button } from "reactstrap";

const Logout = () => {
  const signOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <Button
        color="light"
        className="rounded-pill"
        onClick={() => auth.signOut()}
      >
        Logout
      </Button>
    </div>
  );
};

export default Logout;
