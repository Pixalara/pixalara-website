import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials"; // <--- Import

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandMarquee />
      <Services />
      <Process />
      <Testimonials /> {/* <--- Add here */}
    </main>
  );
}