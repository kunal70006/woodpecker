/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Product } from "../../utils/types";
import { useRouter } from "next/router";
import { Button } from "../ui/Button";

export const Dashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/get-products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Products</h1>
        <Button onClick={() => router.push("/admin/products/create")}>
          Create Product
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => router.push(`/admin/products/${product.id}`)}
            className="border rounded-lg p-4 shadow-sm cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">${product.price}</span>
              {product.outOfStock ? (
                <span className="text-red-500">Out of Stock</span>
              ) : (
                <span className="text-green-500">In Stock</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
