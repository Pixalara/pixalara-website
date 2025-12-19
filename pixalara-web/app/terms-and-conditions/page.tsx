'use client';
import { motion } from 'framer-motion';

export default function TermsPage() {
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
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Conditions</span>
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
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Pixalara ("we," "us" or "our"), concerning your access to and use of the Pixalara website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Representations</h2>
            <p className="mb-4">By using the Site, you represent and warrant that:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
              <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Prohibited Activities</h2>
            <p>
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:hello@pixalara.com" className="text-purple-400 hover:text-white transition-colors">hello@pixalara.com</a>.
            </p>
          </section>
        </motion.div>

      </div>
    </main>
  );
}