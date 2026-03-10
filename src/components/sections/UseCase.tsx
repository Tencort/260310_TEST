/**
 * Role: Use Case 섹션 — Zenixa 프리미엄 라이트 테마
 * Key Features: 라이트 그레이 배경(#F2F2F2), 네온 오렌지 도트, 심리스 타임라인, 볼드 블랙 텍스트
 * Dependencies: framer-motion, constants, SectionWrapper, SectionTitle
 */
"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { TIMELINE_ITEMS } from "@/lib/constants";

export default function UseCase() {
  return (
    <SectionWrapper id="usecase" dark={false}>
      <SectionTitle
        label="Smart Routine"
        title="24/7 완벽한 홈 매니지먼트 라이프"
        subtitle="당신의 삶에 여유를 더하는 완벽한 타임라인"
        light
      />

      <div className="relative max-w-4xl mx-auto pl-8 md:pl-0 mt-16">
        {/* 중앙 세로 라인 */}
        <div className="absolute left-[39px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-black/10" />

        <div className="space-y-12">
          {TIMELINE_ITEMS.map((item, i) => (
            <motion.div
              key={item.time}
              className={`relative flex items-center gap-6 md:gap-12 group ${
                i % 2 === 0 ? "md:flex-row-reverse text-left md:text-right" : "flex-row text-left"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
            >
              {/* 콘텐츠 영억 (텍스트) */}
              <div className={`flex-1 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <div className="inline-block px-4 py-1 rounded-full border border-black/10 bg-black/5 text-accent font-mono text-[10px] md:text-xs tracking-widest mb-3 font-bold uppercase shadow-sm">
                  {item.time}
                </div>
                <div className="flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-500">
                  <span className="text-3xl text-black/20 group-hover:text-black transition-colors duration-500">{item.icon}</span>
                  <p className="text-black/80 text-lg md:text-xl font-bold tracking-tight whitespace-pre-line group-hover:text-black transition-colors duration-500">
                    {item.activity}
                  </p>
                </div>
              </div>

              {/* 중앙 발광 도트 */}
              <div className="absolute left-0 md:left-1/2 flex items-center justify-center -translate-x-1/2 md:-translate-x-1/2 z-10">
                <div className="w-5 h-5 rounded-full bg-white border-2 border-black/10 flex items-center justify-center group-hover:border-accent group-hover:shadow-[0_0_15px_#FB4D27] transition-all duration-500 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-black/20 group-hover:bg-accent transition-colors duration-500" />
                </div>
              </div>

              {/* 빈 공간 (그리드 정렬용) */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
        
        {/* 하단 점진적 페이드 아웃 */}
        <div className="absolute left-[39px] md:left-1/2 md:-translate-x-1/2 bottom-0 w-[2px] h-32 bg-gradient-to-t from-[#F2F2F2] to-black/10" />
      </div>
    </SectionWrapper>
  );
}
