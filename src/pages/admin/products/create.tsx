import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/Button";
import { Input, TextArea, Select } from "@/components/ui/Input";
import toast from "react-hot-toast";
import { createClient } from "@/utils/supabase/server-props";
import { GetServerSidePropsContext } from "next";

export default function CreateProduct() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    category: "",
    outOfStock: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/create-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      toast.success("Product created successfully!");
      router.push("/admin/products");
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Failed to create product");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const categoryOptions = [
    { value: "Coffee", label: "Coffee" },
    { value: "Pastry", label: "Pastry" },
    { value: "Food", label: "Food" },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Title"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
          />

          <TextArea
            label="Description"
            id="description"
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            rows={3}
          />

          <Input
            label="Price"
            id="price"
            name="price"
            type="number"
            required
            min="0"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
          />

          <Input
            label="Image URL"
            id="image"
            name="image"
            type="url"
            required
            value={formData.image}
            onChange={handleChange}
          />

          <Select
            label="Category"
            id="category"
            name="category"
            required
            value={formData.category}
            onChange={handleChange}
            options={categoryOptions}
          />

          <div className="flex items-center">
            <input
              type="checkbox"
              id="outOfStock"
              name="outOfStock"
              checked={formData.outOfStock}
              onChange={handleChange}
              className="h-4 w-4 p-2 rounded border-gray-300 text-[var(--color-dark-brown)] focus:ring-[var(--color-dark-brown)]"
            />
            <label
              htmlFor="outOfStock"
              className="ml-2 block text-sm text-gray-700"
            >
              Out of Stock
            </label>
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="secondary"
              onClick={() => router.push("/admin/products")}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Product"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const supabase = createClient(context);

  const { data, error } = await supabase.auth.getUser();

  if (error || !data) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: data.user,
    },
  };
}
