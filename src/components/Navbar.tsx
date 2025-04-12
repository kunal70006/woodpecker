/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex items-center  justify-center gap-8 text-dark-brown font-medium text-xl p-6 bg-transparent">
      <img src="/logo.svg" alt="logo" className="w-10 h-10" />
      <Link href="/">Home</Link>
      <Link href="/menu">Our menu</Link>
      <Link href="/about">About</Link>
      <Link href="#">Gallery</Link>
      <Link href="/contact">Contact</Link>
      <button className="bg-light-brown text-white px-8 py-2 rounded-xs text-lg cursor-pointer transition-all hover:bg-dark-brown">
        Book reservation
      </button>
    </nav>
  );
};
