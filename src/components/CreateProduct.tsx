import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/Button";
import { Input, TextArea, Select } from "@/components/ui/Input";
import toast from "react-hot-toast";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { Category } from "@/utils/types";
import { Layout } from "./Layout";

type ProductFormData = {
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  out_of_stock: boolean;
};

async function createProduct(url: string, { arg }: { arg: ProductFormData }) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...arg,
      price: parseFloat(arg.price),
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create product");
  }

  return response.json();
}

export const CreateProduct = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<ProductFormData>({
    title: "",
    description: "",
    price: "",
    image: "",
    category: "",
    out_of_stock: false,
  });

  const { data: categories, error: categoriesError } = useSWR(
    "/api/get/categories",
    async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      return response.json();
    }
  );

  const { trigger, isMutating } = useSWRMutation(
    "/api/create/product",
    createProduct,
    {
      onSuccess: () => {
        toast.success("Product created successfully!");
        router.push("/admin");
      },
      onError: (error) => {
        console.error("Error creating product:", error);
        toast.error("Failed to create product");
      },
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await trigger(formData);
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

  const categoryOptions =
    categories?.map((category: Category) => ({
      value: category.name,
      label: category.name,
    })) || [];

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create New Product</h1>
        {categoriesError && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
            Failed to load categories. Please try again later.
          </div>
        )}
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
              id="out_of_stock"
              name="out_of_stock"
              checked={formData.out_of_stock}
              onChange={handleChange}
              className="h-4 w-4 p-2 rounded border-gray-300 text-[var(--color-dark-brown)] focus:ring-[var(--color-dark-brown)]"
            />
            <label
              htmlFor="out_of_stock"
              className="ml-2 block text-sm text-gray-700"
            >
              Out of Stock
            </label>
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="secondary"
              onClick={() => router.push("/admin")}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={
                isMutating ||
                !formData.title ||
                !formData.description ||
                !formData.price ||
                !formData.image ||
                !formData.category
              }
            >
              {isMutating ? "Creating..." : "Create Product"}
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
