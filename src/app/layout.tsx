/**
 * Role: 루트 레이아웃 — 로보락 S10 프리미엄 하이테크 스타일 적용
 * Key Features: 확실한 웹 폰트(Pretendard CDN) 로딩
 * Dependencies: globals.css
 */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DOLSUE S10 Series - 스마트 홈 휴머노이드의 혁신",
  description: "최첨단 AI와 정밀한 센서, 압도적인 성능. 집안의 모든 가사와 노동을 DOLSUE S10에게 맡기세요.",
  keywords: ["DOLSUE S10", "가사도우미 로봇", "휴머노이드", "가정용 로봇", "프리미엄 AI", "스마트 홈"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
      </head>
      <body className="bg-black text-white antialiased" style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
