import { Footer } from "@/components/Footer";
import { Menu } from "@/components/menu";
import { Navbar } from "@/components/Navbar";
import React from "react";

const menu = () => {
  return (
    <div className="min-h-screen my-8">
      <Navbar />
      <Menu />
      <Footer />
    </div>
  );
};

export default menu;
