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

    const { category } = req.body;

    if (!category) {
      return res.status(400).json({ error: "Category name is required" });
    }

    // Insert the new category
    const { data, error } = await supabase
      .from("categories")
      .insert([
        {
          name: category,
          created_by: user.id,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error creating category:", error);
      return res.status(500).json({ error: "Failed to create category" });
    }

    return res.status(201).json(data);
  } catch (error) {
    console.error("Error in create category API:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
