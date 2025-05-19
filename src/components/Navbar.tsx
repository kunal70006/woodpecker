import Link from "next/link";
import { Button } from "./ui/Button";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex items-center  justify-center gap-8 text-dark-brown font-medium text-xl bg-transparent">
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
    </nav>
  );
};
