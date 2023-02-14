import React from "react";
import "./css/Message.css";

const Message = ({ message }) => {
  return (
    <div>
      <div className="d-flex text-center shadow-sm mt-5 py-2 px-3 rounded-pill">
        <p className=" position-fixed mtop-1 name text-secondary">Subham</p>
        <p className="chat">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
