'use client'
import { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import styles from '@/app/css/about.module.css'
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import { LuExpand } from "react-icons/lu";

const certificates = [
    {
        id: 1,
        title: "UTN",
        description: "Fundamentals of Python up to OOP, data manipulation, and web development with Django. I also gained experience in task automation and best coding practices.",
        image: "/UTN.jpg"
    },
    {
        id: 2,
        title: "ITBA",
        description: "In the FullStack ITBA course, sponsored by Banco Santander, I received comprehensive training in web development with a hands-on approach. I learned to work in teams using agile methodologies and modern frameworks. On the back-end, I developed flow diagrams to manage SQL databases and make API requests. Additionally, I deepened my knowledge of version control with Git and application deployment.",
        image: "/ITBA.jpg"
    },
    {
        id: 3,
        title: "Codo A Codo 4.0",
        description: "I reinforced my Full Stack development knowledge, complementing what I had previously learned. I focused on improving my front-end skills using tools like NEXTjs, and on the back-end, I optimized my knowledge in API creation and SQL database management. I also perfected my ability to manage team projects.",
        image: "/Codoacodo.jpg"
    },
];

const Certificate = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fullscreen, setFullscreen] = useState(null);
    const [showExpand, setShowExpand] = useState(true); // Estado para mostrar el ícono de expansión

    const nextCertificate = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    };

    const prevCertificate = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
    };

    const handlers = useSwipeable({
        onSwipedLeft: nextCertificate,
        onSwipedRight: prevCertificate,
    });

    useEffect(() => {
        // Desaparece el ícono de expansión después de que se muestra la sección de certificados
        const timer = setTimeout(() => {
            setShowExpand(false);
        }, 1000); // El ícono desaparece después de 1 segundo

        return () => clearTimeout(timer); // Limpia el temporizador cuando se cambia de certificado
    }, [currentIndex]);

    return (
        <>
            <Navbar2 />
            <div {...handlers} className="relative flex flex-col justify-center items-center h-screen p-10 overflow-hidden text-white">
                <h2 className={`text-3xl md:text-5xl font-extrabold ${styles.goblinoneregular} tracking-wider drop-shadow-[0_4px_10px_rgba(255,99,71,0.8)] mb-12`}>CERTIFICATES</h2>
                <div className="flex items-center gap-4">
                    <button onClick={prevCertificate} className="text-2xl hidden sm:block">&#9665;</button>
                    <motion.div 
                        key={currentIndex} 
                        initial={{ opacity: 0, x: 50 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0, x: -50 }} 
                        transition={{ duration: 0.3 }}
                        className="relative flex flex-col sm:flex-row items-center bg-white p-6 text-black rounded-lg shadow-lg"
                    >
                        <div className="relative">
                            {/* Icono de expansión */}
                            {showExpand && (
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-black rounded-lg"
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <span className="text-white text-4xl font-bold"><LuExpand /></span>
                                </motion.div>
                            )}

                            <img 
                                src={certificates[currentIndex].image} 
                                alt={certificates[currentIndex].title} 
                                className="w-60 h-40 object-cover cursor-pointer" 
                                onClick={() => setFullscreen(certificates[currentIndex].image)}
                            />
                        </div>
                        <div className="ml-4 text-center sm:text-left max-w-xs sm:max-w-md">
                            <h2 className="text-lg font-bold">{certificates[currentIndex].title}</h2>
                            <p className="break-words whitespace-normal">{certificates[currentIndex].description}</p>
                        </div>
                    </motion.div>
                    <button onClick={nextCertificate} className="text-2xl hidden sm:block">&#9655;</button>
                </div>
                <motion.p 
                    className="sm:hidden mt-4 text-gray-300" 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    Swipe to change certificate
                </motion.p>
            </div>
            
            {fullscreen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
                    onClick={() => setFullscreen(null)}
                >
                    <img src={fullscreen} alt="Certificado" className="max-w-full max-h-full" />
                </div>
            )}
        </>
    );
};

export default Certificate;
