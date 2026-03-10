/**
 * Role: CTA 버튼 — 로보락 S10 프리미엄 디자인
 * Key Features: primary(강렬한 레드/메탈릭 느낌), outline(샤프한 보더)
 * Dependencies: framer-motion
 */
"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  pulse?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  pulse = false,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-body font-medium transition-all duration-300 cursor-pointer overflow-hidden relative group";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-[#E03C15] shadow-[0_4px_15px_rgba(251,77,39,0.3)] rounded-full hover:shadow-[0_6px_25px_rgba(251,77,39,0.5)]",
    outline:
      "bg-transparent border border-white/20 text-white hover:border-accent hover:text-accent rounded-full hover:bg-accent/5",
    ghost:
      "text-white/50 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-accent decoration-2",
  };

  const sizes = {
    sm: "px-6 py-2.5 text-xs uppercase tracking-[0.2em]",
    md: "px-8 py-3.5 text-sm uppercase tracking-[0.2em]",
    lg: "px-12 py-5 text-sm uppercase tracking-[0.2em] font-bold",
  };

  return (
    <motion.button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={pulse && variant === "primary" ? { boxShadow: ["0 0 10px rgba(251,77,39,0.4)", "0 0 30px rgba(251,77,39,0.8)", "0 0 10px rgba(251,77,39,0.4)"] } : undefined}
      transition={pulse ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0 rounded-full" />
      )}
    </motion.button>
  );
}
