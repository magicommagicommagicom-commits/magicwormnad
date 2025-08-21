export default function handler(req, res) {
  // Redirect root domain ke /api/claim
  res.redirect(307, "/api/claim");
}
