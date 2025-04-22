import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-slate-800 text-white shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold">MyPortfolio</h1>

      {/* Hamburger Menu for Small Screens */}
      <button
        className="block md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>

      {/* Navigation Links */}
      <ul
        className={`flex flex-col md:flex-row gap-4 md:gap-6 text-lg absolute md:static top-16 left-0 w-full md:w-auto bg-slate-800 md:bg-transparent p-6 md:p-0 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden md:flex"
        }`}
      >


<li>
          <a href="/" className="hover:text-indigo-400">
           Home
          </a>
        </li>


        <li>
          <a href="/about" className="hover:text-indigo-400">
            About
          </a>
        </li>
        <li>
          <a href="/projects" className="hover:text-indigo-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-indigo-400">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-indigo-400">
            Contact
          </a>
        </li>

        <li>
          <a href="/signup" className="hover:text-indigo-400">
            Signup
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
