import { useRouter } from "next/router";
import useSWR from "swr";
import { Product } from "../../utils/types";
import Loader from "../Loader";
import { Layout } from "../Layout";
import { enhancedFetcher } from "../../utils";
import toast from "react-hot-toast";

export const Dashboard = () => {
  const router = useRouter();
  const {
    data: products,
    error,
    isLoading,
  } = useSWR<Product[]>("/api/get/products", enhancedFetcher, {
    // Cache the data for 5 minutes
    dedupingInterval: 300000,
    // Keep previous data while revalidating
    keepPreviousData: true,
    // Reuse the same data for this time before revalidating
    revalidateIfStale: false,
    // Handle loading fallbacks appropriately
    suspense: false,
    // Callback function for errors
    onError: (err) => {
      console.error("Error loading products:", err);
      toast.error("Error loading products");
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          Failed to load products
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
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
              {product.out_of_stock ? (
                <span className="text-red-500">Out of Stock</span>
              ) : (
                <span className="text-green-500">In Stock</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
