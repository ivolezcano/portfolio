'use client'
import { useState } from 'react';
import Navbar2 from "../components/Navbar2";
import styles from '@/app/css/about.module.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const projects = [
    { 
        name: 'Mal de alturas records', 
        description: 'Mal de Altura Records is an independent record label and music production company specializing in urban music. Based in Las Palmas de Gran Canaria (Barcelona), it offers production, recording, mixing, and mastering services, in addition to contributing to digital platform distribution. Its mission is to promote local talent and represent the island identity in the music industry. They also provide advice on music infrastructure.', 
        links:'https://mal-de-altura-records.vercel.app/'
    },
    { 
        name: 'Travel Camp', 
        description: 'The Travel project is a platform designed for adventurers and hikers, offering offline maps and support for outdoor activities like hiking and climbing. It uses augmented reality technology to guide users on mountain routes, ensuring they don’t get lost even without an internet connection. Users can schedule adventures with friends, discover new locations each month, and be part of a global community. Available for iOS and Android.', 
        links:'https://landingtravel.vercel.app/'
    },
    { 
        name: 'Tifon Solutions', 
        description: 'Tifon Solutions offers customized technology solutions for businesses, focusing on web development, performance optimization, process modernization consultancy, and business digitalization. They also provide advice on domain and hosting purchases and configurations, as well as gamification strategies to increase user engagement. Their mission is to help companies adapt to digital transformation and maximize their competitiveness.', 
        links: 'https://tifonsolutions.com/'
    },
    { 
        name: 'TECNO STORE', 
        description: 'It’s an online store focused on selling electronic devices. The site features an intuitive design and a responsive interface that adapts to different screen sizes. Each item has a unique link that allows customers to access more details. The project is developed with modern web technologies and optimized for fast navigation. It could be expanded with features such as search filters, a shopping cart, and online payment methods to enhance the shopping experience. 🚀', 
        links:'https://tecno-store.netlify.app/' 
    },
    { 
        name: 'ITBANK', 
        description: 'This project, ITBANK-FullStack, is a web application developed with Full Stack technologies that simulates the management of a digital bank. It includes features like user creation, authentication, account management, and transactions. It’s an ideal project for exploring the development of financial applications, Full Stack architecture, and security in authentication and handling sensitive data. It also includes a database to store user information and their banking operations.', 
        links:'https://github.com/lautarobruses/ITBANK-FullStack'
    },
    { 
        name: 'RoustesInfo', 
        description: 'RoutesInfo is a Python project that allows users to manage and visualize routes. Using a graphical interface with Tkinter, this tool enables users to load CSV files with route data and obtain detailed information about them, such as distances and estimated times. The app makes it easy to search and organize routes, and its intuitive interface allows users to interact without advanced technical knowledge. It’s ideal for those who need to manage and query routes quickly and dynamically.', 
        links: 'https://github.com/ivolezcano/RoutesInfo'
    },
    { 
        name: 'Ferreteria parque chas', 
        description: 'It is a website dedicated to the sale of tools and products for construction and remodeling. It offers a product catalog with prices and online purchase options, including highlighted promotions. Users can explore different categories and make purchases easily from the site. The page also provides contact information and location for those who prefer in-store shopping. Additionally, the homepage highlights products with the option to add them to the cart for quick and easy checkout.', 
        links:'https://ferreteriaparquechas.com/'
    },
];

  const handleProjectClick = (index) => {
    setIsFlipped(false);
    setTimeout(() => {
      setSelectedProject(index);
      setIsFlipped(true);
    }, 300);
  };

  return (
    <>
      <Navbar2 />
      <div className="relative flex flex-col justify-center items-center min-h-screen p-10">
        <h2 className={`text-3xl md:text-5xl font-extrabold ${styles.goblinoneregular} tracking-wider drop-shadow-[0_4px_10px_rgba(255,99,71,0.8)] mb-12`}>PROJECTS</h2>

        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          {/* Tarjeta del proyecto */}
          <div className="relative w-full max-w-[23rem] md:max-w-[60rem] min-h-[200px] mb-4 md:mb-0">
            <div className={`relative w-full min-h-[200px] transition-all duration-700 ease-in-out transform ${isFlipped ? 'rotate-y-180' : ''}`}>
              
              {/* Frente de la tarjeta */}
              <img src='credit.png' className='w-[23rem] h-[150px] md:w-[60rem] md:h-auto rounded-3xl' />

              {/* Reverso de la tarjeta */}
              <div className={`absolute top-0 left-0 w-full h-auto bg-gray-800 text-white rounded-lg p-6 flex flex-col items-center gap-4 transform rotate-y-180 ${isFlipped ? 'opacity-100' : 'opacity-0'} transition-opacity duration-900`}>
                <h3 className="text-2xl md:text-6xl text-center font-semibold">{projects[selectedProject]?.name}</h3>                              
                <div className="w-full h-1 bg-white mt-2"></div> {/* Banda magnética */}
                <p className="text-lg md:text-2xl text-gray-300 font-medium leading-relaxed text-center md:text-left mt-4 p-4 rounded-xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-lg backdrop-blur-sm">
                  {projects[selectedProject]?.description}
                </p>
                <a 
                  href={projects[selectedProject]?.links} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-16 px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 mt-15"
                >
                  Visit Here
                </a>
              </div>
            </div>
          </div>

          {/* Menú de navegación */}
          <div className="mr-10 mb-8 md:mb-0 p-6 rounded-2xl shadow-2xl">
            <ul className="mt-4 grid grid-cols-2 md:grid-cols-1 gap-3 mt-4 space-y-3">
              {projects.map((project, index) => (
                <li
                  key={index}
                  onClick={() => handleProjectClick(index)}
                  className="cursor-pointer text-white font-semibold text-center align-items-center text-xs md:text-lg tracking-wide drop-shadow-lg hover:text-blue-200 hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-full shadow-md hover:shadow-xl"
                >
                  {project.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;