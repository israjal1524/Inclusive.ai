// Shows which AI provider answered, with a color-coded pill

const COLORS = {
  openai:  { bg: "#10a37f22", text: "#10a37f" },
  claude:  { bg: "#cc785122", text: "#cc7851" },
  gemini:  { bg: "#4285f422", text: "#4285f4" },
  mistral: { bg: "#ff7f0022", text: "#ff7f00" },
  cohere:  { bg: "#39594922", text: "#395949" },
};

export default function ModelBadge({ provider, model, reason }) {
  const c = COLORS[provider] || { bg: "#eee", text: "#333" };
  return (
    <div style={{ marginTop: "4px", display: "flex", gap: "6px", alignItems: "center" }}>
      <span style={{
        fontSize: "11px", padding: "2px 8px", borderRadius: "999px",
        background: c.bg, color: c.text, fontWeight: 500,
      }}>
        {model || provider}
      </span>
      {reason && <span style={{ fontSize: "11px", opacity: 0.5 }}>{reason}</span>}
    </div>
  );
}
