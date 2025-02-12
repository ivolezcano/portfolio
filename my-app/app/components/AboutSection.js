import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from '@/app/css/about.module.css'

const AboutSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);

  return (
    <div 
      ref={ref} 
      className="h-screen w-screen flex justify-center items-center text-white p-6 bg-transparent"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl text-center space-y-8"
      >
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`text-3xl md:text-5xl font-extrabold ${styles.goblinoneregular} tracking-wider drop-shadow-[0_4px_10px_rgba(255,99,71,0.8)]`}
        >
          My Journey in Programming
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-1xl md:text-2xl text-gray-200 leading-relaxed drop-shadow-lg font-light bg-black bg-opacity-15 mr-0 md:mr-48 backdrop-blur-md p-4 rounded-lg"
        >
          Three years ago, my curiosity about <span className="font-bold text-white">cybersecurity</span> led me to research on my own. 
          I discovered <span className="font-bold text-orange-400">scripts and programming languages</span>, which ignited my interest in 
          understanding how web pages work.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="text-1xl md:text-2xl text-gray-200 leading-relaxed drop-shadow-lg font-light bg-black bg-opacity-15 ml-0 md:ml-48 backdrop-blur-md p-4 rounded-lg"
        >
          Initially, I wanted to study cybersecurity, but I found <span className="font-bold text-orange-400">web development</span> unexpectedly 
          fascinating. I started developing software for my workplace and have since continued exploring both web development and cybersecurity.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutSection;