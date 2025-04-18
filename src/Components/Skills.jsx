import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, MonitorSmartphone, PenTool } from "lucide-react";

const skills = [
  { name: "HTML", icon: <Code /> },
  { name: "CSS", icon: <PenTool /> },
  { name: "JavaScript", icon: <MonitorSmartphone /> },
  { name: "React", icon: <Cpu /> },
  { name: "Tailwind", icon: <Code /> },
  { name: "Git & GitHub", icon: <MonitorSmartphone /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 bg-white dark:bg-slate-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 sm:p-6 bg-slate-100 dark:bg-slate-800 rounded-xl shadow-md hover:scale-105 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-2 text-indigo-500">{skill.icon}</div>
              <p className="text-sm sm:text-base font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
