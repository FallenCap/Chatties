import React, { useState } from "react";
import { auth } from "../firbase";
import "./css/Message.css";

const styles = {
  // message: `d-flex position-relative text-center shadow-sm mt-5 py-2 px-3 rounded-pill w-25`,
  sendText: `send-msg text-end shadow-sm`,
  receiveText: `receive-msg text-start ms-3`,
  sendName: `fs-7 send-name`,
  receiveName: `fs-7 receive-name ms-3`,
};

const Message = ({ message }) => {
  const messageText =
    message.uid === auth.currentUser.uid
      ? `${styles.sendText}`
      : `${styles.receiveText}`;

  const messageName =
    message.uid === auth.currentUser.uid
      ? `${styles.sendName}`
      : `${styles.receiveName}`;

  return (
    <div className="flex-column mt-4 mb-4">
      <div>
        <div>
          <label className={messageName}>{message.name}</label>
        </div>
        <div>
          <p className={messageText}>{message.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
