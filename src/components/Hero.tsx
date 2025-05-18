import { Navbar } from "./Navbar";
import { Button } from "./ui/Button";

export const Hero = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="relative w-full mt-8 flex justify-end bg-dark-brown h-screen items-center">
        <div className="absolute left-[32rem] top-80 flex flex-col gap-4 text-2xl text-right text-white font-lobster w-1/3 z-10">
          <h2 className="font-bold">Welcome to The Woodpecker Cafe!</h2>
          <p className="font-medium text-6xl">Crafting Perfect </p>
          <p className="font-medium text-6xl">Moments,</p>
          <p className="font-medium text-6xl">One Meal At A Time</p>
          <p className="text-lg font-sans mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            sunt delectus error atque magnam dolores eligendi sed, veniam est
            dolorem commodi aut sint vel adipisci minus architecto at quis
            soluta!
          </p>
          <div className="font-sans mt-8">
            <Button className="rounded-none hover:bg-white hover:text-dark-brown">
              Explore more
            </Button>
          </div>
        </div>
        <div className="w-1/2">
          <img src="/pizza.png" alt="hero" className="w-full scale-x-[-1]" />
        </div>
      </div>
    </div>
  );
};
