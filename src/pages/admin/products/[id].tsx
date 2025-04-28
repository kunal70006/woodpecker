import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { createClient } from "@/utils/supabase/server-props";
import { Product } from "@/components/Product";
import {
  Product as ProductType,
  Category as CategoryType,
} from "@/utils/types";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

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

export default function ProductPage() {
  const router = useRouter();

  const { data: product, mutate } = useSWR<ProductType>(
    `/api/get/products/${router.query.id}`,
    async (url: string) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      return response.json();
    }
  );

  const { data: categories } = useSWR<CategoryType[]>(
    "/api/get/categories",
    async (url: string) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      return response.json();
    }
  );

  const { trigger, isMutating } = useSWRMutation(
    "/api/update/product",
    updateProduct,
    {
      onSuccess: (updatedProduct) => {
        toast.success("Product updated successfully!");
        // Update the local data with the new product
        mutate(updatedProduct, false);
      },
      onError: (error) => {
        console.error("Error updating product:", error);
        toast.error("Failed to update product");
      },
    }
  );

  if (!product || isMutating) {
    return <div>Loading...</div>;
  }

  return (
    <Product
      product={product}
      categories={categories || []}
      onSave={(updatedProduct) => {
        trigger({ ...updatedProduct, id: product.id });
      }}
    />
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
    props: {},
  };
}
