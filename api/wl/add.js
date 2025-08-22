import supabase from "../../lib/supabase.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { wallet } = req.body;
  if (!wallet) {
    return res.status(400).json({ error: "Wallet is required" });
  }

  try {
    const { error } = await supabase
      .from("whitelist")
      .insert([{ wallet: wallet.toLowerCase() }]);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ success: true, wallet: wallet.toLowerCase() });
  } catch (err) {
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
}
