import { NextApiRequest, NextApiResponse } from "next";
import createClient from "@/utils/supabase/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
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

    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    // Fetch the product
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching product:", error);
      return res.status(500).json({ error: "Failed to fetch product" });
    }

    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in get product API:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
