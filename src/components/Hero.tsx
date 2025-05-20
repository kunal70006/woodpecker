import { Button } from "./ui/Button";
import { useRouter } from "next/router";

export const Hero = () => {
  const router = useRouter();
  return (
    <div className="relative w-full mt-8 flex flex-col md:flex-row justify-end bg-dark-brown min-h-screen items-center">
      <div className="relative md:absolute px-6 md:px-0 md:left-8 lg:left-16 xl:left-36 2xl:left-[32rem] 2xl:top-80 flex flex-col gap-2 md:gap-4 text-xl md:text-2xl text-center md:text-right text-white font-lobster w-full md:w-1/3 z-10 mt-8 md:mt-0">
        <h2 className="font-bold text-2xl md:text-3xl">
          Welcome to The Woodpecker Cafe!
        </h2>
        <p className="font-medium text-4xl md:text-5xl lg:text-6xl">
          Crafting Perfect{" "}
        </p>
        <p className="font-medium text-4xl md:text-5xl lg:text-6xl">Moments,</p>
        <p className="font-medium text-4xl md:text-5xl lg:text-6xl">
          One Meal At A Time
        </p>
        <p className="text-base md:text-lg font-sans mt-2 md:mt-4">
          At Woodpecker, we don’t just cook. We create bold, comforting flavours
          that stay with you. Every dish is made with care, every cup brewed
          with love. This isn’t just a café, It’s a place where food tells a
          story, and every visit feels like coming home.
        </p>
        <div className="font-sans mt-4 md:mt-8">
          <Button
            onClick={() => router.push("/menu")}
            className="rounded-none hover:bg-white hover:text-dark-brown"
          >
            Explore more
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img src="/pizza.png" alt="hero" className="w-full scale-x-[-1]" />
      </div>
    </div>
  );
};
