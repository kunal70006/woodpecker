import { ReactNode } from "react";
import { Button } from "./ui/Button";
import { useRouter } from "next/router";
interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  const showBackButton = router.pathname !== "/admin";

  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        {showBackButton ? (
          <Button onClick={() => router.back()}>Back</Button>
        ) : (
          <h1 className="text-4xl font-bold">Products</h1>
        )}
        <div className="flex gap-4">
          <Button onClick={() => router.push("/admin/categories")}>
            Categories
          </Button>
          <Button onClick={() => router.push("/admin/products/create")}>
            Products
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
};
