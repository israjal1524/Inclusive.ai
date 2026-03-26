import { classifyPrompt } from "../utils/classifier.js";
import { callOpenAI } from "./openai.js";
import { callClaude } from "./claude.js";
import { callGemini } from "./gemini.js";
import { callMistral } from "./mistral.js";
import { callCohere } from "./cohere.js";

const PROVIDER_MAP = {
  openai:  callOpenAI,
  claude:  callClaude,
  gemini:  callGemini,
  mistral: callMistral,
  cohere:  callCohere,
};

export async function routePrompt(message, history) {
  const { provider, reason } = classifyPrompt(message);
  const callFn = PROVIDER_MAP[provider];
  if (!callFn) throw new Error(`Unknown provider: ${provider}`);
  const { reply, model } = await callFn(message, history);
  return { reply, model, provider, reason };
}
