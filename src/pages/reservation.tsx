import { Footer } from "@/components/Footer";
import { GetInTouch } from "@/components/GetInTouch";
import { Navbar } from "@/components/Navbar";

const reservation = () => {
  return (
    <div className="min-h-screen my-8">
      <Navbar />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default reservation;
