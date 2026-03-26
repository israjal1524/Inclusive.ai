export function log(provider, message, durationMs) {
  console.log(`[${new Date().toISOString()}] provider=${provider} duration=${durationMs}ms msg="${message.slice(0, 60)}"`);
}
