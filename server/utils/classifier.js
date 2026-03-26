// Classifies a prompt and returns the best provider + reason.
// Uses keyword heuristics — upgrade to LLM-based classifier later.

const rules = [
  { pattern: /\b(code|function|debug|bug|script|python|javascript|sql|regex)\b/i,    provider: "openai",  reason: "Code/programming task" },
  { pattern: /\b(analyse|explain|essay|write|summarize|reason|philosophy|ethics)\b/i, provider: "claude",  reason: "Reasoning or writing task" },
  { pattern: /\b(image|photo|describe|caption|visual|multimodal)\b/i,                provider: "gemini",  reason: "Visual or multimodal task" },
  { pattern: /\b(translate|french|spanish|german|arabic|hindi|multilingual)\b/i,     provider: "mistral", reason: "Multilingual task" },
  { pattern: /\b(search|document|retrieve|lookup|rag|embedding)\b/i,                 provider: "cohere",  reason: "Search or retrieval task" },
];

export function classifyPrompt(message) {
  for (const rule of rules) {
    if (rule.pattern.test(message)) {
      return { provider: rule.provider, reason: rule.reason };
    }
  }
  // Default fallback
  return { provider: "openai", reason: "General query (default)" };
}
