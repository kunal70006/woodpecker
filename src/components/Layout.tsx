import { ReactNode } from "react";
import { Button } from "./ui/Button";
import { useRouter } from "next/router";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  const showBackButton = router.pathname !== "/admin";

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start mb-6 sm:mb-8 gap-4">
        {showBackButton ? (
          <div className="flex gap-2 sm:gap-3">
            <Button variant="secondary" onClick={() => router.back()}>
              <ArrowLeftIcon className="size-5 sm:size-6 text-gray-800" />
            </Button>
            <Button onClick={() => router.push("/admin")}>Home</Button>
          </div>
        ) : (
          <h1 className="md:block hidden text-3xl sm:text-4xl font-bold">
            Products
          </h1>
        )}
        <div className="flex flex-wrap gap-2 sm:gap-4">
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
