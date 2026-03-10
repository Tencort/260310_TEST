/**
 * Role: Hero 섹션 — Zenixa 프라미어 라이트 테마 & 첫 만남 인사
 * Key Features: 로봇 등장(인사) 애니메이션 후 텍스트/로고 삭 나타남
 * Dependencies: framer-motion, Button, next/image
 */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { BASE_PATH } from "@/lib/path";

export default function Hero() {
  const handleCTA = () => alert("사전예약이 접수되었습니다!");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden pt-20"
    >
      {/* 프리미엄 로봇청소기 특유의 오로라/레이저 조명 효과 (레드+블루 혼합) */}
      <div className="absolute top-1/4 -right-20 md:-right-40 w-[600px] h-[600px] rounded-full bg-accent-red/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 md:-left-40 w-[500px] h-[500px] rounded-full bg-accent-blue/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-hero-gradient pointer-events-none" />

      {/* 로봇 인사 씬 (메인 시각 요소 먼저 등장) */}
      <motion.div
        className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] z-10 mx-auto"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src={`${BASE_PATH}/images/dolsue_greeting.png`}
          alt="프리미엄 하이테크 휴머노이드 돌쇠의 인사"
          fill
          className="object-contain drop-shadow-[0_0_30px_rgba(251,77,39,0.3)]"
          priority
        />
        
        {/* 로봇 스캔 라인 스팟 */}
        <motion.div 
          className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/80 to-transparent shadow-[0_0_15px_rgba(251,77,39,0.9)] z-20"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        />
      </motion.div>

      {/* DOLSUE 로고 및 텍스트 삭 나타남 (로봇 등장 뒤) */}
      <motion.div 
        className="relative z-20 text-center px-6 md:px-12 w-full -mt-20 md:-mt-32 backdrop-blur-sm bg-black/20 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-8 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-accent" />
          <span className="text-[10px] md:text-sm uppercase tracking-[0.4em] text-white/80 font-semibold drop-shadow-md">
            당신의 첫 번째 완벽한 집사
          </span>
          <div className="w-8 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-accent" />
        </div>

        <h1 className="font-heading text-display-xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tighter mx-auto leading-[0.9] drop-shadow-2xl">
          DOLSUE <span className="text-white/30 text-display-sm ml-2">S10</span>
        </h1>

        <p className="mt-4 text-lg md:text-2xl text-white/70 max-w-2xl mx-auto font-light tracking-tight drop-shadow-md">
          압도적인 퍼포먼스로 <br className="md:hidden" />
          집안의 모든 공간을 지배하다.
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <Button size="lg" onClick={handleCTA} pulse>
            사전예약 혜택 받기
          </Button>
          <a href="#concept" className="text-sm uppercase tracking-widest text-white/50 hover:text-white transition-colors flex items-center gap-2 group p-4">
            혁신 기술 보기 <span className="group-hover:translate-y-1 transition-transform">↓</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
