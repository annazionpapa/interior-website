export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  priceHint: string;
}

export const services: ServiceItem[] = [
  {
    id: "residential",
    title: "주거 인테리어",
    subtitle: "Residential Interior",
    description:
      "아파트, 빌라, 단독주택까지. 가족의 라이프스타일에 맞춘 맞춤형 공간을 설계합니다. 자연광, 동선, 수납까지 세심하게 고려한 디자인으로 매일이 편안한 집을 만들어 드립니다.",
    features: [
      "맞춤형 공간 설계",
      "프리미엄 마감재 시공",
      "가구·조명 코디네이션",
      "스마트홈 연동",
      "3D 시뮬레이션 제공",
      "준공 후 1년 무상 AS",
    ],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    priceHint: "평당 250만원~",
  },
  {
    id: "commercial",
    title: "상업 인테리어",
    subtitle: "Commercial Interior",
    description:
      "카페, 레스토랑, 매장, 클리닉 등 상업 공간의 브랜딩과 인테리어를 동시에. 고객의 동선과 체류 시간까지 고려한 설계로 매출과 직결되는 공간을 만듭니다.",
    features: [
      "브랜드 아이덴티티 반영",
      "고객 동선 최적화",
      "조명·사인물 디자인",
      "인허가 대행",
      "소방·전기 시공 포함",
      "오픈 일정 맞춤 관리",
    ],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    priceHint: "평당 200만원~",
  },
  {
    id: "office",
    title: "사무실 인테리어",
    subtitle: "Office Interior",
    description:
      "업무 효율과 기업 문화를 반영한 오피스 디자인. 집중 공간과 협업 공간의 밸런스, 브랜드를 보여주는 라운지까지 직원들이 출근하고 싶은 사무실을 만듭니다.",
    features: [
      "업무 효율 기반 공간 배치",
      "회의실·라운지·포커스룸",
      "기업 CI 반영 디자인",
      "IT 인프라 설계 포함",
      "친환경 자재 적용",
      "주말·야간 시공 가능",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    priceHint: "평당 180만원~",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "상담 & 현장 방문",
    subtitle: "Consultation",
    description: "고객의 라이프스타일과 요구사항을 파악하고, 현장을 직접 방문하여 공간의 특성을 분석합니다.",
    duration: "1~2일",
    icon: "chat",
  },
  {
    step: 2,
    title: "디자인 & 설계",
    subtitle: "Design",
    description: "3D 시뮬레이션과 함께 공간 설계안을 제안합니다. 마감재, 가구, 조명까지 세부 계획을 수립합니다.",
    duration: "1~2주",
    icon: "pencil",
  },
  {
    step: 3,
    title: "견적 & 계약",
    subtitle: "Estimate",
    description: "투명한 견적서를 제공하고 상세 항목을 함께 확인합니다. 추가 비용 없는 정직한 견적을 약속합니다.",
    duration: "2~3일",
    icon: "document",
  },
  {
    step: 4,
    title: "시공 & 관리",
    subtitle: "Construction",
    description: "전담 매니저가 매일 현장을 관리합니다. 진행 상황을 사진과 함께 실시간 공유합니다.",
    duration: "3~8주",
    icon: "hammer",
  },
  {
    step: 5,
    title: "완공 & AS",
    subtitle: "Completion",
    description: "꼼꼼한 최종 점검 후 인도합니다. 준공 후 1년간 무상 AS를 제공합니다.",
    duration: "완공 후 1년",
    icon: "check",
  },
];
