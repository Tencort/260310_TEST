/**
 * Role: 섹션 제목 — 로보락 S10 프리미엄 하이테크 스타일
 * Key Features: HUD 스타일 라벨, 초대형 제목, 서브텍스트
 * Dependencies: framer-motion
 */
"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  light = false,
  align = "left",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-16 md:mb-20 ${alignClass}`}>
      {/* HUD 스타일 라벨 */}
      {label && (
        <motion.div
          className={`inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium border ${
            light
              ? "border-black/10 text-black/50"
              : "border-white/10 text-white/50"
          }`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-accent shadow-[0_0_5px_#E60000]' : 'bg-accent shadow-[0_0_8px_#E60000] animate-pulse'}`} />
          {label}
        </motion.div>
      )}

      <motion.h2
        className={`font-heading text-display font-black leading-[1.1] tracking-tight whitespace-pre-line ${
          light ? "text-black" : "text-white"
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className={`mt-5 text-lg md:text-xl max-w-2xl font-light tracking-tight ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-black/60" : "text-white/50"}`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
