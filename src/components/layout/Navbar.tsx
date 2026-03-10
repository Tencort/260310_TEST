/**
 * Role: 상단 네비게이션 — 로보락 S10 프리미엄 하이테크 스타일 적용
 * Key Features: 스크롤 시 글래스 배경, 모바일 풀스크린 메뉴, 미니멀 네비게이션
 * Dependencies: framer-motion, constants
 */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTA = () => alert("사전예약이 접수되었습니다!");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        {/* 로고 */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-accent group-hover:shadow-[0_0_10px_#E60000] transition-shadow" />
          <span className="font-heading text-xl font-bold text-white tracking-widest">DOLSUE <span className="text-white/50 font-light">S10</span></span>
        </a>

        {/* 데스크톱 메뉴 */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* 데스크톱 CTA */}
        <button
          onClick={handleCTA}
          className="hidden md:block text-xs uppercase tracking-widest px-6 py-2.5 rounded-full border border-white/20 text-white/90 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
        >
          사전예약
        </button>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-5 h-px bg-white transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-white transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* 모바일 풀스크린 메뉴 */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-0 bg-black/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-2xl uppercase tracking-widest font-heading text-white/70 hover:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              className="mt-8 px-10 py-4 rounded-full bg-accent hover:bg-accent-red/80 text-white text-sm uppercase tracking-widest font-medium transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => {
                handleCTA();
                setMobileOpen(false);
              }}
            >
              사전예약
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
