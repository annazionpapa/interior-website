import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    step: 1,
    title: "상담 & 현장 방문",
    subtitle: "Consultation",
    description:
      "고객의 라이프스타일과 요구사항을 깊이 파악합니다. 현장을 직접 방문하여 공간의 특성, 채광, 구조를 분석하고 최적의 방향을 함께 논의합니다.",
    duration: "1~2일",
    details: ["라이프스타일 인터뷰", "현장 실측 및 사진 촬영", "예산 범위 협의", "레퍼런스 이미지 공유"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
  {
    step: 2,
    title: "디자인 & 설계",
    subtitle: "Design",
    description:
      "3D 시뮬레이션으로 완공 후 모습을 미리 확인합니다. 마감재, 가구, 조명까지 세부 계획을 수립하여 공간의 완성도를 높입니다.",
    duration: "1~2주",
    details: ["컨셉 보드 제작", "3D 렌더링 시뮬레이션", "마감재·가구 셀렉션", "설계 도면 확정"],
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
  },
  {
    step: 3,
    title: "견적 & 계약",
    subtitle: "Estimate",
    description:
      "자재비, 인건비, 부자재까지 모든 항목을 투명하게 공개합니다. 견적서에 없는 비용은 절대 청구하지 않는 정직한 견적을 약속합니다.",
    duration: "2~3일",
    details: ["상세 항목별 견적서", "자재 샘플 확인", "공정표 및 일정 확정", "계약 체결"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
  },
  {
    step: 4,
    title: "시공 & 관리",
    subtitle: "Construction",
    description:
      "전담 매니저가 매일 현장을 관리합니다. 진행 상황을 사진과 함께 실시간 공유하여 고객이 안심할 수 있도록 투명하게 운영합니다.",
    duration: "3~8주",
    details: ["전담 매니저 배정", "일일 현장 사진 공유", "자재 입고 확인", "중간 점검 미팅"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
  },
  {
    step: 5,
    title: "완공 & AS",
    subtitle: "Completion",
    description:
      "꼼꼼한 최종 점검 후 인도합니다. 준공 후 1년간 무상 AS를 제공하며, 작은 하자도 빠르고 정확하게 처리해 드립니다.",
    duration: "완공 후 1년",
    details: ["최종 품질 점검", "클리닝 후 인도", "사용법 안내", "1년 무상 AS"],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
];

const promises = [
  {
    title: "추가 비용 없는 정직한 견적",
    desc: "견적서에 없는 비용은 절대 청구하지 않습니다. 자재비, 인건비, 부자재까지 모든 항목을 투명하게 공개합니다.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    title: "실시간 현장 공유",
    desc: "전담 매니저가 매일 현장 사진과 진행 상황을 공유합니다. 궁금한 점은 언제든 즉시 답변드립니다.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    title: "1년 무상 AS 보증",
    desc: "준공 후 1년간 무상으로 AS를 제공합니다. 작은 하자도 빠르게 처리해 드립니다.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
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

      {/* Process Steps */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                5 Steps
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-2 mb-4">
                상담부터 완공까지
              </h2>
              <p className="text-gray-400 max-w-md mx-auto">
                체계적인 5단계 프로세스로 완성도 높은 공간을 만듭니다.
              </p>
            </div>
          </ScrollReveal>

          {/* Steps */}
          <div className="space-y-20 lg:space-y-28">
            {steps.map((step, i) => {
              const isReversed = i % 2 === 1;
              return (
                <ScrollReveal key={step.step}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                      isReversed ? "lg:direction-rtl" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative ${
                        isReversed ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="relative aspect-[4/3] rounded-sm overflow-hidden group">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Step Number Overlay */}
                        <div className="absolute top-5 left-5 w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                          {step.step}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`${
                        isReversed ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-gold text-sm font-bold tracking-wider">
                          STEP {step.step}
                        </span>
                        <span className="w-8 h-px bg-gold" />
                        <span className="text-xs text-gray-400 uppercase tracking-widest">
                          {step.subtitle}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Detail List */}
                      <div className="grid grid-cols-2 gap-3 mb-5">
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

                      <span className="inline-block px-4 py-1.5 bg-charcoal text-white text-xs font-medium rounded-sm">
                        소요 기간: {step.duration}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
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
                <div className="bg-ivory rounded-sm overflow-hidden group">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-gold"
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
                    </div>
                    <h3 className="font-bold text-charcoal text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
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
