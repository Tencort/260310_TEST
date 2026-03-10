/**
 * Role: Safety 섹션 — Zenixa 프라미어 라이트 테마 & TiltCard
 * Key Features: 라이트 그레이(bg-bg-light) 배경, 볼드한 모던 레퍼런스, 오렌지 포인트, 3D 틸팅 효과
 * Dependencies: framer-motion, constants, SectionWrapper, SectionTitle, TiltCard
 */
"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import TiltCard from "@/components/ui/TiltCard";
import { SAFETY_ITEMS } from "@/lib/constants";

export default function Safety() {
  return (
    <SectionWrapper id="safety" dark={false}>
      <SectionTitle
        label="Security & Privacy"
        title="철저하게 지켜지는&#10;당신의 프라이버시"
        subtitle="로보틱스 최고 수준의 보안 아키텍처 지원"
        light
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SAFETY_ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 * i }}
          >
            <TiltCard intensity={8} className="h-full">
              <div className="group h-full rounded-2xl p-8 md:p-10 bg-white border border-black/5 hover:shadow-xl transition-all duration-500 relative overflow-hidden flex z-10">
                {/* 호버 시 발광 라인 */}
                <div className="absolute top-0 left-0 w-2 h-0 bg-accent group-hover:h-full transition-all duration-500 shadow-[0_0_10px_#FB4D27]" />

                <div className="flex items-start gap-6">
                  {/* 아이콘 */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-black/5 border border-black/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-colors duration-500">
                    <span className="text-2xl drop-shadow-md">{item.icon}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-black mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-black/70 leading-relaxed font-bold tracking-tight">{item.desc}</p>
                  </div>
                </div>
                
                {/* 보안 태그 */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[9px] uppercase font-mono text-accent tracking-widest border border-accent/30 px-2 py-1 rounded bg-accent/5 font-bold drop-shadow-sm">SECURE</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
