import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/images/pp3.png"; // update path if needed

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-6 shadow-md">
            <p className="text-lg leading-relaxed">
              Hello! 👋 I'm <span className="font-semibold text-indigo-500">Yogesh Awasthi</span>, a passionate frontend developer with a love for crafting elegant and responsive web interfaces.
              <br />
              <br />
              I enjoy solving problems with code, designing clean user experiences, and continuously learning new technologies. My current focus is mastering React, Tailwind CSS, and building polished portfolio pieces.
              <br />
              <br />
              When I'm not coding, I enjoy gaming 🎮, music 🎧, and exploring tech content on YouTube!
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={profile}
            alt="Profile"
            className="w-72 h-72 rounded-3xl object-cover border-4 border-indigo-500 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
