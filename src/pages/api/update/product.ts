import { NextApiRequest, NextApiResponse } from "next";
import createClient from "@/utils/supabase/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    res.setHeader("Allow", ["PUT"]);
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

    const { id, title, description, price, image, category, out_of_stock } =
      req.body;

    // Validate required fields
    if (!id || !title || !description || !price || !image || !category) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Update the product
    const { data, error } = await supabase
      .from("products")
      .update({
        title,
        description,
        price,
        image,
        category,
        out_of_stock: out_of_stock || false,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating product:", error);
      return res.status(500).json({ error: "Failed to update product" });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in update product API:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
