import { useState } from "react";

export default function InputBar({ onSend, disabled }) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim()) return;
    onSend(value.trim());
    setValue("");
  };

  return (
    <div style={{ display: "flex", padding: "1rem", gap: "0.5rem", borderTop: "1px solid #eee" }}>
      <input
        style={{ flex: 1, padding: "0.6rem 1rem", borderRadius: "8px", border: "1px solid #ccc", fontSize: "15px" }}
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => e.key === "Enter" && !e.shiftKey && handleSend()}
        placeholder="Ask anything..."
        disabled={disabled}
      />
      <button
        onClick={handleSend}
        disabled={disabled || !value.trim()}
        style={{ padding: "0.6rem 1.2rem", borderRadius: "8px", background: "#7F77DD", color: "#fff", border: "none", cursor: "pointer" }}
      >
        Send
      </button>
    </div>
  );
}
