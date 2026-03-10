/**
 * Role: Demo Video 섹션 — Zenixa x 돌쇠 로보틱스 포스터 이미지
 * Key Features: 16:9 거대한 미디어 뷰어 형태, 돌쇠의 데모 영상 썸네일
 * Dependencies: framer-motion, SectionWrapper, next/image
 */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function DemoVideo() {
  return (
    <SectionWrapper id="demo" dark noPadding>
      <div className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-bg-panel/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="relative aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* 실제 돌쇠 시네마틱 이미지 (포스터) */}
            <Image
              src="/images/dolsue_hanok.png"
              alt="한옥 마루를 광택내고 있는 돌쇠"
              fill
              className="object-cover opacity-80"
            />

            {/* Zenixa 스타일 대형 재생 버튼 및 레이아웃 */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-colors hover:bg-black/20 duration-500 group">
              
              <motion.div
                className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent text-white flex items-center justify-center mb-8 cursor-pointer shadow-[0_10px_40px_rgba(251,77,39,0.5)] group-hover:scale-110 transition-transform duration-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-8 h-8 md:w-12 md:h-12 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </motion.div>

              <div className="text-center translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-[10px] md:text-sm uppercase tracking-[0.4em] font-bold text-white mb-2 block">
                  Cyborg Dolsue Reel
                </span>
                <span className="text-white/80 font-light tracking-widest text-sm">WATCH THE DEMONSTRATION</span>
              </div>
            </div>

            {/* 하단 메타 데이터 (Zenixa 텍스트 스타일) */}
            <div className="absolute bottom-6 left-8 z-10 hidden md:block">
              <span className="text-xs font-mono text-white/90 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 uppercase tracking-widest">
                4K UHD // SEOUL
              </span>
            </div>
            
            <div className="absolute bottom-6 right-8 z-10 hidden md:block">
               <span className="text-xs font-mono text-accent bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md border border-accent/20 uppercase tracking-widest font-bold flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" /> LIVE STREAM
               </span>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
