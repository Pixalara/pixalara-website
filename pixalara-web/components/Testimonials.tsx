'use client';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO, FinTech Global",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Pixalara didn't just build a website; they engineered a digital ecosystem. Our conversion rates doubled within 30 days of launch.",
  },
  {
    name: "David Ross",
    role: "Founder, Nexus AI",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "The speed and scalability of the architecture they built allows us to handle millions of requests without a blink. Absolutely world-class.",
  },
  {
    name: "Sathesh",
    role: "Managing Director, Fine Tech Power Controls",
    // You can replace this with a real photo if you have one, or keep the placeholder
    image: "https://randomuser.me/api/portraits/men/76.jpg", 
    quote: "The custom ERP they developed streamlined our entire manufacturing process, and our new site is generating 3X more qualified leads than before.",
  },
  {
    name: "Marcus Chen",
    role: "Head of Growth, StreamLine",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "Their data-driven digital marketing approach revolutionized our user acquisition. We saw a 300% ROI on ad spend within the first quarter.",
  },
  {
    name: "Jessica Alvarez",
    role: "VP of Engineering, CloudScale",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    quote: "Migrating to AWS with their custom DevOps pipelines cut our deployment time by 80%. Our system reliability has never been higher.",
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Marketing, Solstice",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "Their design team is on another level. They captured our brand essence perfectly and translated it into a fluid, immersive web experience.",
  }
];

export default function Testimonials() {
  return (
    <section className="bg-black pt-20 pb-32 px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-white mb-6"
          >
            Don't Just Take <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Our Word For It.
            </span>
          </motion.h2>
        </div>

        {/* Responsive Grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-500 mb-6 text-sm">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>

              {/* Quote */}
              <div className="mb-8 flex-grow">
                <FaQuoteLeft className="text-3xl text-blue-500/30 mb-4" />
                <p className="text-gray-300 text-lg leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-blue-400 text-xs uppercase tracking-wider font-bold">{t.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}