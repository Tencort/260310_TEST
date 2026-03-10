/**
 * Role: Why S10 섹션 — Zenixa 라이트 테마 & TiltCard 인터렉션
 * Key Features: 라이트 그레이(bg-bg-light) 배경, 대형 번호 텍스트(블랙/오렌지), 선명한 카드 UI, 3D 틸팅 효과
 * Dependencies: framer-motion, constants, SectionWrapper, SectionTitle, TiltCard
 */
"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import TiltCard from "@/components/ui/TiltCard";
import { DIFFERENTIATORS } from "@/lib/constants";

export default function WhyDolsue() {
  return (
    <SectionWrapper id="why" dark={false}>
      <SectionTitle
        label="Differentiators"
        title="왜 DOLSUE S10 인가요?"
        subtitle="인간에 가까운 정밀함, 지치지 않는 피지컬, 그리고 완벽한 엣지 컴퓨팅 보안"
        light
      />

      <div className="space-y-6 lg:px-20">
        {DIFFERENTIATORS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 * i }}
          >
            <TiltCard intensity={8}>
              <div className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 p-8 md:p-10 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden relative z-10">
                {/* 호버 시 플레임 오렌지 라인 */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-accent transition-colors duration-500" />

                {/* 대형 번호 */}
                <span className="text-6xl md:text-8xl font-heading font-black text-black/5 flex-shrink-0 leading-none group-hover:text-accent/20 transition-colors duration-500 ml-4 drop-shadow-sm">
                  0{i + 1}.
                </span>

                <div className="pt-2 flex-1 relative z-10 w-full ml-4 md:ml-0">
                  <div className="flex items-center gap-3 mb-4 border-b border-black/5 pb-4">
                    <span className="text-3xl text-black/30 group-hover:text-black transition-colors duration-500 group-hover:scale-110 transform drop-shadow-md">{item.icon}</span>
                    <h3 className="text-2xl md:text-3xl font-black text-black tracking-tighter">{item.title}</h3>
                  </div>
                  <p className="text-black/70 text-lg leading-relaxed max-w-2xl font-bold font-sans tracking-tight">{item.desc}</p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
