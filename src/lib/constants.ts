/**
 * Role: 프로젝트 전역 상수 — 가사(Humanoid) 로봇 특화 텍스트, 데이터
 * Key Features: 프리미엄 가사 도우미 로봇 DOLSUE S10 컨셉
 * Dependencies: 없음
 */

// 네비게이션 링크
export const NAV_LINKS = [
  { label: "디자인 & 혁신", href: "#concept" },
  { label: "핵심 기술", href: "#features" },
  { label: "사전예약", href: "#pricing" },
  { label: "지원", href: "#faq" },
] as const;

// Problem 섹션 카드
export const PROBLEM_CARDS = [
  {
    emoji: "CHORE",
    copy: "퇴근 후 쌓여있는 설거지와 빨래,\n누군가 대신해 주길 바라셨나요?",
  },
  {
    emoji: "TASK",
    copy: "요리부터 정리정돈, 아이 돌보기까지,\n몸이 열 개라도 부족하셨나요?",
  },
  {
    emoji: "VOICE",
    copy: "복잡한 기기 조작 없이,\n말 한마디로 알아서 움직이는 조수가 필요하신가요?",
  },
  {
    emoji: "TIME",
    copy: "끝이 없는 가사 노동 스트레스,\n이제 프리미엄 휴머노이드에게 맡기세요.",
  },
] as const;

// 핵심 가치
export const CORE_VALUES = [
  { keyword: "Bionic AI 2.0", label: "전방위 가사 수행", desc: "정밀 매니퓰레이터 왐(Arm)과 촉각 센서로 요리, 빨래, 청소 등 섬세한 인간의 가사 노동을 완벽히 재현합니다.", icon: "🦾" },
  { keyword: "Hyper-Servo™", label: "강력한 피지컬", desc: "무거운 장보기 짐 이동부터 대청소까지, 지치지 않는 파워와 정밀한 제어력으로 집안의 궂은 일을 도맡습니다.", icon: "⚡" },
  { keyword: "Cognitive Engine", label: "능동적 학습", desc: "가족의 생활 패턴을 분석하고 습관을 학습하여, 당신이 지시하기 전에 먼저 필요한 가사를 수행합니다.", icon: "🧠" },
] as const;

// 돌쇠의 하루 타임라인
export const TIMELINE_ITEMS = [
  { time: "09:00", activity: "가족 출근 후 전구역 환기 및 정리정돈 시작", icon: "🏠" },
  { time: "10:30", activity: "세탁기 가동 및 건조기 연동 빨래 건조/분류", icon: "👕" },
  { time: "13:00", activity: "반려동물 식사/배변 관리 및 홈캠 상태 모니터링", icon: "🐾" },
  { time: "15:00", activity: "하교하는 아이 맞이 및 맞춤형 영양 간식 준비", icon: "🥪" },
  { time: "17:30", activity: "가족 귀가 시간에 맞춘 따뜻한 저녁 식사 요리", icon: "🥘" },
  { time: "19:00", activity: "저녁 식사 서빙 및 주방 설거지 완벽 마무리", icon: "✨" },
  { time: "23:00", activity: "야간 방범 순찰 및 다음날 일정 브리핑 후 충전 모드", icon: "🔋" },
] as const;

// 기술 Features
export const FEATURES = [
  { icon: "👁️", name: "3D Vision & LiDAR", desc: "초정밀 공간 인식으로 집안 내 모든 가구와 사물을 1mm 오차 없이 파악" },
  { icon: "🦾", name: "Tactile Manipulator", desc: "달갈을 깨지 않고 잡을 수 있는 초정밀 촉각 피드백 로봇 암 탑재" },
  { icon: "🗣️", name: "NLP Voice Control", desc: "자연어 처리 기반의 대화형 AI로 맥락을 이해하고 명령을 수행" },
  { icon: "👨‍🍳", name: "Chef Recipe AI", desc: "10,000개 이상의 레시피 데이터베이스를 기반으로 한 완벽한 셰프 요리봇 기능" },
  { icon: "🔋", name: "Super Fast Charge", desc: "1시간 충전으로 24시간 가동이 가능한 혁신적인 배터리 효율" },
  { icon: "🔒", name: "Edge Security", desc: "모든 영상 및 음성 데이터 지형 내(Local) 암호화 처리로 해킹 원천 차단" },
] as const;

// 차별점
export const DIFFERENTIATORS = [
  {
    title: "가사 노동 제로",
    desc: "바닥 청소는 물론, 요리, 세탁, 정리정돈까지 가정 내 모든 물리적 노동을 대체합니다.",
    icon: "🛋️",
  },
  {
    title: "감정 교감 AI",
    desc: "사용자의 표정과 목소리 톤을 인식하여 상황에 맞는 감성적인 대화와 위로를 건넵니다.",
    icon: "🤝",
  },
  {
    title: "오토매틱 허브 연동",
    desc: "집안의 모든 스마트 가전(IoT)을 돌쇠가 직접 제어하고 관리하는 진정한 스마트 홈 컨트롤 타워.",
    icon: "🌐",
  },
  {
    title: "무한 확장 스킬",
    desc: "클라우드 스토어를 통해 바리스타 모드, 홈 트레이닝 보조 등 새로운 가사/취미 스킬을 다운로드하여 학습합니다.",
    icon: "🚀",
  },
] as const;

// 안전 항목
export const SAFETY_ITEMS = [
  { icon: "🛡️", title: "충돌 및 파손 방지", desc: "사람이나 반려동물 접근 시 즉각적인 동작 중지 및 초정밀 힘 조절 프로세스" },
  { icon: "👶", title: "차일드 세이프 존", desc: "아이들이 있는 구역에서는 속도와 관절 토크를 자동으로 제한하여 절대 안전 확보" },
  { icon: "🔐", title: "생체 인식 잠금", desc: "가족 등록 멤버의 얼굴과 음성 생체 인식으로만 주요 권한 및 설정 접근 허용" },
  { icon: "📋", title: "국제 로봇 안전 인증", desc: "ISO 13482(개인용 서비스 로봇 안전 규격) 등 글로벌 최상위 안전 등급 획득" },
] as const;

// 가격 플랜
export const PRICING_PLANS = [
  {
    name: "S10 기본형",
    price: "15,900,000",
    features: ["기본 청소/정리/세탁 기능", "음성 대화형 AI", "가전 IoT 연동 허브"],
    recommended: false,
  },
  {
    name: "S10 Pro (Chef Mode)",
    price: "19,900,000",
    features: ["기본형 모든 기능 탑재", "AI 레시피 셰프 모드", "아이/반려동물 케어 알고리즘", "무료 스킬 다운로드 무제한"],
    recommended: true,
  },
  {
    name: "S10 Max Ultra",
    price: "24,900,000",
    features: ["Pro 모든 기능 탑재", "24시간 전담 보안 순찰", "의료/홈 트레이닝 어시스트", "전용 충전 포드 및 평생 A/S 케어"],
    recommended: false,
  },
] as const;

// FAQ
export const FAQ_ITEMS = [
  {
    q: "정말 요리와 빨래 개기 같은 복잡한 작업이 가능한가요?",
    a: "네, DOLSUE S10은 정밀한 촉각 센서가 내장된 매니퓰레이터를 통해 형태가 불규칙한 식재료 손질, 옷가지 정리 등 인간 고유의 섬세한 수작업을 오차 없이 수행할 수 있습니다.",
  },
  {
    q: "아이들이나 반려동물이 다치면 어떡하나요?",
    a: "가장 최우선으로 고려된 것이 안전입니다. 다중 레이더와 라이다 센서로 주변 생명체를 0.01초 단위로 추적하며, 충돌 위험 시 관절의 힘을 즉각 0으로 풀어버리는 액티브 세이프 액추에이터가 적용되어 있습니다.",
  },
  {
    q: "학습하지 않은 가사 일도 시킬 수 있나요?",
    a: "말로 설명하거나, 사용자가 한 번 시연하는 것(Demonstration)을 카메라로 시각적 학습을 하여 즉시 따라할 수 있는 모방 학습(Imitation Learning) 기능이 탑재되어 있습니다.",
  },
  {
    q: "전기세가 많이 나오지 않을까요?",
    a: "돌쇠 S10은 초저전력 NPU를 사용하여 대기 시에는 전력 소모를 최소화하며, 대형 냉장고 1대 수준의 월간 전력 소모량을 보여줍니다. 지정된 심야 시간에 알아서 충전하는 스마트 기능도 지원합니다.",
  },
  {
    q: "AS와 유지보수는 어떻게 되나요?",
    a: "구독 및 구매 고객 모두에게 정기적인 방문 점검 서비스(관절 윤활, 센서 캘리브레이션 등)를 제공하며, 원격 진단을 통해 고장 발생 전 선제적으로 부품을 교체해 드립니다.",
  },
  {
    q: "집 안의 구조가 복잡한데 로봇이 자유롭게 다닐 수 있나요?",
    a: "강력한 다족 보행/휠 복합 플랫폼으로 최대 5cm 의 문턱 돌파 및 계단 인식 회피가 가능하며, 집 안의 3D 맵을 스스로 구축하여 가장 효율적인 동선을 찾아 이동합니다.",
  },
] as const;
