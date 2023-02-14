import React, { useState } from "react";
import { auth } from "../firbase";
import "./css/Message.css";

const styles = {
  message: `d-flex position-relative text-center shadow-sm mt-5 py-2 px-3 rounded-pill w-25`,
  send: `text-right bg-warning float-right flex-row-reverse plef`,
  receive: `float-left`,
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${styles.send}`
      : `${styles.receive}`;

  return (
    <div>
      <div className={`${styles.message} ${messageClass}`}>
        <p className="position-absolute mtop-1 name text-secondary">
          {message.name}
        </p>
        <p className="chat">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
