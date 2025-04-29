import React from "react";

interface LoaderProps {
  size?: number;
}

export const Loader: React.FC<LoaderProps> = ({ size = 52 }) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div
        className="animate-spin rounded-full border-4 border-gray-200 border-t-dark-brown"
        style={{
          width: size,
          height: size,
        }}
      />
    </div>
  );
};

export default Loader;
