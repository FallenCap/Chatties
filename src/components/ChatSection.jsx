import React, { useState, useEffect, useRef } from "react";
import "./css/ChatSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Message from "./Message";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firbase";
import SendMessage from "./SendMessage";

const ChatSection = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);
  console.log(messages);

  return (
    <div>
      <main className="d-flex flex-column  position-relative mx-auto chat-container shadow rounded">
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      <SendMessage />
      <span ref={scroll}></span>
    </div>
  );
};

export default ChatSection;
