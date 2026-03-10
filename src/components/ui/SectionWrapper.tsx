/**
 * Role: 섹션 공통 래퍼 — 리디자인: 넉넉한 여백 + 장식 요소
 * Key Features: 다크/라이트 모드, 스크롤 애니메이션, 곡선 데코
 * Dependencies: framer-motion
 */
"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  dark?: boolean;
  noPadding?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  dark = true,
  noPadding = false,
}: SectionWrapperProps) {
  const bgClass = dark ? "bg-black text-white" : "bg-bg-light text-black";
  const padClass = noPadding ? "" : "py-28 md:py-40 px-6 md:px-12 lg:px-20";

  return (
    <motion.section
      id={id}
      className={`relative overflow-hidden ${bgClass} ${padClass} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
}
