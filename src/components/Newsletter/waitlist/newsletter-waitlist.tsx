"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import Link from "next/link";

import { Logo } from "@/components/Logo";
import { AnimatedBackground } from "@/components/Newsletter/backgrounds";
import { NewsletterAvatarCircles } from "@/components/Newsletter/newsletter-avatar-circles";
import { RainbowButtonDemo } from "@/components/rainbowButton";
import { Input } from "@/components/ui/input";
import { beehiivService } from "@/services/beehiiv";

export function NewsletterWaitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Añadimos estado para recargar el componente cuando se realiza un registro exitoso
  const [submissionCount, setSubmissionCount] = useState(0);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email) {
      setErrorMessage("DEBES introducir tu email para poder continuar");
      return;
    }

    if (!accepted) {
      setErrorMessage("¡OJO! Es OBLIGATORIO aceptar la política de privacidad para continuar");
      return;
    }

    setIsSubmitting(true);

    try {
      // Llamar al servicio de Beehiiv para registrar al suscriptor
      await beehiivService.createSubscription({
        email,
        name: name || undefined, // Enviar nombre solo si está definido
        utm_source: "website",
        utm_medium: "waitlist",
        utm_campaign: "futurprive_launch",
        referring_site: typeof window !== 'undefined' ? window.location.href : undefined,
        send_welcome_email: true,
        reactivate_existing: false, // No reactivar suscriptores existentes a menos que sea explícito
      });

      // Redireccionar a la página de agradecimiento
      setIsSuccess(true);

      // Incrementar el contador de suscriptores
      await beehiivService.incrementCounter();

      // Incrementar el contador de envíos para forzar una recarga del componente
      setSubmissionCount(prev => prev + 1);

      // Limpiar formulario y redirigir
      setName("");
      setEmail("");
      setAccepted(false);

      // Pequeño retraso antes de redirigir para asegurar que se procesa la actualización
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 300);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Error desconocido";
      console.error("Error al registrar suscriptor:", error);
      setErrorMessage(errorMessage || "Ha ocurrido un error. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Barra de navegación superior */}
      <header className="w-full bg-[#070707] backdrop-blur-md border-b border-white/10 py-5 px-8 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-start">
          <Logo width={40} height={40} className="h-10 w-auto group-hover:scale-105 transition-transform" />
          <a href="/" className="ml-2 group">
            <span className="text-white text-xl md:text-2xl font-semibold group-hover:text-white/90 transition-colors">
              Arquitectos IA <span className="text-[#C9A880] group-hover:text-[#D9B890] transition-colors">Community</span>
            </span>
          </a>
        </div>
      </header>

      <section id="newsletter-form" className="relative pt-24 pb-16 mt-0 bg-[#080604] min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Fondo con degradado sutil basado en el color principal pero muy oscurecido */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0806] to-[#050302] z-10"></div>

        {/* Efecto de iluminación del color principal */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A880]/8 blur-[120px] z-5"></div>

        {/* Contenido */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Logo width={70} height={70} className="h-16 w-auto" />
          </div>

          {/* Banner de "Spots limitados" destacado - Con estilo de la plataforma */}
          <div className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-[#C9A880] to-[#A78355] text-black rounded-full font-medium text-sm mb-8 mx-auto shadow-lg border border-[#C9A880]/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            ¡OJO! SOLO 50 PLAZAS PARA MIEMBROS FUNDADORES
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-7 text-white leading-tight">
            <span className="bg-gradient-to-r from-[#C9A880] to-[#A78355] bg-clip-text text-transparent">Domina la IA:</span><br />
            Tu Ventaja Definitiva<br />
            <span className="text-[#C9A880]">Sobre los Demás</span>
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto mb-10">
            <span className="text-[#C9A880] font-medium">Conviértete en miembro fundador</span> de nuestra Comunidad de Arquitectos IA y bloquea tu precio especial de early adopter ¡para siempre! 🔥

            <br /><br />

            Apúntate <span className="text-[#C9A880] font-medium">gratis a la lista de espera</span>, reserva tu plaza y te avisaré personalmente cuando abramos las puertas. Las plazas son limitadas y los primeros tienen ventajas exclusivas.

            <br /><br />

            Conmigo aprenden arquitectos, programadores, empresarios, diseñadores, médicos, abogados...
            Personas que buscan <span className="text-[#C9A880] font-medium">resultados REALES con la IA</span>, no teorías vacías.
          </p>

          {/* Subscription Form - Elegante con color principal muy oscuro */}
          <div className="bg-gradient-to-b from-[#161310]/90 to-[#0c0a06]/95 backdrop-blur-md p-8 rounded-3xl border border-[#C9A880]/25 hover:border-[#C9A880]/40 shadow-lg max-w-2xl mx-auto space-y-6 transition-all duration-300">
            <NewsletterAvatarCircles className="mb-2" key={submissionCount} />

            {errorMessage && (
              <div className="text-red-400 bg-red-500/10 p-4 rounded-lg text-sm border border-red-500/20 text-center animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto mb-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errorMessage}
              </div>
            )}

            <Input
              type="text"
              placeholder="Tu nombre aquí"
              className="w-full p-5 h-14 rounded-lg bg-[#13110d] text-white border-[#C9A880]/30 focus:border-[#C9A880]/70 focus:ring-[#C9A880]/15 placeholder:text-[#C9A880]/40 text-base transition-all duration-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              type="email"
              placeholder="Tu MEJOR email"
              className="w-full p-5 h-14 rounded-lg bg-[#13110d] text-white border-[#C9A880]/30 focus:border-[#C9A880]/70 focus:ring-[#C9A880]/15 placeholder:text-[#C9A880]/40 text-base transition-all duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="flex items-start space-x-3 text-left p-3">
              <div className="relative flex mt-1" onClick={() => setAccepted(!accepted)}>
                <input
                  type="checkbox"
                  className="sr-only"
                  id="privacy"
                  checked={accepted}
                  onChange={() => { }}
                />
                <div className={`w-5 h-5 rounded border transition-all duration-300 ${accepted ? 'bg-[#C9A880] border-[#C9A880]' : 'border-[#C9A880]/40 bg-black/30'} flex items-center justify-center cursor-pointer`}>
                  {accepted && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              <label
                htmlFor="privacy"
                className="text-sm text-white/70 cursor-pointer"
                onClick={() => setAccepted(!accepted)}
              >
                Acepto la <Link href="/privacy" className="text-[#C9A880] hover:underline">política de privacidad</Link> y recibir comunicaciones sobre la comunidad. Puedes darte de baja en cualquier momento.
              </label>
            </div>

            <div className="pt-2">
              {isSuccess ? (
                <div className="text-green-400 bg-green-500/10 p-5 rounded-lg border border-green-500/30 flex items-center flex-col">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-base font-medium">¡PERFECTO! Hemos guardado tu email. Te avisaremos cuando abramos las puertas de la comunidad. Pasa un gran día.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <RainbowButtonDemo
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full py-3.5 transform transition-transform hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span className="text-lg font-medium flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          ENVIANDO...
                        </>
                      ) : (
                        <>
                          <span className="text-xs sm:text-sm md:text-base">¡QUIERO SER MIEMBRO FUNDADOR!</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </>
                      )}
                    </span>
                  </RainbowButtonDemo>
                  <div className="px-4 py-3 bg-[#C9A880]/10 rounded-lg border border-[#C9A880]/20">
                    <p className="text-xs text-[#C9A880] text-center font-medium">
                      Acceso prioritario · Recursos EXCLUSIVOS · Precio especial GARANTIZADO para siempre
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
