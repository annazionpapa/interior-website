import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    step: 1,
    title: "상담 & 현장 방문",
    shortTitle: "상담",
    subtitle: "Consultation",
    description:
      "고객의 라이프스타일과 요구사항을 깊이 파악합니다. 현장을 직접 방문하여 공간의 특성, 채광, 구조를 분석하고 최적의 방향을 함께 논의합니다.",
    duration: "1~2일",
    details: [
      "라이프스타일 인터뷰",
      "현장 실측 및 사진 촬영",
      "예산 범위 협의",
      "레퍼런스 이미지 공유",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    step: 2,
    title: "디자인 & 설계",
    shortTitle: "설계",
    subtitle: "Design",
    description:
      "3D 시뮬레이션으로 완공 후 모습을 미리 확인합니다. 마감재, 가구, 조명까지 세부 계획을 수립하여 공간의 완성도를 높입니다.",
    duration: "1~2주",
    details: [
      "컨셉 보드 제작",
      "3D 렌더링 시뮬레이션",
      "마감재·가구 셀렉션",
      "설계 도면 확정",
    ],
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
  },
  {
    step: 3,
    title: "견적 & 계약",
    shortTitle: "견적",
    subtitle: "Estimate",
    description:
      "자재비, 인건비, 부자재까지 모든 항목을 투명하게 공개합니다. 견적서에 없는 비용은 절대 청구하지 않는 정직한 견적을 약속합니다.",
    duration: "2~3일",
    details: [
      "상세 항목별 견적서",
      "자재 샘플 확인",
      "공정표 및 일정 확정",
      "계약 체결",
    ],
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    step: 4,
    title: "시공 & 관리",
    shortTitle: "시공",
    subtitle: "Construction",
    description:
      "전담 매니저가 매일 현장을 관리합니다. 진행 상황을 사진과 함께 실시간 공유하여 고객이 안심할 수 있도록 투명하게 운영합니다.",
    duration: "3~8주",
    details: [
      "전담 매니저 배정",
      "일일 현장 사진 공유",
      "자재 입고 확인",
      "중간 점검 미팅",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    step: 5,
    title: "완공 & AS",
    shortTitle: "완공",
    subtitle: "Completion",
    description:
      "꼼꼼한 최종 점검 후 인도합니다. 준공 후 1년간 무상 AS를 제공하며, 작은 하자도 빠르고 정확하게 처리해 드립니다.",
    duration: "완공 후 1년",
    details: [
      "최종 품질 점검",
      "클리닝 후 인도",
      "사용법 안내",
      "1년 무상 AS",
    ],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
  },
];

const promises = [
  {
    title: "추가 비용 없는 정직한 견적",
    desc: "견적서에 없는 비용은 절대 청구하지 않습니다. 모든 항목을 투명하게 공개합니다.",
    iconPath:
      "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "실시간 현장 공유",
    desc: "전담 매니저가 매일 현장 사진과 진행 상황을 공유합니다.",
    iconPath:
      "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "1년 무상 AS 보증",
    desc: "준공 후 1년간 무상 AS를 제공합니다. 작은 하자도 빠르게 처리합니다.",
    iconPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt="시공 프로세스"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Process
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            시공 프로세스
          </h1>
          <p className="text-gray-300 max-w-lg mx-auto">
            상담부터 완공까지 투명하게 진행합니다. 숨기는 것 없이, 매 단계를
            함께합니다.
          </p>
        </div>
      </section>

      {/* Horizontal Step Overview Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="flex items-start justify-between relative">
            {/* Connecting line behind circles */}
            <div className="absolute top-5 left-[8%] right-[8%] h-px bg-gold/30" />

            {steps.map((step) => (
              <div
                key={step.step}
                className="flex flex-col items-center relative z-10"
              >
                <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-bold text-sm shadow-md">
                  {step.step}
                </div>
                <span className="text-xs text-charcoal font-medium mt-2.5 text-center hidden sm:block">
                  {step.shortTitle}
                </span>
                <span className="text-[10px] text-gray-400 mt-0.5 hidden md:block">
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Steps */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                5 Steps to Complete
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-2 mb-4">
                체계적인 5단계 프로세스
              </h2>
              <p className="text-gray-400 max-w-md mx-auto">
                모든 과정을 투명하게, 고객과 함께 진행합니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {steps.map((step, i) => (
              <ScrollReveal key={step.step}>
                <div className="relative flex gap-5 lg:gap-8 pb-20 lg:pb-28 last:pb-0">
                  {/* Timeline node (left column) */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gold text-white flex items-center justify-center text-lg lg:text-xl font-bold shadow-lg relative z-10">
                      0{step.step}
                    </div>
                    {/* Vertical connecting line */}
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-gold/20 mt-3" />
                    )}
                  </div>

                  {/* Step card (right column) */}
                  <div className="flex-1 bg-white rounded-sm shadow-sm overflow-hidden mt-1">
                    <div className="p-5 lg:p-7">
                      {/* Card header */}
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-gold text-xs tracking-widest uppercase font-semibold">
                          {step.subtitle}
                        </span>
                        <span className="px-3 py-1 bg-charcoal text-white text-xs font-medium rounded-sm">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-charcoal mb-3">
                        {step.title}
                      </h3>

                      {/* Content: text + thumbnail image */}
                      <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-5">
                        <div>
                          <p className="text-gray-500 leading-relaxed mb-4 text-sm lg:text-base">
                            {step.description}
                          </p>
                          {/* Detail checklist */}
                          <div className="grid grid-cols-2 gap-2">
                            {step.details.map((detail) => (
                              <div
                                key={detail}
                                className="flex items-center gap-2"
                              >
                                <svg
                                  className="w-4 h-4 text-gold flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span className="text-sm text-charcoal">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Thumbnail image */}
                        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[140px] rounded-sm overflow-hidden">
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-cover"
                            sizes="200px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                Our Promise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-2">
                루미에르의 약속
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promises.map((item, i) => (
              <ScrollReveal key={item.title} delay={i + 1}>
                <div className="bg-ivory rounded-sm p-7 text-center h-full">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={item.iconPath}
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-charcoal text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80"
            alt="상담 배경"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/85" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              지금 시작하면 어떤 일정으로 진행될까요?
            </h2>
            <p className="text-gray-300 mb-8 max-w-md mx-auto">
              무료 상담을 통해 맞춤 일정을 확인해 보세요.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-semibold hover:bg-gold-dark transition-colors rounded-sm"
            >
              무료 상담 신청하기
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <div className="lg:hidden h-16" />
    </>
  );
}
