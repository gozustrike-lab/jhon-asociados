"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, Shield, CheckCircle2 } from "lucide-react";
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
    <section className="relative min-h-[100svh] flex items-center hero-gradient overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#481180]/15 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#008775]/10 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 w-full">
        <div className="max-w-4xl">
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

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[32px] sm:text-[44px] lg:text-[56px] xl:text-[64px] font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Protege tu patrimonio.{" "}
            <span className="text-[#00a996]">
              Nosotros nos encargamos de SUNAT.
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 text-[15px] sm:text-lg text-white/60 max-w-2xl leading-relaxed"
          >
            Especialistas en asesoría tributaria, contabilidad integral y defensa
            ante fiscalizaciones. Más de 500 empresas confían en nosotros.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-bold transition-all shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              Consultoría Gratuita
            </button>
            <Link
              href="/constitucion-de-empresas"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-semibold transition-all backdrop-blur-sm"
            >
              Nuestros Servicios
              <ArrowDown className="w-4 h-4" />
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
          className="mt-12 lg:mt-16 grid grid-cols-3 gap-3 sm:gap-6"
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
