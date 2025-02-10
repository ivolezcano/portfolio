'use client';
import {FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Navbar() {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-out" });
      }, []);

    return (
        <nav className="fixed left-0 top-0 h-screen w-40 bg-gradient-to-b from-[rgba(255, 255, 255, 0.5)] to-[rgba(235, 26, 26, 0.7)] flex flex-col items-center justify-between py-6 shadow-lg" data-aos="fade-up">
        {/* Logo */}
        <div className="w-21">
          <a href="#inicio"><img src="/logo.png" alt="Logo" className="w-full" /></a>
        </div>
  
        {/* Menú */}
        <ul className="flex flex-col gap-10 text-white text-lg font-semibold tracking-wide">
            <li className="rotate-[-23deg] hover:text-[#FF6347] hover:scale-120 hover:translate-x-2 transition-all duration-200 ease-in-out animate-pulse">
                <a href="#about">About Me</a>
            </li>
            <li className="rotate-[-23deg] hover:text-[#FF6347] hover:scale-120 hover:translate-x-2 transition-all duration-350 ease-in-out animate-pulse">
                <a href="#projects">Projects</a>
            </li>
            <li className="rotate-[-23deg] hover:text-[#FF6347] hover:scale-120 hover:translate-x-2 transition-all duration-350 ease-in-out animate-pulse">
                <a href="#certificates">Certificates</a>
            </li>
            <li className="rotate-[-23deg] hover:text-[#FF6347] hover:scale-120 hover:translate-x-2 transition-all duration-400 ease-in-out animate-pulse">
                <a href="#contact">Contact</a>
            </li>
        </ul>
  
        {/* Redes sociales */}
        <div className="flex flex-col gap-4">
          <a href="https://www.linkedin.com/in/ivanlezcano/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40}/>
          </a>
          <a href="https://github.com/ivolezcano" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40}/>
          </a>
          <p className="text-s text-white">2025 ©</p>
        </div>
      </nav>
    );
  }