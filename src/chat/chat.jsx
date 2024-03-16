import React from "react";
import "./chat.css";
export default function Chat({ name, submitedMsg, sendsubmitedmessage }) {
  const [message, setMessage] = React.useState("");

  return (
    <div className="container">
      <p>name :{name}</p>
      <p> {submitedMsg}</p>
      <div>
        
        <input
          type="text"
          placeholder="message"
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={(e) => sendsubmitedmessage(message)}>send</button>
      </div>
    </div>
  );
}
