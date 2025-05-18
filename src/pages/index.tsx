import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { OurSpeciality } from "@/components/OurSpeciality";
import { CustomerReviews } from "@/components/CustomerReviews";

export default function Home() {
  return (
    <div className="min-h-screen my-8">
      <Hero />
      <OurSpeciality />
      <AboutUs />
      <CustomerReviews />
    </div>
  );
}
