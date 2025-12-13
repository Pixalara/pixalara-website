'use client';
import { motion } from 'framer-motion';
import { 
  FaPaintBrush, FaLayerGroup, FaMobileAlt, FaEnvelope, 
  FaServer, FaBullhorn, FaCloud, FaArrowRight,
  FaHtml5, FaCss3Alt, FaReact, FaPhp, FaDatabase, FaNodeJs, 
  FaPython, FaAndroid, FaJava, FaAws, FaGoogle, FaMicrosoft, 
  FaWordpress, FaGoogleDrive
} from 'react-icons/fa';

// IMPORTS FOR CLOUDFLARE & ZOHO
import { SiCloudflare, SiZoho } from 'react-icons/si';

// === SERVICE DATA ===
const services = [
  {
    id: "01",
    title: "Web Design & Development",
    icon: <FaPaintBrush />,
    color: "from-blue-600 to-cyan-400",
    description: "Your website is your 24/7 salesperson. We don't just make it look pretty; we engineer it to sell. We combine psychological design principles with blazing-fast code (Next.js/React) to create digital experiences that turn visitors into obsessed customers.",
    features: ["Custom UI/UX Design (Figma)", "High-Performance Next.js Development", "Mobile-First Responsive Layouts", "Conversion Rate Optimization (CRO)"]
  },
  {
    id: "02",
    title: "Branding & Identity",
    icon: <FaLayerGroup />,
    color: "from-purple-600 to-pink-500",
    description: "A logo is not a brand. A brand is a feeling. We define your company's voice, visual language, and personality. From color psychology to typography, we build a cohesive identity that makes your business instantly recognizable and impossible to ignore.",
    features: ["Logo Design & Visual Identity", "Brand Guidelines & Voice", "Corporate Stationery", "Rebranding Strategy"]
  },
  {
    id: "03",
    title: "App Development",
    icon: <FaMobileAlt />,
    color: "from-red-600 to-orange-500",
    description: "Put your business in your customer's pocket. We build native-feeling mobile apps for iOS and Android using modern cross-platform frameworks. Whether it's a fitness tracker, an e-commerce store, or a SaaS platform, we build it for scale.",
    features: ["iOS & Android (React Native/Flutter)", "App Store Optimization (ASO)", "User Interface (UI) Prototyping", "Backend API Integration"]
  },
  {
    id: "04",
    title: "Domain & Business Mail",
    icon: <FaEnvelope />,
    color: "from-emerald-500 to-teal-400",
    description: "Stop using @gmail.com for your business. It kills trust. We set up professional, secure business email suites (Google Workspace or Microsoft 365) and handle complex domain DNS configurations so your emails never hit the spam folder.",
    features: ["Secure Domain Registration", "Google Workspace / Outlook Setup", "DMARC/DKIM Security Protocols", "Email Signature Design"]
  },
  {
    id: "05",
    title: "Web Hosting",
    icon: <FaServer />,
    color: "from-indigo-600 to-blue-500",
    description: "Speed is a feature. Our managed hosting solutions ensure your site loads in milliseconds, not seconds. We provide military-grade security, daily automated backups, and 99.99% uptime guarantees so your business never goes offline.",
    features: ["NVMe SSD High-Speed Servers", "Free SSL Certificates", "Daily Automated Backups", "24/7 Server Monitoring"]
  },
  {
    id: "06",
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    color: "from-orange-500 to-yellow-400",
    description: "Building a website is half the battle; getting traffic is the war. We deploy aggressive, data-driven marketing campaigns. From dominating Google Search results (SEO) to high-ROI paid ads (PPC), we bring the customers to you.",
    features: ["Search Engine Optimization (SEO)", "PPC Advertising (Google/Meta Ads)", "Content Strategy & Copywriting", "Social Media Management"]
  },
  {
    id: "07",
    title: "Cloud & DevOps",
    icon: <FaCloud />,
    color: "from-cyan-500 to-blue-500",
    description: "Scale without breaking. We architect robust cloud infrastructure on AWS, Azure, or Google Cloud. We implement CI/CD pipelines to automate your software deployment, ensuring your team can ship code faster and safer.",
    features: ["AWS / Azure / GCP Architecture", "CI/CD Pipeline Automation", "Docker & Kubernetes", "Cloud Security & Compliance"]
  }
];

// === TECH STACK DATA ===
const techStack = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "React JS", icon: <FaReact />, color: "text-cyan-400" },
  { name: "PHP", icon: <FaPhp />, color: "text-indigo-400" },
  { name: "MySQL", icon: <FaDatabase />, color: "text-blue-400" },
  { name: "MongoDB", icon: <FaDatabase />, color: "text-green-500" },
  { name: "NodeJS", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
  { name: "Kotlin", icon: <FaAndroid />, color: "text-purple-500" },
  { name: "Flutter", icon: <FaMobileAlt />, color: "text-cyan-500" },
  { name: "Java", icon: <FaJava />, color: "text-red-500" },
  { name: "AWS", icon: <FaAws />, color: "text-orange-400" },
  { name: "Google Cloud", icon: <FaGoogle />, color: "text-blue-500" },
  { name: "Cloudflare", icon: <SiCloudflare />, color: "text-orange-500" },
  { name: "Zoho", icon: <SiZoho />, color: "text-yellow-500" },
  { name: "MS Workspace", icon: <FaMicrosoft />, color: "text-blue-600" },
  { name: "G-Workspace", icon: <FaGoogleDrive />, color: "text-green-500" },
  { name: "WordPress", icon: <FaWordpress />, color: "text-blue-400" },
];

export default function ServicesPage() {
  return (
    <main className="bg-black min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 text-center border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-6xl md:text-9xl font-bold text-white mb-6 tracking-tighter"
        >
          What We <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            Do Best.
          </span>
        </motion.h1>
        <p className="relative z-10 text-xl text-gray-400 max-w-3xl mx-auto">
          We don't just offer services; we offer solutions. Every line of code, every pixel, and every strategy is designed to grow your revenue.
        </p>
      </section>

      {/* 2. THE 7 SERVICE SECTIONS */}
      <div className="flex flex-col">
        {services.map((service, index) => (
          <section key={service.id} className="relative py-20 px-6 border-b border-white/5 overflow-hidden group">
            {/* UPDATED PADDING: py-20 (was py-32) to reduce gap */}
            <div className={`absolute top-1/2 ${index % 2 === 0 ? 'right-0' : 'left-0'} -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r ${service.color} opacity-5 blur-[150px] pointer-events-none`} />
            <div className="max-w-7xl mx-auto w-full">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 md:gap-24`}>
                
                {/* Text Side */}
                <div className="flex-1 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className={`text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent mb-4 block`}>
                      {service.id}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-10">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-400">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <button className="flex items-center gap-3 text-white border-b border-white/20 pb-1 hover:text-cyan-400 hover:border-cyan-400 transition-all text-sm font-bold tracking-widest uppercase">
                      Start Project <FaArrowRight />
                    </button>
                  </motion.div>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-neutral-900 group-hover:scale-105 transition-transform duration-700">
                       <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${service.color}`} />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`text-9xl opacity-20 text-white`}>
                            {service.icon}
                          </div>
                       </div>
                    </div>
                    <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-xl`}>
                          {service.icon}
                        </div>
                        <div>
                           <p className="text-white font-bold text-lg">Pixalara Expert Team</p>
                           <p className="text-gray-400 text-xs uppercase tracking-wide">Ready to deploy</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 3. TECHNOLOGY PARTNERS SECTION */}
      <section className="py-32 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
        
        <div className="text-center mb-16 relative z-10 px-6">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
             Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Partners</span>
           </h2>
           <p className="text-gray-400">Powering your digital empire with the world's most advanced stacks.</p>
        </div>

        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-neutral-950 to-transparent z-10" />

        {/* Marquee Row 1 (Left to Right) */}
        <div className="flex overflow-hidden mb-8">
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            // UPDATED: Slower Speed (Duration increased to 40)
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 md:gap-8 px-4"
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all cursor-default"
              >
                <span className={`text-4xl md:text-5xl ${tech.color}`}>{tech.icon}</span>
                <span className="text-white font-bold tracking-wide text-sm md:text-base">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee Row 2 (Right to Left) */}
        <div className="flex overflow-hidden">
          <motion.div 
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            // UPDATED: Slower Speed (Duration increased to 45)
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 md:gap-8 px-4"
          >
            {[...techStack, ...techStack].reverse().map((tech, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all cursor-default"
              >
                <span className={`text-4xl md:text-5xl ${tech.color}`}>{tech.icon}</span>
                <span className="text-white font-bold tracking-wide text-sm md:text-base">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </section>

    </main>
  );
}