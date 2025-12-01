"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-[#1a1f2c] via-[#2a3042] to-[#1a1f2c] text-white overflow-hidden">

      {/* Glow orbs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center px-6"
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold tracking-wide mb-4">
          Ready to Experience Smarter Property Management?
        </h2>

        {/* Sub text */}
        <p className="text-gray-300 text-lg mb-8">
          Start your journey today with our AI-powered tools built for property
          owners, investors, and professionals.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.4)",
          }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r 
                     from-yellow-500 to-yellow-400 text-black shadow-xl 
                     hover:shadow-yellow-500/30"
        >
          Start Free Trial
        </motion.button>
      </motion.div>
    </section>
  );
}
