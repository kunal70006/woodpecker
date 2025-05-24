// import { Button } from "./ui/Button";
// import { useRouter } from "next/router";

export const Hero = () => {
  // const router = useRouter();
  return (
    <div className="relative w-full min-h-screen">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-6 text-center text-white pt-32 xl:pt-64">
        <div className="max-w-3xl">
          <h2 className="font-bold text-2xl md:text-3xl font-lobster">
            Welcome to The Woodpecker Cafe!
          </h2>
          <p className="font-medium text-4xl md:text-5xl lg:text-6xl font-lobster">
            Crafting Perfect{" "}
          </p>
          <p className="font-medium text-4xl md:text-5xl lg:text-6xl font-lobster">
            Moments,
          </p>
          <p className="font-medium text-4xl md:text-5xl lg:text-6xl font-lobster">
            One Meal At A Time
          </p>
          <p className="text-base md:text-lg font-sans mt-4">
            At Woodpecker, we don&apos;t just cook. We create bold, comforting
            flavours that stay with you. Every dish is made with care, every cup
            brewed with love. This isn&apos;t just a café, It&apos;s a place
            where food tells a story, and every visit feels like coming home.
          </p>
        </div>
      </div>
    </div>
  );
};
