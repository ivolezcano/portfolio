'use client';
import {FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import styles from '@/app/css/navbar.module.css'
import { BiLogoGmail } from "react-icons/bi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import toggle icons

export default function Navbar2() {
    const [isOpen, setIsOpen] = useState(false); // State for toggle menu

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-out" });
      }, []);

    return (
        <nav className="fixed top-0 left-0 w-full md:w-40 z-40 h-auto md:h-screen flex flex-row-reverse md:flex-col items-center justify-between px-4 py-3 md:py-6 shadow-lg backdrop-blur-md md:bg-transparent md:bg-opacity-10 md:backdrop-blur-none" data-aos="fade-up">
            {/* Toggle Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                {isOpen ? <FaTimes className='text-white'/> : <FaBars className='text-white'/>}
            </button>

        {/* Logo */}
        <div className={`flex flex-col items-center w-full ${isOpen ? 'gap-6' : 'gap-16'} md:flex-col`}>
      
          {/* Logo */}
          <div className="w-16 md:w-40">
            <a href="/"><img src="/logo.png" alt="Logo" className="w-full" /></a>
          </div>

          {/* Menú en horizontal cuando isOpen */}
          <ul className={`flex flex-row md:flex md:flex-col md:gap-10 text-white text-sm md:text-lg font-semibold tracking-wide ${isOpen ? 'block' : 'hidden'}`}>
              <li className="rotate-[-23deg] hover:text-[#FF6347] hover:scale-110 transition-all animate-pulse duration-200 ease-in-out">
                  <a href="about">About Me</a>
              </li>
              <li className="rotate-[-23deg] hover:text-[#FF6347] hover:scale-110 transition-all animate-pulse duration-200 ease-in-out">
                  <a href="projects">Projects</a>
              </li>
              <li className="rotate-[-23deg] hover:text-[#FF6347] hover:scale-110 transition-all animate-pulse duration-200 ease-in-out">
                  <a href="certificates">Certificates</a>
              </li>
              <li className="rotate-[-23deg] hover:text-[#FF6347] hover:scale-110 transition-all animate-pulse duration-200 ease-in-out">
                  <a href="contact">Contact</a>
              </li>
          </ul>
        </div>
        {/* Redes sociales */}
        <div className={`grid grid-cols-2 gap-4 sm:gap-2 hidden md:grid`}>

          <a href="https://www.linkedin.com/in/ivanlezcano/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} className='text-white'/>
          </a>
          <a href="https://github.com/ivolezcano" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} className='text-white'/>
          </a>
          <a href="https://wa.me/+5491131508014" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={40} className='text-white'/>
          </a>
          <a href="mailto:lezcamati@gmail.com?subject=%E2%9C%85%20Necesitamos%20un%20desarrollador%20para%20nuestro%20proyecto" target="_blank" rel="noopener noreferrer">
            <BiLogoGmail size={40} className='text-white'/>
          </a>
        </div>
        <p className={`text-s text-white hidden md:block`}>2025 ©</p>

      </nav>
    );
  }
