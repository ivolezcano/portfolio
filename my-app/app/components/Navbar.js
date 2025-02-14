'use client';
import {FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { useEffect } from "react";
import AOS from "aos";
import Link from 'next/link';
import "aos/dist/aos.css";


export default function Navbar() {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-out" });
      }, []);

    return (
        <nav className="fixed left-0 top-0 h-screen w-40 bg-gradient-to-b from-[rgba(255, 255, 255, 0.5)] to-[rgba(235, 26, 26, 0.7)] flex flex-col items-center justify-between py-6 shadow-lg" data-aos="fade-up">
        {/* Logo */}
        <div className="w-21">
          <Link href="/"><img src="/logo.png" alt="Portfolio de Iván Lezcano, desarrollador Full Stack especializado en React y Django." className="w-full" /></Link>
        </div>
  
        {/* Menú */}
        <ul className="flex flex-col gap-10 text-white text-lg font-semibold tracking-wide">
            <li className="rotate-[-23deg] hover:text-[#FF6347] hover:scale-120 hover:translate-x-2 transition-all duration-200 ease-in-out animate-pulse">
                <Link href="about">About Me</Link>
            </li>
            <li className="rotate-[-23deg] hover:text-[#FF6347] hover:scale-120 hover:translate-x-2 transition-all duration-350 ease-in-out animate-pulse">
                <Link href="projects">Projects</Link>
            </li>
            <li className="rotate-[-23deg] hover:text-[#FF6347] hover:scale-120 hover:translate-x-2 transition-all duration-350 ease-in-out animate-pulse">
                <Link href="certificates">Certificates</Link>
            </li>
            <li className="rotate-[-23deg] hover:text-[#FF6347] hover:scale-120 hover:translate-x-2 transition-all duration-400 ease-in-out animate-pulse">
                <Link href="contact">Contact</Link>
            </li>
        </ul>
  
        {/* Redes sociales */}
        <div className="grid grid-cols-2 gap-4 sm:gap-2">
          <Link href="https://www.linkedin.com/in/ivanlezcano/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} className='text-white'/>
          </Link>
          <Link href="https://github.com/ivolezcano" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} className='text-white'/>
          </Link>
          <Link href="https://wa.me/+5491131508014" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={40} className='text-white'/>
          </Link>
          <Link href="mailto:lezcamati@gmail.com?subject=%E2%9C%85%20Necesitamos%20un%20desarrollador%20para%20nuestro%20proyecto" target="_blank" rel="noopener noreferrer">
            <BiLogoGmail size={40} className='text-white'/>
          </Link>
        </div>
        <p className="text-s text-white">2025 ©</p>
      </nav>
    );
  }