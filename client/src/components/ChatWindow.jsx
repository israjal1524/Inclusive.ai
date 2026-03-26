import React from "react";
import { useChat } from "../hooks/useChat.js";
import MessageBubble from "./MessageBubble.jsx";
import InputBar from "./InputBar.jsx";

export default function ChatWindow() {
  const { messages, send, loading } = useChat();

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: "1rem" }}>
        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}
        {loading && <p style={{ opacity: 0.5 }}>Thinking...</p>}
      </div>
      <InputBar onSend={send} disabled={loading} />
    </div>
  );
}
