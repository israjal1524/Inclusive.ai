import { useState } from "react";
import { sendMessage } from "../api/chat.js";

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function send(text) {
    const userMsg = { role: "user", content: text };
    const history = [...messages, userMsg];
    setMessages(history);
    setLoading(true);

    try {
      const data = await sendMessage(text, messages);
      setMessages([...history, {
        role: "assistant",
        content: data.reply,
        provider: data.provider,
        model: data.model,
        reason: data.reason,
      }]);
    } catch (err) {
      setMessages([...history, { role: "assistant", content: "Error: " + err.message }]);
    } finally {
      setLoading(false);
    }
  }

  return { messages, send, loading };
}
