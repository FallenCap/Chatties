import React, { useState } from "react";
import { auth, db } from "../firbase";
import "./css/SendMessage.css";
import { Button } from "reactstrap";
import { GrSend } from "react-icons/gr";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = () => {
  const [input, setInput] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (input === "") {
      alert("Please enter message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <form
      onSubmit={sendMessage}
      className="fs-5 width d-flex position-absolute mt-3"
    >
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        className="w-100 rounded-pill"
        type="text"
        placeholder="Message"
      />
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
