// Calls the Express backend /api/chat endpoint
export async function sendMessage(message, history) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, history }),
  });
  if (!res.ok) throw new Error("Request failed: " + res.status);
  return res.json();
  // Returns: { reply, model, provider, reason }
}
