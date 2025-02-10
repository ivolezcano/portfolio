export function Video({ children }) {
    return (
      <div className="relative w-full h-screen">
        {/* Video de fondo */}
        <video
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/backgroundNubes.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
  
        {/* Contenido de la página */}
        <div className="relative z-10 w-full h-full">{children}</div>
      </div>
    );
  }