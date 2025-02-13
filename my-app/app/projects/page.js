'use client'
import { useState } from 'react';
import Navbar2 from "../components/Navbar2";
import styles from '@/app/css/about.module.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  
    const projects = [
      { name: 'Mal de alturas records', description: 'Mal de Altura Records es un sello discográfico y productora musical independiente especializada específicamente en música urbana. Con sede en Las Palmas de Gran Canaria (Barcelona), ofrece servicios de producción, grabación, mezcla y mastering, además de contribuir en la distribución dentro de plataformas digitales. Su misión es poder impulsar el talento, en principio local, y representar la identidad isleña en la industria musical. También brindan asesoramiento en infraestructuras musicales.', links:'https://mal-de-altura-records.vercel.app/'},
      { name: 'Travel Camp', description: 'El proyecto Travel es una plataforma diseñada para aventureros y excursionistas, ofreciendo mapas offline y soporte para actividades al aire libre como senderismo y escalada. Utiliza tecnología de realidad aumentada para guiar a los usuarios en rutas de montaña, asegurando que no se pierdan incluso sin conexión a internet. Los usuarios pueden programar aventuras con amigos, descubrir nuevas ubicaciones cada mes y formar parte de una comunidad global. Está disponible para iOS y Android.', links:'https://landingtravel.vercel.app/'},
      {name: 'Tifon Solutions', description: 'Tifon Solutions ofrece soluciones tecnológicas personalizadas para empresas, enfocándose en el desarrollo web, optimización de rendimiento, consultoría para la modernización de procesos y digitalización empresarial. Proporcionan también asesoramiento sobre la compra y configuración de dominios y hosting, así como estrategias de gamificación para aumentar la participación de los usuarios. Su misión es ayudar a las empresas a adaptarse a la transformación digital y a maximizar su competitividad.', links: 'https://tifonsolutions.com/'},
      { name: 'TECNOSTORE', description: 'Es una tienda virtual enfocada en la venta de dispositivos electrónicos. El sitio cuenta con un diseño intuitivo y una interfaz responsive que se adapta a diferentes tamaños de pantalla. Cada artículo tiene un enlace individual que permite a los clientes acceder a más detalles. El proyecto está desarrollado con tecnologías web modernas y optimizado para una navegación rápida. Podría expandirse con funcionalidades como filtros de búsqueda, carrito de compras y métodos de pago online para mejorar la experiencia de compra. 🚀', links:'https://tecno-store.netlify.app/'}, 
      { name: 'ITBANK', description: 'Este proyecto, ITBANK-FullStack, es una aplicación web desarrollada con tecnologías Full Stack que simula la gestión de un banco digital. Incluye funcionalidades como creación de usuarios, autenticación, gestión de cuentas y transacciones. Es un proyecto ideal para explorar el desarrollo de aplicaciones financieras, arquitectura Full Stack y seguridad en autenticación y manejo de datos sensibles. También incluya una base de datos para almacenar la información de los usuarios y sus operaciones bancarias.', links:'https://github.com/lautarobruses/ITBANK-FullStack'},
      {name: 'RoustesInfo', description: 'RoutesInfo es un proyecto desarrollado en Python que permite gestionar y visualizar rutas. Utilizando una interfaz gráfica con Tkinter, esta herramienta permite cargar archivos CSV con datos de rutas y obtener información detallada sobre las mismas, como distancias y tiempos estimados. La aplicación facilita la búsqueda y organización de rutas, y su interfaz intuitiva permite a los usuarios interactuar sin necesidad de conocimientos técnicos avanzados. Es ideal para quienes necesitan manejar y consultar rutas de manera rápida y dinámica.', links: 'https://github.com/ivolezcano/RoutesInfo'}, 
      { name: 'Ferreteria parque chas', description: 'es un sitio web dedicado a la venta de herramientas y productos para construcción y remodelación. Ofrece un catálogo de productos con precios y opciones de compra en línea, incluyendo promociones destacadas. Los usuarios pueden explorar diferentes categorías y realizar compras fácilmente desde el sitio. La página también proporciona información de contacto y ubicación para quienes prefieran la compra en tienda. Además, la página principal destaca productos con opción de agregar al carrito para una compra rápida y sencilla.', links:'https://ferreteriaparquechas.com/'},
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