import useSWR from "swr";
import { Product } from "../utils/types";
import { enhancedFetcher } from "../utils";
import Loader from "./Loader";
import { useMemo } from "react";

export const Menu = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR<Product[]>("/api/get/products", enhancedFetcher);

  const productsByCategory = useMemo(() => {
    return products?.reduce<Record<string, Product[]>>((acc, product) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {});
  }, [products]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Failed to load products
      </div>
    );
  }

  if (products?.length === 0) {
    return (
      <div className="flex items-center justify-center mt-8 text-2xl font-semibold">
        No products found
      </div>
    );
  }

  return (
    <div className="min-h-screen my-16 flex flex-col gap-y-16 items-center bg-[url('/background.png')] bg-contain bg-center relative">
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="flex mt-16 flex-col items-center gap-4 text-center relative z-10">
        <h2 className="text-6xl font-lobster text-dark-brown">Our Menu</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6  relative z-10">
        {Object.entries(productsByCategory || {}).map(
          ([category, products], index) => (
            <div key={index} className="col-span-full mb-16">
              <div className="flex flex-col gap-2 mb-8">
                <h3 className="text-4xl font-semibold text-dark-brown font-lobster text-center">
                  {category}
                </h3>
                <p className="text-light-brown text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="shadow-2xl border-beige border p-4 bg-beige flex flex-col gap-2 rounded-md w-[300px] items-center"
                  >
                    <div className="w-[200px] h-[200px]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain rounded-sm"
                      />
                    </div>
                    <span className="text-lg font-bold text-dark-brown">
                      ₹{product.price.toFixed(2)}
                    </span>
                    <h2 className="text-xl font-semibold line-clamp-1 uppercase">
                      {product.title}
                    </h2>
                    <p className="text-light-brown line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
