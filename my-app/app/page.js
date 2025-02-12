'use client'
import Inicio from "./components/Inicio";
import { useState } from "react";



export default function Home() {
  const [activeComponent, setActiveComponent] = useState('inicio');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'about':
        return <AboutMe />;
      case 'inicio':
      default:
        return <Inicio />;
    }
  };

  return (
    <>
      {renderComponent()}
    </>
  );
}
