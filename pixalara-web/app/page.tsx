import Hero from "@/components/Hero";
import Services from "@/components/Services"; // This is the 7 Services Grid
import Process from "@/components/Process";   // This is the 6-Step Process

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      
      {/* 1. The Video Entry Section */}
      <Hero />
      
      {/* 2. The 7 Digital Services (Kinetic Grid) */}
      <Services />

      {/* 3. The 6-Step Creative Process (Glowing Line) */}
      <Process />

    </main>
  );
}