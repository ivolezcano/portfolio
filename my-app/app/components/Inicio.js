'use client'
import React, { useState, useEffect } from 'react';
import { GiBrain } from "react-icons/gi";

export default function Inicio () {
    const words = ['FULLSTACKDEV', 'FRONTEND', 'BACKEND']

  // Estado para controlar la palabra que se muestra
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambiar la palabra cada 2 segundos
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length; // Ciclo a través de las palabras
        return words[nextIndex];
      });
    }, 2000); // Intervalo de 2 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

    return (
        <div style={{ paddingLeft: '10rem' }}>
            <div className="flex justify-center items-center h-screen gap-2">
                <h1 className="text-white">IVANLEZCANO</h1>
                <GiBrain className="icon-gradient" size={40}/>
                <h2 className='text-white'>{currentWord}</h2>
            </div>
        </div>
    )
}