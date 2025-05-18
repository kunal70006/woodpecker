import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { OurSpeciality } from "@/components/OurSpeciality";

export default function Home() {
  return (
    <div className="min-h-screen my-8">
      <Hero />
      <OurSpeciality />
      <AboutUs />
    </div>
  );
}
