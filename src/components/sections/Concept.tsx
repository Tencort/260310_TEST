/**
 * Role: Concept 섹션 — Zenixa 레퍼런스 및 돌쇠 이미지 통합
 * Key Features: 대형 타이포 스토리레이아웃, 실제 전통 복장 로봇(돌쇠) 이미지 활용
 * Dependencies: framer-motion, constants, SectionWrapper, SectionTitle, next/image
 */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { CORE_VALUES } from "@/lib/constants";

export default function Concept() {
  return (
    <SectionWrapper id="concept" dark>
      {/* 배경 그라데이션 */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px] pointer-events-none" />

      <SectionTitle label="Innovation" title="가사 노동의&#10;새로운 기준" />

      {/* 스토리텔링 — 대형 텍스트 (Zenixa Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        <motion.div
          className="lg:col-span-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-heading text-display text-white leading-[1.05] font-black tracking-tighter">
            단 한 마디의 지시로,
            <br className="hidden md:block" />
            집안의 <span className="text-accent underline underline-offset-[16px] decoration-4">모든 일과를 이해</span>하는
            <br className="hidden md:block" />
            초정밀 휴머노이드 돌쇠.
          </p>
        </motion.div>

        <motion.div
          className="lg:col-span-4 flex flex-col justify-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-white/60 text-xl leading-relaxed font-light mt-4 lg:mt-0">
            과거 마당을 쓸던 정성 그대로. 요리부터 빨래, 정리정돈, 아이 돌보기까지 복잡한 수작업을 사람처럼 완벽하게 도맡아 처리합니다. 더 이상 가사에 신경 쓸 필요가 없습니다.
          </p>
        </motion.div>
      </div>

      {/* 비주얼 이미지 + 핵심 가치 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 실제 돌쇠 이미지 영역 */}
        <motion.div
          className="lg:col-span-6 aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-bg-panel flex items-center justify-center relative group shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/dolsue_sweeping.png"
            alt="마당을 쓸고 있는 첨단 휴머노이드 돌쇠"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* 레이저 스캔 라이팅 오버레이 */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-0 left-0 w-full h-1 bg-accent/80 shadow-[0_0_20px_#FB4D27] animate-[scan_3s_ease-in-out_infinite]" />
          
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10 opacity-70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-white font-mono tracking-[0.2em] font-bold">DOLSUE ACTIVE</span>
            </div>
            <span className="text-[10px] text-white/50 tracking-widest font-mono">VISION_3D</span>
          </div>
        </motion.div>

        {/* 핵심 가치 3개 카드 */}
        <div className="lg:col-span-6 flex flex-col justify-center gap-4">
          {CORE_VALUES.map((value, i) => (
            <motion.div
              key={value.keyword}
              className="rounded-3xl p-8 lg:p-10 flex items-start gap-6 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
            >
              <span className="text-4xl flex-shrink-0 mt-1 drop-shadow-lg">{value.icon}</span>
              <div>
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight">{value.keyword}</h3>
                  <span className="text-[10px] text-white/80 bg-accent/20 font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">{value.label}</span>
                </div>
                <p className="text-white/50 text-base md:text-lg leading-relaxed font-light">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
