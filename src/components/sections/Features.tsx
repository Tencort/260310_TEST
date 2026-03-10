/**
 * Role: Features 섹션 — Zenixa 프라미어 다크 테마 & 고품질 인터렉션(Tilt)
 * Key Features: 블루/레드 조명 효과, 미래적인 글래스 패널, 데이터 라벨, 3D 틸트 카드
 * Dependencies: framer-motion, constants, SectionWrapper, SectionTitle, TiltCard
 */
"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import TiltCard from "@/components/ui/TiltCard";
import { FEATURES } from "@/lib/constants";

export default function Features() {
  return (
    <SectionWrapper id="features" dark>
      {/* 배경 조명 효과 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent-blue/10 blur-[200px] pointer-events-none" />

      <SectionTitle
        label="Core Technology"
        title="비교를 불허하는&#10;휴머노이드 테크놀로지"
        subtitle="보이지 않는 곳까지 완벽하게 파악하고 행동하는 첨단 센서와 모터 테크놀로지"
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {FEATURES.map((feat, i) => (
          <motion.div
            key={feat.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 * i }}
          >
            <TiltCard intensity={15} className="h-full">
              <div className="group h-full rounded-3xl p-8 bg-bg-panel/80 backdrop-blur-md border border-white/10 hover:border-accent/40 hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
                
                {/* 호버 시 배경 그라데이션 글로우 */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* 번호 및 상단 태그 */}
                  <div className="flex justify-between items-start mb-10 relative z-10">
                    <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-accent font-bold border border-accent/30 px-3 py-1 rounded-full shadow-sm bg-accent/5">
                      SPEC_0{i + 1}
                    </span>
                    <span className="text-4xl opacity-70 block group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 group-hover:opacity-100 drop-shadow-[0_0_15px_rgba(251,77,39,0.3)]">
                      {feat.icon}
                    </span>
                  </div>

                  {/* 제목 */}
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-3 relative z-10">{feat.name}</h3>

                  {/* 설명 */}
                  <p className="text-sm md:text-base text-white/50 leading-relaxed font-bold font-sans tracking-tight relative z-10">{feat.desc}</p>
                </div>

                {/* 하단 데이터 인디케이터 */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-80 shadow-[0_0_8px_#FB4D27] animate-pulse" />
                    <span className="text-[9px] text-accent uppercase tracking-[0.3em] font-bold">SYSTEM ONLINE</span>
                  </div>
                  <span className="text-[9px] text-white/30 font-mono font-bold">OK</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
