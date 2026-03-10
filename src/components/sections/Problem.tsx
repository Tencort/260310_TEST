/**
 * Role: Problem 섹션 — Zenixa 프리미엄 라이트 테마 & TiltCard 인터렉션
 * Key Features: 라이트 그레이 배경(#F2F2F2), 볼드 블랙 텍스트, 강렬한 오렌지 하단 선, 3D 틸팅 카드
 * Dependencies: framer-motion, constants, SectionWrapper, SectionTitle, TiltCard
 */
"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import TiltCard from "@/components/ui/TiltCard";
import { PROBLEM_CARDS } from "@/lib/constants";

export default function Problem() {
  return (
    <SectionWrapper id="problem" dark={false}>
      {/* 장식 곡선 (Zenixa 스타일 얇은 라인) */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-black/5" />

      <SectionTitle
        label="Pain Points"
        title="가사 노동의 한계,&#10;이제는 넘어설 때입니다."
        subtitle="매일 반복되는 끝없는 집안일 스트레스, 다재다능한 휴머노이드 돌쇠가 완벽하게 해결합니다."
        light
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROBLEM_CARDS.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
          >
            <TiltCard intensity={5} className="h-full">
              <div className="group relative p-8 md:p-10 bg-white shadow-sm border border-black/5 text-black hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col justify-between z-10">
                <div>
                  {/* 번호 */}
                  <span className="text-xs text-black/30 font-sans tracking-[0.2em] mb-8 block font-bold">
                    0{i + 1}
                  </span>

                  {/* 영문 이모지 텍스트 대체 */}
                  <span className="text-3xl font-black text-black/10 tracking-widest mb-6 block group-hover:text-accent transition-colors duration-500 drop-shadow-sm">
                    {card.emoji}
                  </span>

                  {/* 카피 */}
                  <p className="text-xl md:text-2xl text-black/90 leading-snug whitespace-pre-line font-bold tracking-tight mb-4">
                    {card.copy}
                  </p>
                </div>

                {/* 하단 오렌지 라인 — 호버시 등장 */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-700" />
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
