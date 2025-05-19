import { NextApiRequest, NextApiResponse } from "next";
import createClient from "@/utils/supabase/api";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb",
    },
  },
};

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

    // Get the file from the request
    const file = req.body.file;
    const fileName = req.body.fileName;

    if (!file || !fileName) {
      return res.status(400).json({ error: "File and fileName are required" });
    }

    // Convert base64 to buffer if needed
    const fileBuffer = Buffer.from(file.split(",")[1], "base64");

    // Upload to Supabase Storage
    const { error } = await supabase.storage
      .from("products")
      .upload(`${user.id}/${fileName}`, fileBuffer, {
        upsert: true,
      });

    if (error) {
      console.error("Error uploading image:", error);
      return res.status(500).json({ error: "Failed to upload image" });
    }

    // Get the public URL
    const {
      data: { publicUrl },
    } = supabase.storage
      .from("products")
      .getPublicUrl(`${user.id}/${fileName}`);

    return res.status(201).json({ url: publicUrl });
  } catch (error) {
    console.error("Error in upload product image API:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
