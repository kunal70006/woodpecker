import { Navbar } from "./Navbar";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center h-screen shadow">
      <Navbar />
      <h1 className="text-4xl font-bold">Welcome to our restaurant</h1>
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
    </div>
  );
};
