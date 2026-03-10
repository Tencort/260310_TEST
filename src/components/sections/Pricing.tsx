/**
 * Role: Pricing 섹션 — Zenixa 프라미어 (Dark)
 * Key Features: 3단 글래스 카드, 프로 모델 강조(플레임 오렌지 글로우), 사전예약 배너
 * Dependencies: framer-motion, constants, SectionWrapper, SectionTitle, Button
 */
"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { PRICING_PLANS } from "@/lib/constants";

export default function Pricing() {
  const handleReserve = (planName: string) => {
    alert(`${planName} 런칭 특가 사전예약이 접수되었습니다!`);
  };

  return (
    <SectionWrapper id="pricing" dark>
      {/* 배경 글로우 */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[200px] pointer-events-none" />

      <SectionTitle
        label="Pre-Order"
        title="사전예약 혜택"
        subtitle="가장 완벽한 가사 노동 해방을 가장 먼저 경험하세요"
        align="center"
      />

      {/* 할인 배너 */}
      <motion.div
        className="flex justify-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-6 py-2.5 flex items-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#FB4D27]" />
          <span className="text-sm font-light text-white/80 tracking-wide">
            사전예약 한정 <span className="text-accent font-bold">100대 한정 특별 혜택</span>
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {PRICING_PLANS.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`relative rounded-2xl p-8 md:p-10 transition-all duration-500 overflow-hidden flex flex-col ${
              plan.recommended
                ? "bg-bg-panel border-2 border-accent/50 shadow-[0_0_30px_rgba(251,77,39,0.15)] scale-100 lg:scale-105 z-10"
                : "bg-black border border-white/10 hover:border-white/20"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
          >
            {/* 호버/추천 배경 처리 */}
            {plan.recommended && (
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />
            )}

            {/* 추천 뱃지 */}
            {plan.recommended && (
              <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-6 py-1.5 rounded-bl-xl shadow-[0_0_10px_#FB4D27]">
                BEST SELLER
              </div>
            )}

            {/* 플랜명 */}
            <h3 className="text-sm uppercase tracking-widest text-white/40 mb-6 font-bold">{plan.name}</h3>

            {/* 가격 */}
            <div className="flex items-baseline gap-1 mb-8">
              <span className="font-heading text-4xl md:text-5xl font-black text-white tracking-tighter">{plan.price}</span>
              <span className="text-white/30 text-base font-light ml-1">원</span>
            </div>

            {/* 구분선 */}
            <div className="w-full h-px bg-white/10 mb-8" />

            {/* 기능 리스트 */}
            <ul className="space-y-4 mb-12 flex-1 relative z-10">
              {plan.features.map((feat) => (
                <li key={feat} className="flex items-center gap-4 text-sm font-bold text-white/70 tracking-tight">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${plan.recommended ? 'bg-accent shadow-[0_0_5px_#FB4D27]' : 'bg-white/30'}`} />
                  {feat}
                </li>
              ))}
            </ul>

            <Button
              variant={plan.recommended ? "primary" : "outline"}
              className="w-full relative z-10 font-bold tracking-widest uppercase text-xs h-14"
              onClick={() => handleReserve(plan.name)}
            >
              사전예약 신청
            </Button>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
