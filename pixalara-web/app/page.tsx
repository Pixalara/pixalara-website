import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA"; // <--- Import

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandMarquee />
      <Services />
      <Process />
      <Testimonials />
      <CTA /> {/* <--- Add here. This completes the loop! */}
    </main>
  );
}