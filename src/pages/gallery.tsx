import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Navbar } from "@/components/Navbar";

const gallery = () => {
  return (
    <div className="min-h-screen my-8">
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
};

export default gallery;
