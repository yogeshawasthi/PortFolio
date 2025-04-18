import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-tr from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <motion.form
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Submitted! You can connect backend later.");
          }}
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              id="name"
              required
              className="peer w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-transparent border border-slate-600 focus:outline-none focus:border-indigo-400 transition"
              placeholder="Name"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-3 text-sm text-slate-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-400 transition-all"
            >
              Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              required
              className="peer w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-transparent border border-slate-600 focus:outline-none focus:border-indigo-400 transition"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-sm text-slate-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-400 transition-all"
            >
              Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              id="message"
              rows="5"
              required
              className="peer w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-transparent border border-slate-600 focus:outline-none focus:border-indigo-400 transition"
              placeholder="Your message"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-3 text-sm text-slate-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-400 transition-all"
            >
              Message
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded-full text-white text-lg font-medium transition"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
