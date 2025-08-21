export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Claim endpoint works!" });
  } else if (req.method === "POST") {
    // Contoh ambil data dari body
    const { wallet } = req.body;
    if (!wallet) {
      return res.status(400).json({ error: "Wallet address required" });
    }
    // Logik claim bisa ditambahkan di sini
    res.status(200).json({ message: `Claim berhasil untuk wallet ${wallet}` });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
