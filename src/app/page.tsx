/**
 * Role: 메인 랜딩페이지 — 모든 섹션을 순서대로 조합
 * Key Features: 11개 섹션 통합, Navbar/Footer 포함
 * Dependencies: 모든 섹션 컴포넌트, Navbar, Footer
 */
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Concept from "@/components/sections/Concept";
import UseCase from "@/components/sections/UseCase";
import Features from "@/components/sections/Features";
import WhyDolsue from "@/components/sections/WhyDolsue";
import DemoVideo from "@/components/sections/DemoVideo";
import Safety from "@/components/sections/Safety";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Concept />
        <UseCase />
        <Features />
        <WhyDolsue />
        <DemoVideo />
        <Safety />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
