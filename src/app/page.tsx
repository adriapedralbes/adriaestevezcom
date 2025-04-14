"use client";

import Image from "next/image";
import { useState, FormEvent, useEffect } from "react"; // Añadido useEffect
import { supabase } from "@/lib/supabaseClient";
import Confetti from 'react-confetti'; // Importar Confetti

// Hook de ayuda para obtener las dimensiones de la ventana de forma segura en el cliente
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Establecer tamaño inicialmente al montar en cliente
    handleResize();
    window.addEventListener("resize", handleResize);
    // Limpiar listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Array de dependencias vacío asegura que solo se ejecute al montar y desmontar

  return windowSize;
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false); // Estado para confetti
  const { width, height } = useWindowSize(); // Obtener dimensiones de la ventana

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");
    setShowConfetti(false); // Reiniciar confetti

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Por favor, introduce un email válido.");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email: email }]);

      if (error) {
        if (error.code === '23505') {
          setErrorMessage("Este email ya está registrado.");
        } else {
          throw error;
        }
      } else {
        setSuccessMessage("¡Gracias por suscribirte! Revisa tu email.");
        setEmail("");
        setShowConfetti(true); // Lanzar confetti al éxito
        // Opcional: Ocultar confetti después de un tiempo
        setTimeout(() => setShowConfetti(false), 5000); // Ocultar tras 5 segundos
      }
    } catch (error) {
      console.error("Error al enviar el email:", error);
      setErrorMessage("Error al registrar el email. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative flex flex-col items-center justify-center py-16 px-4 overflow-x-hidden">
      {/* Renderizar Confetti condicionalmente */}
      {showConfetti && width > 0 && height > 0 && (
        <Confetti
          width={width}
          height={height}
          recycle={false} // Fijar a false para parar tras la animación
          numberOfPieces={200} // Ajustar número de piezas
          gravity={0.1} // Ajustar gravedad
          initialVelocityY={15}
          tweenDuration={5000} // Coincidir con la duración del timeout
          colors={['#C9A880', '#A78355', '#FFFFFF', '#F0F0F0']} // Colores dorado y blanco
          style={{ zIndex: 1000 }} // Asegurar que está por encima
          onConfettiComplete={() => setShowConfetti(false)} // Ocultar al terminar la animación
        />
      )}

      {/* Gradiente de fondo */}
      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-gradient-radial from-[#C9A880]/20 via-transparent to-transparent blur-[120px]" />
      </div>
      <main className="relative z-10 w-full max-w-lg flex flex-col items-center">
        {/* Imagen de perfil */}
        <div className="mb-8 relative group">
          <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:shadow-[0_0_32px_4px_#C9A88099] transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #C9A880 0%, #A78355 100%)",
              padding: 4,
              zIndex: 1,
            }}
          />
          <Image
            src="/adria.jpg"
            alt="Adrià Estévez"
            width={160}
            height={160}
            className="rounded-full border-4 border-black shadow-lg relative z-10"
            priority
          />
        </div>
        {/* Nombre */}
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#C9A880] mb-2 text-center tracking-tight drop-shadow-[0_2px_8px_rgba(201,168,128,0.15)]">
          Adrià Estévez
        </h1>
        {/* Título */}
        <h2 className="text-lg md:text-xl font-sans text-[#C9A880] mb-5 text-center font-medium tracking-wide">
          Cofundador, Mentor & Arquitecto IA
        </h2>
        {/* Descripción */}
        <p className="font-sans text-lg md:text-xl text-white/90 mb-10 text-center max-w-md leading-relaxed">
          Ahorro +$10.000/mes a empresas con automatizaciones, agentes y sistemas IA.
        </p>
        {/* Bloques de contenido */}
        <div className="w-full space-y-6 mb-7">
          {/* Card WhatsApp Comunidad */}
          <a
            href="https://chat.whatsapp.com/LyLxC5zNXeaFPki6XglJBb"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-black border-2 rounded-2xl p-5 transition-all duration-300 group hover:shadow-[0_0_24px_0_#25D36655] hover:border-[#25D366] border-[#C9A880]/70"
            style={{
              borderImage: "linear-gradient(90deg, #25D366 0%, #C9A880 100%) 1",
              textDecoration: "none"
            }}
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-sans font-bold text-[#25D366] uppercase tracking-wider text-base">// WHATSAPP_COMUNIDAD</h3>
              <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
                <span className="mr-1">¡URGENTE!</span>
                <span className="text-xs">267/500</span>
              </div>
            </div>
            <p className="font-sans text-white/90 text-base mb-2">Únete a mi comunidad de WhatsApp para recibir recursos exclusivos, novedades y conectar con otros fundadores. <span className="text-red-400 font-medium">El grupo se cierra al llegar a 500 miembros.</span></p>
            <span className="inline-block mt-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#25D366] to-[#C9A880] text-black font-semibold shadow transition-all duration-200 hover:brightness-110">
              Unirme al grupo
            </span>
          </a>
          {/* Commented out cards as requested
          <div
            className="bg-black border-2 rounded-2xl p-5 transition-all duration-300 group hover:shadow-[0_0_24px_0_#C9A88055] hover:border-[#C9A880] border-[#C9A880]/70"
            style={{
              borderImage: "linear-gradient(90deg, #C9A880 0%, #A78355 100%) 1",
            }}
          >
            <h3 className="font-sans font-bold text-[#C9A880] mb-1 uppercase tracking-wider text-base">// JOIN_ZECONOMY</h3>
            <p className="font-sans text-white/90 text-base">Comunidad gratuita de AI Builders</p>
          </div>
          <div
            className="bg-black border-2 rounded-2xl p-5 transition-all duration-300 group hover:shadow-[0_0_24px_0_#C9A88055] hover:border-[#C9A880] border-[#C9A880]/70"
            style={{
              borderImage: "linear-gradient(90deg, #C9A880 0%, #A78355 100%) 1",
            }}
          >
            <h3 className="font-sans font-bold text-[#C9A880] mb-1 uppercase tracking-wider text-base">// NEED_HELP?</h3>
            <p className="font-sans text-white/90 text-base">Guía de IA para programadores</p>
            <p className="font-sans text-white/90 text-base">Sesión de desbloqueo IA (30 min)</p>
          </div>
          <div
            className="bg-black border-2 rounded-2xl p-5 transition-all duration-300 group hover:shadow-[0_0_24px_0_#C9A88055] hover:border-[#C9A880] border-[#C9A880]/70"
            style={{
              borderImage: "linear-gradient(90deg, #C9A880 0%, #A78355 100%) 1",
            }}
          >
            <h3 className="font-sans font-bold text-[#C9A880] mb-1 uppercase tracking-wider text-base">// FREE_AI_PROMPTS</h3>
            <p className="font-sans text-white/90 text-base">Crea tu propio servidor MD</p>
          </div>
          */}
        </div>
        {/* Formulario de email */}
        <form
          className="w-full"
          onSubmit={handleSubmit}
        >
          <div
            className={`w-full bg-black border-2 rounded-2xl flex items-center px-4 py-2 transition-all duration-300 mb-2
              ${focus ? "border-[#C9A880] shadow-[0_0_16px_0_#C9A88055]" : "border-[#C9A880]/70"}
            `}
            style={{
              borderImage: "linear-gradient(90deg, #C9A880 0%, #A78355 100%) 1",
            }}
          >
            <svg className="w-6 h-6 text-[#C9A880] mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 bg-transparent outline-none border-none text-white placeholder:text-white/70 text-base px-2 py-3"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              required
              disabled={isLoading}
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#C9A880] to-[#A78355] text-black font-semibold shadow transition-all duration-200 hover:brightness-110 focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed"
              aria-label="Enviar email"
              disabled={isLoading}
            >
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          </div>
          {/* Mensajes de feedback */}
          <div className="h-5 text-left w-full pl-2 mt-1">
            {successMessage && <p className="text-sm text-green-400">{successMessage}</p>}
            {errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>}
            {!successMessage && !errorMessage && (
              <span className="text-xs text-[#C9A880]/80">Recibe recursos exclusivos y novedades.</span>
            )}
          </div>
        </form>
      </main >
    </div >
  );
}