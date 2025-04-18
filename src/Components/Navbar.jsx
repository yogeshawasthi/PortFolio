import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-slate-800 text-white shadow-md">
      
      <h1 className="text-2xl font-bold">MyPortfolio</h1>
      <ul className="flex gap-6 text-lg">
        <li><a href="#about" className="hover:text-indigo-400">About</a></li>
        <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
        <li><a href="#skills" className="hover:text-indigo-400">Skills</a></li>
        <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
