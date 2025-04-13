"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Importación dinámica para evitar problemas de hydration
const ComunidadPage = dynamic(() => import("./comunidad/page"), { ssr: false });

export default function Home() {
  const [isComunidad, setIsComunidad] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Detectar si el host es comunidad.adriaestevez.com
      setIsComunidad(window.location.hostname === "comunidad.adriaestevez.com");
    }
  }, []);

  if (isComunidad) {
    // Renderizar la página de comunidad en el subdominio
    return <ComunidadPage />;
  }

  // Renderizar la home normal en el dominio principal
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      En construcción...
    </div>
  );
}