import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import HeroSection from "./Components/HeroSection";

import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Homepage from "./Components/Home.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Home } from "lucide-react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
