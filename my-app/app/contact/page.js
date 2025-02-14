'use client'
import { useState } from "react";
import { default as Navbar2 } from "../components/Navbar2";
import emailjs from '@emailjs/browser';
import styles from '@/app/css/about.module.css'
import {FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        companie: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Usando EmailJS para enviar el formulario
        emailjs
            .sendForm('service_szjq84m', 'template_75remhi', e.target, 'E173KgGpMNyK2NCwG')
            .then((result) => {
                setStatus("Message sent successfully!");
            })
            .catch((error) => {
                setStatus("An error occurred. Please try again.");
            });

        // Limpiar los campos del formulario
        setFormData({
            name: "",
            email: "",
            message: "",
            companie: "",
        });
    };

    return (
        <>
            <Navbar2 />
            <div className="relative flex flex-col justify-center items-center p-10 pt-28 overflow-hidden text-white">
                <h2 className={`text-3xl md:text-5xl font-extrabold ${styles.goblinoneregular} text-center tracking-wider drop-shadow-[0_4px_10px_rgba(255,99,71,0.8)] mb-12`}>Contact Me</h2>

                {/* Contenedor con grid para las dos columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
                    <div className="flex flex-col justify-center items-start">
                        <p className="text-lg md:text-xl">Feel free to reach me out</p>
                        <h3 className="text-2xl md:text-4xl font-bold mb-4">Let’s Work Together !</h3>
                        <div className="flex space-x-5 sm:gap-2">
                                  <Link href="https://www.linkedin.com/in/ivanlezcano/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={40} className='text-blue-600 bg-white'/>
                                  </Link>
                                  <Link href="https://github.com/ivolezcano" target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={40} className='bg-black rounded-full text-white'/>
                                  </Link>
                                  <Link href="https://wa.me/+5491131508014" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp size={40} className='rounded-full bg-white text-green-700'/>
                                  </Link>
                                  <Link href="mailto:lezcamati@gmail.com?subject=%E2%9C%85%20Necesitamos%20un%20desarrollador%20para%20nuestro%20proyecto" target="_blank" rel="noopener noreferrer">
                                    <BiLogoGmail size={40} className='bg-white rounded text-red-500'/>
                                  </Link>
                                </div>
                    </div>

                    {/* Formulario */}
                    <div>
                    <form onSubmit={handleSubmit} className="w-full max-w-lg">
                        <div className="mb-6">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="placeholder-white-500 placeholder-opacity-70 w-full p-3 text-white-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-300 cursor-pointer"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                id="companie"
                                name="companie"
                                value={formData.companie}
                                onChange={handleChange}
                                required
                                className="placeholder-white-500 placeholder-opacity-70 w-full p-3 text-white-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-300 cursor-pointer"
                                placeholder="Company"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="placeholder-white-500 placeholder-opacity-70 w-full p-3 text-white-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-300 cursor-pointer"
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-6">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="placeholder-white-500 placeholder-opacity-70 w-full p-3 text-white-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-300 cursor-pointer"
                                placeholder="Message"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#FF6347] to-black text-white py-3 rounded-md shadow-md transform hover:scale-105 hover:shadow-lg focus:outline-none transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                        {/* Mensaje de éxito o error */}
                        {status && (
                            <p className={`mt-4 text-xl ${status === "Message sent successfully!" ? 'text-green-500' : 'text-red-500'} font-bold`}>
                                {status}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;