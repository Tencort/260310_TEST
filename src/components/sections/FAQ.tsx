/**
 * Role: FAQ 섹션 — 로보락 S10 디자인 레퍼런스 반영
 * Key Features: 다크 모드, 미니멀 아코디언, 레이저 포인트 라인
 * Dependencies: framer-motion, constants, SectionWrapper, SectionTitle
 */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <SectionWrapper id="faq" dark>
      <SectionTitle
        label="FAQ & Support"
        title="자주 묻는 질문"
        subtitle="DOLSUE S10에 대해 궁금한 점을 확인하세요"
        align="center"
      />

      <div className="max-w-3xl mx-auto">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="border-b border-white/10 last:border-b-0 relative group">
            {/* 호버/선택 시 좌측 발광 라인 */}
            <div className={`absolute left-0 top-0 bottom-0 w-[2px] transition-colors duration-300 ${openIndex === i ? 'bg-accent shadow-[0_0_10px_#E60000]' : 'bg-transparent group-hover:bg-white/20'}`} />
            
            <button
              className="w-full flex items-center justify-between py-6 md:py-8 pl-6 text-left"
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span className={`text-base md:text-lg pr-8 transition-colors ${openIndex === i ? 'text-white font-bold' : 'text-white/70 group-hover:text-white'}`}>
                {item.q}
              </span>

              {/* + / × 아이콘 */}
              <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${openIndex === i ? 'border-accent text-accent' : 'border-white/10 text-white/40 group-hover:border-white/30 group-hover:text-white'}`}>
                <motion.span
                  className="text-sm"
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
              </div>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden pl-6"
                >
                  <p className="pb-8 text-white/50 leading-relaxed max-w-2xl font-light text-base">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
