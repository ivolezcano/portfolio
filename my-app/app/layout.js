import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Video } from "./components/Video";
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Iván Lezcano | Portfolio",
  description: "Portfolio de Iván Lezcano, desarrollador Full Stack especializado en React, Next.js y Django. Explora proyectos, habilidades y formas de contacto.",
  keywords: "Iván Lezcano, Full Stack Developer, React, Next.js, Django, Web Development, Portfolio, Frontend Developer, Backend Developer",
  author: "Iván Lezcano",
  robots: "index, follow", 
  openGraph: {
    title: "Iván Lezcano | Portfolio de Full Stack Developer",
    description: "Descubrí mi portfolio de desarrollador Full Stack con proyectos, habilidades y experiencia en React, Next.js y Django.",
    url: "https://ivanlezcano.vercel.app/",
    image: "/logo.png", 
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tuTwitter",
    title: "Iván Lezcano | Full Stack Developer",
    description: "Portfolio de Iván Lezcano, desarrollador Full Stack especializado en React, Next.js y Django.",
    image: "/logo.png", // Añadir una imagen para Twitter Card
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Video>{children}</Video> {/* Envuelve children dentro del video */}
      </body>
      <GoogleAnalytics gaId="G-T5QPMZP285" />
    </html>
  );
}
