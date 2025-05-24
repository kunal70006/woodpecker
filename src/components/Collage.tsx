import React from "react";

const images = [
  "https://lmxacvqincqeswlthypp.supabase.co/storage/v1/object/public/assets/collage/PHOTO-2025-05-20-16-37-44-min.jpg",
  "https://lmxacvqincqeswlthypp.supabase.co/storage/v1/object/public/assets/collage/PHOTO-2025-05-20-16-48-21-min.jpg",
  "https://lmxacvqincqeswlthypp.supabase.co/storage/v1/object/public/assets/collage/PHOTO-2025-05-20-16-48-40-min.jpg",
  "https://lmxacvqincqeswlthypp.supabase.co/storage/v1/object/public/assets/collage/PHOTO-2025-05-20-16-48-49-min.jpg",
  "https://lmxacvqincqeswlthypp.supabase.co/storage/v1/object/public/assets/collage/Woodpecker%20ambience-min.jpg",
];

export const Collage = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Mobile Layout - Single Column */}
      <div className="grid grid-cols-1 gap-4 sm:hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg aspect-[4/3] group"
          >
            <img
              src={image}
              alt={`Coffee ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Tablet and Desktop Layout - Grid */}
      <div className="hidden sm:grid sm:grid-cols-3 gap-2 h-[400px] md:h-[500px] lg:h-[600px]">
        {/* Left column - 2 images */}
        <div className="flex flex-col gap-2">
          <div className="relative overflow-hidden rounded-lg flex-1 group">
            <img
              src={images[2]}
              alt="Coffee 1"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          <div className="relative overflow-hidden rounded-lg flex-1 group">
            <img
              src={images[1]}
              alt="Coffee 2"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Middle column - 1 large image */}
        <div className="relative overflow-hidden rounded-lg group">
          <img
            src={images[0]}
            alt="Coffee 3"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>

        {/* Right column - 2 images */}
        <div className="flex flex-col gap-2">
          <div className="relative overflow-hidden rounded-lg h-[65%] group">
            <img
              src={images[3]}
              alt="Coffee 4"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          <div className="relative overflow-hidden rounded-lg flex-1 group">
            <img
              src={images[4]}
              alt="Coffee 5"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
