import Hero from "@/components/Hero";
import Services from "@/components/Services"; 
import Process from "@/components/Process";   

export default function Home() {
  return (
    // Updated: Removed 'bg-black' to reveal the global gradient
    <main className="min-h-screen">
      
      {/* 1. The Video Entry Section */}
      <Hero />
      
      {/* 2. The 7 Digital Services (Kinetic Grid) */}
      <Services />

      {/* 3. The 6-Step Creative Process (Glowing Line) */}
      <Process />

    </main>
  );
}