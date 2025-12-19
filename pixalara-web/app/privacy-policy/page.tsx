'use client';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 border-b border-white/10 pb-8"
        >
          <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">Legal</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">Policy</span>
          </h1>
          <p className="text-gray-400 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-8 text-gray-300 leading-relaxed"
        >
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              Welcome to Pixalara ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together follows:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li><strong className="text-white">Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong className="text-white">Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong className="text-white">Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, and operating system and platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-400">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:hello@pixalara.com" className="text-cyan-400 hover:text-white transition-colors">hello@pixalara.com</a>.
            </p>
          </section>
        </motion.div>

      </div>
    </main>
  );
}