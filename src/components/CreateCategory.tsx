import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import toast from "react-hot-toast";
import useSWRMutation from "swr/mutation";
import { Layout } from "./Layout";
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

  const { trigger, isMutating } = useSWRMutation(
    "/api/create/category",
    createCategory,
    {
      onSuccess: () => {
        toast.success("Category created successfully!");
        router.push("/admin");
      },
      onError: (error) => {
        console.error("Error creating category:", error);
        toast.error("Failed to create category");
      },
    }
  );

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
            <Button type="submit" disabled={isMutating}>
              {isMutating ? "Creating..." : "Create Category"}
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
