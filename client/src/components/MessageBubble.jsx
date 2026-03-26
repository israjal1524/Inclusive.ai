import React from "react";
import ModelBadge from "./ModelBadge.jsx";

// message shape: { role: "user"|"assistant", content, provider?, model?, reason? }
export default function MessageBubble({ message }) {
  const isUser = message.role === "user";
  return (
    <div style={{ textAlign: isUser ? "right" : "left", margin: "0.5rem 0" }}>
      <div style={{
        display: "inline-block", maxWidth: "70%", padding: "0.6rem 1rem",
        borderRadius: "12px",
        background: isUser ? "#7F77DD" : "#f0f0f0",
        color: isUser ? "#fff" : "#000",
      }}>
        {message.content}
      </div>
      {!isUser && message.provider && (
        <ModelBadge provider={message.provider} model={message.model} reason={message.reason} />
      )}
    </div>
  );
}
