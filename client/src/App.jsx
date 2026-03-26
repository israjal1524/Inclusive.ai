import React from "react";
import ChatWindow from "./components/ChatWindow.jsx";

export default function App() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <ChatWindow />
    </div>
  );
}
