"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function TiltCard({ children, className = "", intensity = 20 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 스프링 물리엔진으로 부드러운 반응 추가
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // 마우스 위치에 따른 기울기 변환
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-intensity, intensity]);
  // 3D 효과를 빛나게 하는 글레어(glare) 광도 변환
  const brightness = useTransform(mouseYSpring, [-0.5, 0.5], [1.2, 0.8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // 타겟 요소 중심점 기준 좌표 계산 (-0.5 ~ 0.5)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => setIsHovering(true);
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative [perspective:1000px] w-full transform-gpu ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full h-full [transform-style:preserve-3d] relative"
        style={{
          rotateX,
          rotateY,
          filter: isHovering ? `brightness(${brightness.get()})` : "brightness(1)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      >
        {children}
        
        {/* 마우스 스포트라이트(글레어) 레이어 */}
        {isHovering && (
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-inherit mix-blend-overlay z-50 transision-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${
                typeof x.get() === 'number' ? (x.get() as number + 0.5) * 100 : 50
              }% ${
                typeof y.get() === 'number' ? (y.get() as number + 0.5) * 100 : 50
              }%, rgba(255,255,255,0.2) 0%, transparent 60%)`,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
