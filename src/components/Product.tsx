import React, { useState } from "react";
import { Product as ProductType, Category } from "../utils/types";
import { Button } from "./ui/Button";
import { Input, Select, TextArea } from "./ui/Input";
import { Layout } from "./Layout";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Loader from "./Loader";
import { enhancedFetcher } from "@/utils";

async function updateProduct(
  url: string,
  { arg }: { arg: Partial<ProductType> }
) {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  if (!response.ok) {
    throw new Error("Failed to update product");
  }

  return response.json();
}

interface ProductProps {
  productId?: string;
}

export const Product: React.FC<ProductProps> = ({ productId }) => {
  const router = useRouter();
  const id = productId || router.query.id;

  const { data: product, mutate } = useSWR<ProductType>(
    id ? `/api/get/products/${id}` : null,
    enhancedFetcher
  );

  const { data: categories } = useSWR<Category[]>(
    "/api/get/categories",
    enhancedFetcher
  );

  const { trigger, isMutating } = useSWRMutation(
    "/api/update/product",
    updateProduct,
    {
      onSuccess: (updatedProduct) => {
        toast.success("Product updated successfully!");
        mutate(updatedProduct, false);
      },
      onError: (error) => {
        console.error("Error updating product:", error);
        toast.error("Failed to update product");
      },
    }
  );

  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState<Partial<ProductType>>({});

  // Initialize editedProduct when product data is loaded
  React.useEffect(() => {
    if (product) {
      setEditedProduct({
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
        category: product.category,
        out_of_stock: product.out_of_stock,
      });
    }
  }, [product]);

  if (!product || isMutating) {
    return <Loader />;
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) : value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    trigger({
      ...editedProduct,
      id: product.id,
      updated_at: new Date().toISOString(),
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProduct({
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
      category: product.category,
      out_of_stock: product.out_of_stock,
    });
    setIsEditing(false);
  };

  const categoryOptions =
    categories?.map((category: Category) => ({
      value: category.name,
      label: category.name,
    })) || [];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative aspect-square">
            {isEditing ? (
              <Input
                type="text"
                name="image"
                value={editedProduct.image}
                onChange={handleInputChange}
                label="Image URL"
              />
            ) : (
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
            {isEditing ? (
              <div className="mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="out_of_stock"
                    checked={editedProduct.out_of_stock}
                    onChange={handleCheckboxChange}
                    className="rounded"
                  />
                  <span className="text-sm">Out of Stock</span>
                </label>
              </div>
            ) : (
              product.out_of_stock && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  Out of Stock
                </div>
              )
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {isEditing ? (
              <Input
                type="text"
                name="title"
                value={editedProduct.title}
                onChange={handleInputChange}
                label="Product Title"
                className="text-3xl font-bold"
              />
            ) : (
              <h1 className="text-3xl font-bold text-gray-900">
                {product.title}
              </h1>
            )}
            {isEditing ? (
              <Select
                label="Category"
                id="category"
                name="category"
                required
                value={editedProduct.category}
                onChange={handleSelectChange}
                options={categoryOptions}
              />
            ) : (
              <p className="text-gray-500 mt-2">{product.category}</p>
            )}

            {isEditing ? (
              <Input
                type="number"
                name="price"
                value={editedProduct.price}
                onChange={handleInputChange}
                label="Price"
                step="0.01"
              />
            ) : (
              <div className="text-2xl font-semibold text-gray-900">
                ${product.price.toFixed(2)}
              </div>
            )}

            {isEditing ? (
              <TextArea
                name="description"
                value={editedProduct.description}
                onChange={handleInputChange}
                label="Description"
                rows={4}
              />
            ) : (
              <div className="prose max-w-none">
                <p className="text-gray-700">{product.description}</p>
              </div>
            )}

            <div className="pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-500">
                <p>Product ID: {product.id}</p>
                <p>
                  Added: {new Date(product.created_at).toLocaleDateString()}
                </p>
                <p>
                  Last updated:{" "}
                  {new Date(product.updated_at).toLocaleDateString()}
                </p>
              </div>
            </div>

            {isEditing ? (
              <div className="flex space-x-4">
                <Button onClick={handleSave} variant="primary">
                  Save
                </Button>
                <Button onClick={handleCancel} variant="secondary">
                  Cancel
                </Button>
              </div>
            ) : (
              <Button onClick={() => setIsEditing(true)} variant="primary">
                Edit
              </Button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
