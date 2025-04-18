import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import profilePic from "../assets/images/pp.jpg"; // Update path as needed

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Hey, I'm <span className="text-indigo-400">Yogesh Awasthi</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            A Frontend Developer passionate about creating beautiful UIs.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 transition px-6 py-2 rounded-xl text-white text-base font-medium shadow-lg"
          >
            View Projects <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-64 h-64 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
