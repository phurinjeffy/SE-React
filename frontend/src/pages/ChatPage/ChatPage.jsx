// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./ChatPage.css";

function ChatPage() {
  // add random cliend id by date time
  const [clientId, setClientId] = useState(
    Math.floor(new Date().getTime() / 1000)
  );

  const [websckt, setWebsckt] = useState();
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const url = "ws://localhost:8000/ws/" + clientId;
    const ws = new WebSocket(url);

    ws.onopen = (event) => {
      ws.send("Connect");
    };

    // recieve message every start page
    ws.onmessage = (e) => {
      const message = JSON.parse(e.data);
      // Use the previous state to ensure that previous messages are not lost
      setMessages((prevMessages) => [...prevMessages, message]);
    };  

    setWebsckt(ws);
    //clean up function when we close page
    return () => ws.close();
  }, []);

  const sendMessage = () => {
    websckt.send(message);
  
    // Note: Don't set onmessage here, as it will be set multiple times
    setMessage("");
  };

  return (
    <div className="chatContainer">
      <h1 className="chatTitle">Open Chat</h1>
      <h2 className="clientID">Client ID: {clientId} </h2>
      <div className="chat-container">
        <div className="chat">
          {messages.map((value, index) => {
            if (value.clientId === clientId) {
              return (
                <div key={index} className="my-message-container">
                <div className="my-message">
                  <p className="client">client id : {value.clientId}</p>
                  <p className="message">{value.message}</p>
                </div>
              </div>
              );
            } else {
              return (
                <div key={index} className="another-message-container">
                  <div className="another-message">
                    <p className="client">client id : {value.clientId}</p>
                    <p className="message">{value.message}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="input-chat-container">
        <input
            className="input-chat"
            type="text"
            placeholder="Chat message ..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></input>
          <button className="submit-chat" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
