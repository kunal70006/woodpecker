import Link from "next/link";
import { Button } from "./ui/Button";

export const Navbar = () => {
  return (
    <nav className="flex items-center  justify-center gap-8 text-dark-brown font-medium text-xl bg-transparent">
      <img src="/logo.svg" alt="logo" className="w-10 h-10" />
      <Link href="/">Home</Link>
      <Link href="/menu">Our menu</Link>
      <Link href="/about">About</Link>
      <Link href="#">Gallery</Link>
      <Link href="/contact">Contact</Link>
      <Button className="rounded-none">Book reservation</Button>
    </nav>
  );
};
