// Optional: add API key auth here if you expose this publicly
export function auth(req, res, next) {
  // TODO: implement token/key check if needed
  next();
}
