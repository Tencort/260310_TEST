/**
 * Role: 푸터 — 로보락 S10 프리미엄 디자인
 * Key Features: 딥블랙, 미니멀 타이포, 레드 악센트
 * Dependencies: 없음
 */

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* 브랜드 */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_#E60000]" />
              <span className="font-heading text-xl font-black tracking-tighter text-white">DOLSUE<span className="text-white/50 ml-1 font-light">S10</span></span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs font-light">
              차원이 다른 퍼포먼스, 한계를 넘은 혁신.
              <br />
              완벽한 가사 도우미의 새로운 기준을 제시합니다.
            </p>
          </div>

          {/* 링크 */}
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/50 mb-6">Terms & Policy</h4>
            <ul className="space-y-4">
              {["이용약관", "개인정보처리방침", "품질보증기준"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm font-light text-white/30 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 소셜 */}
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/50 mb-6">Social</h4>
            <ul className="space-y-4">
              {["Instagram", "YouTube", "Official Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm font-light text-white/30 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-transparent group-hover:bg-accent transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light text-white/20">© 2026 DOLSUE Robotics. All rights reserved.</p>
          <div className="flex gap-6">
            <p className="text-xs font-mono text-white/20">T. 1588-0000</p>
            <p className="text-xs font-mono text-white/20">support@dolsue.kr</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
