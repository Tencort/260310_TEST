/**
 * Role: 최종 CTA 섹션 — 로보락 S10 프리미엄 디자인 (Domestic Helper)
 * Key Features: 풀와이드 딥블랙, 대형 타이포, 플레임 오렌지 조명 효과, 펄스 CTA
 * Dependencies: framer-motion, Button
 */
"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  const handleCTA = () => alert("런칭 한정 특가 사전예약이 접수되었습니다!");

  return (
    <section className="relative py-32 md:py-44 bg-black overflow-hidden border-t border-white/5">
      {/* 배경 글로우 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[200px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-blue/10 blur-[150px]" />

      {/* 중앙 레이저 메탈릭 라인 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-accent to-transparent shadow-[0_0_10px_#FB4D27]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-accent" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 font-bold">The Future of Home Assistance</span>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-accent" />
        </motion.div>

        <motion.h2
          className="font-heading text-display font-black text-white tracking-tighter mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          차원이 다른 완벽함,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">DOLSUE S10</span>
        </motion.h2>

        <motion.p
          className="text-white/40 text-lg md:text-xl mb-12 max-w-lg mx-auto font-light tracking-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          당신이 상상하던 가장 완벽한 스마트 홈의 완성. <br className="hidden md:block"/>지금 바로 특별한 혜택으로 만나보세요.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" pulse onClick={handleCTA}>
            사전예약 신청하기
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
