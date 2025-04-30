import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import toast from "react-hot-toast";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { Layout } from "./Layout";
import Loader from "./Loader";
import { enhancedFetcher } from "@/utils";
import { Category } from "@/utils/types";

async function createCategory(
  url: string,
  { arg }: { arg: { category: string } }
) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  if (!response.ok) {
    throw new Error("Failed to create category");
  }

  return response.json();
}

export const CreateCategory = () => {
  const router = useRouter();
  const [category, setCategory] = useState("");

  // Fetch existing categories using the enhanced fetcher
  const {
    data: categories,
    error: categoriesError,
    isLoading,
  } = useSWR<Category[]>("/api/get/categories", enhancedFetcher);

  const { trigger, isMutating } = useSWRMutation<
    Category,
    Error,
    string,
    { category: string }
  >("/api/create/category", createCategory, {
    onSuccess: () => {
      toast.success("Category created successfully!");
      router.push("/admin");
    },
    onError: (error) => {
      console.error("Error creating category:", error);
      toast.error("Failed to create category");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await trigger({ category });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setCategory(e.target.value);
  };

  // Format date to a human readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create New Category</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Name"
            id="name"
            name="name"
            required
            value={category}
            onChange={handleChange}
          />

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
              disabled={isMutating || category.length === 0}
            >
              {isMutating ? "Creating..." : "Create Category"}
            </Button>
          </div>
        </form>

        {/* Display existing categories */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Existing Categories</h2>
          {categoriesError ? (
            <p className="text-red-500">Failed to load categories</p>
          ) : categories && categories.length === 0 ? (
            <p>No categories found</p>
          ) : (
            <div className="border rounded-xl overflow-hidden mt-4 bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date Created
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {categories?.map((cat) => (
                    <tr key={cat.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                        {cat.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                        {cat.created_at ? formatDate(cat.created_at) : "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
