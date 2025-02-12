"use client";
import { useEffect, useState } from "react";
import Navbar2 from "@/app/components/Navbar2";
import styles from "@/app/css/about.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaJs, FaPython, FaHtml5, FaCss3, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import AboutSection from "../components/AboutSection";

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar2 />
      <div className="relative flex flex-col justify-center items-center h-screen p-10 overflow-hidden">
        {/* Fondo de nubes con paralaje */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/clouds.png')",
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: "transform 0.1s linear",
          }}
        ></div>

        {/* Sección de presentación */}
        <div className="flex md:flex-row relative z-10">
          <div
            className={` ${styles.goblinoneregular} flex flex-col text-white font-bold text-5xl leading-none text-center bg-gradient-to-b from-white to-[#FF6347]  gap-5 md:gap-3 text-transparent bg-clip-text`}
          >
            <span>I</span>
            <span>V</span>
            <span>A</span>
            <span>N</span>
          </div>

          <div
            className={`flex flex-col text-white text-2xl font-semibold ml-4 gap-6 md:gap-8 ${styles.goblinoneregular2}`}
          >
            <p>‘m 22 years old</p>
            <p>ery creative</p>
            <p>ttentive developer</p>
            <p>imble</p>
          </div>
        </div>

        {/* Indicador de scroll animado */}
        <div className="absolute bottom-10 flex flex-col items-center z-10 animate-bounce">
          <p className="text-white text-sm">Scroll down</p>
          <div className="w-4 h-6 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-white rounded-full animate-scroll" />
          </div>
        </div>

        {/* Carrusel de tecnologías */}
        <div className="w-full max-w-md mt-32 relative z-10 bg-white bg-opacity-10 backdrop-blur-md rounded-lg">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            loop
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            className="flex justify-center items-center"
          >
            <SwiperSlide className="flex justify-center">
              <FaJs size={60} className="text-yellow-400" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <FaPython size={60} className="text-blue-400" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <FaHtml5 size={60} className="text-orange-500" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <FaCss3 size={60} className="text-blue-500" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <FaReact size={60} className="text-cyan-400" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <RiNextjsFill size={60} />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <FaBootstrap size={60} className="text-purple-500"/>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <DiDjango size={60} className="text-green-500"/>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <SiTailwindcss size={60} className="text-blue-500"/>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <SiMysql size={60} className="text-blue-500"/>
            </SwiperSlide>
          </Swiper>
        </div>
        <p className="text-left text-white mt-3 font-semibold text-1xl italic">Technologies</p>
      </div>
      <AboutSection/>
    </>
  );
}
