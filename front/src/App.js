import "./App.css";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import { nanoid } from "nanoid";

import SigninChatForm from "./components/SigninChatForm/SigninChatForm";
import ChatForm from "./components/ChatForm/ChatForm";
import Chat from "./components/Chat/Chat";

const socket = io("http://localhost:5000");

function App() {
  const [name, setName] = useState();
  const [messages, setMessages] = useState([]);

  const addName = ({ name }) => setName(name);
  const addMessage = ({ message: msg }) => {
    setMessages((prevMessages) => {
      const newMessage = {
        type: "your",
        message: msg,
        id: nanoid(),
      };
      return [...prevMessages, newMessage];
    });
    socket.emit("Chat message", msg);
  };

  useEffect(() => {
    socket.on("Chat message", (msg) => {
      setMessages((prevMessages) => {
        const newMessage = {
          type: "user",
          message: msg,
          id: nanoid(),
        };
        return [...prevMessages, newMessage];
      });
    });
  }, []);

  return (
    <div className="App">
      {!name && <SigninChatForm onSubmit={addName} />}
      {name && <ChatForm onSubmit={addMessage} />}
      {name && <Chat items={messages} />}
    </div>
  );
}

export default App;
