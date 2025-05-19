import { ReactNode } from "react";
import { Button } from "./ui/Button";
import { useRouter } from "next/router";
import { createClient } from "@/utils/supabase/component";
import toast from "react-hot-toast";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import {
  ArrowLeftIcon,
  HomeIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/outline";
interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const supabase = createClient();

  const showBackButton = router.pathname !== "/admin";

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success("Successfully logged out!");
      router.push("/login");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to logout");
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start mb-6 sm:mb-8 gap-4">
        {showBackButton ? (
          <div className="flex gap-2 sm:gap-3">
            <Button variant="secondary" onClick={() => router.back()}>
              <ArrowLeftIcon className="size-5 sm:size-6 text-gray-800" />
            </Button>
            <Button variant="secondary" onClick={() => router.push("/admin")}>
              <HomeIcon className="size-5 sm:size-6 text-gray-800" />
            </Button>
          </div>
        ) : (
          <div className="flex gap-2 sm:gap-3 items-center">
            <Button variant="danger" onClick={handleLogout}>
              <p className="flex items-center gap-2">
                <ArrowLeftEndOnRectangleIcon className="size-5 sm:size-6 text-white" />
                <span>Logout</span>
              </p>
            </Button>
            <Button variant="secondary" onClick={() => router.push("/")}>
              <p className="flex items-center gap-2">
                <HomeIcon className="size-5 sm:size-6 text-gray-800" />
                <span>Cafe</span>
              </p>
            </Button>
          </div>
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

export const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen my-8">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
