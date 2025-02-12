'use client'
import { useState } from 'react';
import Navbar2 from "../components/Navbar2";
import styles from '@/app/css/about.module.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false); // Estado para controlar el giro

  const projects = [
    { name: 'ITBANK', description: 'Descripción detallada del Proyecto 1. Aquí se explica todo lo que se hizo para lograr el objetivo.', links:''},
    { name: 'Ferreteria parque chas', description: 'Descripción detallada del Proyecto 2. Información adicional sobre las tecnologías utilizadas.', links:''},
    { name: 'Mal de alturas records', description: 'Descripción detallada del Proyecto 3. Explicación sobre el impacto y resultados.', links:''},
    { name: 'Travel Camp', description: 'Descripción detallada del Proyecto 4. Explicación sobre el impacto y resultados.', links:'https://landingtravel.vercel.app/'},
  ];

  const handleProjectClick = (index) => {
    setIsFlipped(false); // Resetea el giro al hacer clic en un proyecto
    setTimeout(() => {
      setSelectedProject(index);
      setIsFlipped(true); // Activa el giro después de que se resetea
    }, 300); // Este timeout es para que se vea el giro correctamente
  };

  return (
    <>
      <Navbar2 />
      <div className="relative flex flex-col justify-center items-center h-screen p-10 overflow-hidden">
            <h2 className={`text-3xl md:text-5xl font-extrabold ${styles.goblinoneregular} tracking-wider drop-shadow-[0_4px_10px_rgba(255,99,71,0.8)] mb-24`}>PROJECTS</h2>

            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                {/* Menú de navegación */}
                <div className="mr-10 mb-8 md:mb-0">
                    <h3 className="font-semibold text-xl"></h3>
                    <ul>
                        {projects.map((project, index) => (
                        <li
                            key={index}
                            onClick={() => handleProjectClick(index)}
                            className="cursor-pointer text-blue-500 hover:text-blue-700 mb-2"
                        >
                            {project.name}
                        </li>
                        ))}
                    </ul>
                </div>

                {/* Tarjeta de crédito */}
                <div className=" relative w-[23rem] h-[200px] md:w-[60rem] md:h-[30rem] mb-4 md:mb-0">
                    <div className={`relative w-full h-full transition-all duration-900 ease-in-out transform ${isFlipped ? 'rotate-y-180' : ''}`}>
                        {/* Frontal de la tarjeta */}
                        <img src='credit.png' className='w-[23rem] h-[200px] md:w-[60rem] md:h-[30rem] rounded-3xl'/>

                        {/* Reverso de la tarjeta */}
                        <div className={`absolute top-0 left-0 w-full h-full bg-gray-800 text-white rounded-lg p-6 flex flex-col justify-between items-center transform rotate-y-180 ${isFlipped ? 'opacity-100' : 'opacity-0'} transition-opacity duration-900`}>  
                            <h3 className="text-xl font-semibold" >{projects[selectedProject]?.name}</h3>                              
                            <div className="w-full h-1 bg-white mt-2 mb-4"></div> {/* Banda magnética */}
                            <p>{projects[selectedProject]?.description}</p>
                            <a href={projects[selectedProject]?.links}>visit here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Projects;