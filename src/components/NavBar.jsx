import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand } from "reactstrap";
import "./css/NavBar.css";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Signin from "./Signin";
import Logout from "./Logout";

const NavBar = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <Navbar className="my-2 shadow p-3 mb-5  rounded" color="warning" dark>
        <NavbarBrand href="/" className="heading">
          Chatties
        </NavbarBrand>
        {user ? <Logout /> : <Signin />}
      </Navbar>
    </div>
  );
};

export default NavBar;
