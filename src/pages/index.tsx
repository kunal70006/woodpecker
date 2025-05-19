import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { OurSpeciality } from "@/components/OurSpeciality";
import { CustomerReviews } from "@/components/CustomerReviews";
import { DefaultLayout } from "@/components/Layout";
export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <OurSpeciality />
      <AboutUs />
      <CustomerReviews />
    </DefaultLayout>
  );
}
