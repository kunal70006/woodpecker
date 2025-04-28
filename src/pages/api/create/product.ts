import { NextApiRequest, NextApiResponse } from "next";
import createClient from "@/utils/supabase/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
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

    const { title, description, price, image, category, out_of_stock } =
      req.body;

    // Validate required fields
    if (!title || !description || !price || !image || !category) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Insert the new product
    const { data, error } = await supabase
      .from("products")
      .insert([
        {
          title,
          description,
          price,
          image,
          category,
          out_of_stock: out_of_stock || false,
          updated_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error creating product:", error);
      return res.status(500).json({ error: "Failed to create product" });
    }

    return res.status(201).json(data);
  } catch (error) {
    console.error("Error in create product API:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
