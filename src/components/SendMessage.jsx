import React from "react";
import "./css/SendMessage.css";
import { Button } from "reactstrap";
import { GrSend } from "react-icons/gr";

const SendMessage = () => {
  return (
    <form className="fs-5 width d-flex position-absolute mt-3">
      <input className="w-100 rounded-pill" type="text" placeholder="Message" />
      <div className="ms-3">
        <Button
          color="warning"
          className=" position-relative w-100 rounded-pill button"
        >
          <GrSend />
        </Button>
      </div>
    </form>
  );
};

export default SendMessage;
