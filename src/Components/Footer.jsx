import React from "react";
import { Github, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white py-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 px-4 sm:px-6">
                {/* Optional Footer Text */}
                <p className="text-sm text-gray-400 text-center">
                    © {new Date().getFullYear()} Yogesh Awasthi. All rights reserved.
                </p>
                <div className="flex gap-4 sm:gap-6 justify-center">
                    <a
                        href="https://github.com/yogeshawasthi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition"
                    >
                        <Github size={20} className="sm:size-22" />
                    </a>
                    <a
                        href="https://linkedin.com/in/yogesh-awasthi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition"
                    >
                        <Linkedin size={20} className="sm:size-22" />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=100079681771134"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition"
                    >
                        <Facebook size={20} className="sm:size-22" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;