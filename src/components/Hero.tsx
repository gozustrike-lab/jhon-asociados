"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import { useWhatsAppStore } from "@/lib/whatsapp";

function CounterItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2500);
  return (
    <div className="text-center">
      <span ref={ref} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
        {count}{suffix}
      </span>
      <p className="text-white/60 text-xs sm:text-sm mt-1 font-medium">{label}</p>
    </div>
  );
}

export function Hero() {
  const { openModal } = useWhatsAppStore();

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden hero-fade-top">

      {/* ═══ LAYER 0 — Background Photograph (Jhon, center-right on desktop) ═══ */}
      <div className="hero-photo-bg" aria-hidden="true" />

      {/* ═══ LAYER 1 — Asymmetric Brand Overlay (dark left → transparent right) ═══ */}
      <div className="hero-brand-overlay" aria-hidden="true" />

      {/* ═══ LAYER 2 — Decorative Blurs + Dot Pattern ═══ */}
      <div className="hero-decor-layer">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#481180]/12 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#008775]/8 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ═══ LAYER 20 — Content (left column on desktop, full width on mobile) ═══ */}
      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 w-full">
        <div className="hero-text-col">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3.5 py-1.5 mb-5"
          >
            <Shield className="w-3.5 h-3.5 text-[#00a996]" />
            <span className="text-white/85 text-xs sm:text-sm font-medium tracking-wide">
              Especialistas Tributarios en Perú
            </span>
          </motion.div>

          {/* H1 — Premium Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[32px] sm:text-[44px] lg:text-[52px] xl:text-[60px] font-extrabold text-white leading-[1.08] tracking-tight"
          >
            Protegemos tu Empresa,{" "}
            <span className="text-[#00a996]">
              Aseguramos tu Patrimonio.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 text-[15px] sm:text-lg text-[#f8fafc]/75 max-w-xl leading-relaxed"
          >
            Especialistas tributarios y contables de gama premium en el Perú.
            Olvídate de las multas de SUNAT y enfócate en hacer crecer tu negocio
            con total seguridad jurídica.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            {/* Primary CTA — Emerald */}
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center gap-2.5 bg-[#008775] hover:bg-[#006655] text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-bold transition-all shadow-lg shadow-[#008775]/30 hover:shadow-xl hover:shadow-[#008775]/40 active:scale-[0.98]"
            >
              Solicitar Consultoría Gratuita
              <ArrowRight className="w-4 h-4" />
            </button>
            {/* Secondary CTA — Transparent with border */}
            <Link
              href="/constitucion-de-empresas"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-semibold transition-all backdrop-blur-sm"
            >
              Ver Servicios
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-white/40 text-xs sm:text-sm"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00a996]" />
              Sin compromiso
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00a996]" />
              Respuesta inmediata
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00a996]" />
              Atención personalizada
            </span>
          </motion.div>
        </div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 lg:mt-16 grid grid-cols-3 gap-3 sm:gap-6 hero-text-col"
        >
          {[
            { value: 500, suffix: "+", label: "Empresas Formalizadas" },
            { value: 2, suffix: "M+", label: "en Multas Evitadas" },
            { value: 98, suffix: "%", label: "de Satisfacción" },
          ].map((item) => (
            <div key={item.label} className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center">
              <CounterItem value={item.value} suffix={item.suffix} label={item.label} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
