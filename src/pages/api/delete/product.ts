import { NextApiRequest, NextApiResponse } from "next";
import createClient from "@/utils/supabase/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") {
    res.setHeader("Allow", ["DELETE"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const supabase = createClient(req, res);

    // Verify user is authenticated
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { id } = req.body;

    // Validate required fields
    if (!id) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    // Delete the product
    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) {
      console.error("Error deleting product:", error);
      return res.status(500).json({ error: "Failed to delete product" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error in delete product API:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
