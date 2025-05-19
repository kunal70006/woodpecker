import Link from "next/link";
import { Button } from "./ui/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center gap-8 text-dark-brown font-medium text-xl py-4">
        <img src="/logo.png" alt="logo" className="w-16" />
        <Link href="/">Home</Link>
        <Link href="/menu">Our menu</Link>
        <Link href="/#about">About</Link>
        <Link href="/gallery">Gallery</Link>
        <Button
          onClick={() => router.push("/reservation")}
          className="rounded-none"
        >
          Book reservation
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-4 py-2">
        <img src="/logo.png" alt="logo" className="w-12" />
        <button
          onClick={toggleDrawer}
          className="text-dark-brown p-2"
          aria-label="Toggle menu"
        >
          {isDrawerOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-dark-brown font-medium text-xl">
          <button
            onClick={closeDrawer}
            className="absolute top-4 right-4 text-dark-brown p-2"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <Link href="/" onClick={closeDrawer}>
            Home
          </Link>
          <Link href="/menu" onClick={closeDrawer}>
            Our menu
          </Link>
          <Link href="/#about" onClick={closeDrawer}>
            About
          </Link>
          <Link href="/gallery" onClick={closeDrawer}>
            Gallery
          </Link>
          <Button
            onClick={() => {
              closeDrawer();
              router.push("/reservation");
            }}
            className="rounded-none"
          >
            Book reservation
          </Button>
        </div>
      </div>
    </nav>
  );
};
