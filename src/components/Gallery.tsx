import { Collage } from "./Collage";

export const Gallery = () => {
  return (
    <div className="min-h-screen my-8 md:my-16 flex flex-col gap-y-16 md:gap-y-32 items-center bg-[url('/gallery_background.png')] bg-no-repeat bg-cover bg-center relative">
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="flex mt-8 md:mt-16 flex-col items-center gap-4 text-center relative z-10 px-4 md:px-0">
        <h2 className="text-4xl md:text-6xl font-lobster text-dark-brown">
          Gallery
        </h2>
      </div>
      <div className="relative z-10 px-4 md:px-0">
        <Collage />
      </div>
    </div>
  );
};
