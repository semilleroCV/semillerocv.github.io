"use client";
import { Navbar, Footer } from "@/components";

// Componente opcional para animar burbujas con el gradiente
function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradiente vertical de negro a teal */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-900 to-black" />

      {/* Burbujas flotantes con animaciones */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-600/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-[float_8s_ease-in-out_infinite_2s]" />
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-green-600/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-[float_8s_ease-in-out_infinite_4s]" />
    </div>
  );
}

export default function SessionPage() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <Navbar />
      <Background />

      {/* Contenido central con mensaje estático */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        🚧 Sesión en Construcción 🚧
        </h1>
        <p className="max-w-xl text-xl text-gray-300">
          Todavía no hay contenido para esta sesión. 
          <br />
          ¡Pronto encontrarás más información sobre ella!
        </p>
      </main>

      <Footer />
    </div>
  );
}
