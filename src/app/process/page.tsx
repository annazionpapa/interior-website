import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { processSteps } from "@/data/services";

const icons: Record<string, string> = {
  chat: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  pencil: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  document: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  hammer: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  check: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
};

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
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">Process</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">시공 프로세스</h1>
          <p className="text-gray-300 max-w-lg mx-auto">
            상담부터 완공까지 투명하게 진행합니다. 숨기는 것 없이, 매 단계를 함께합니다.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.step} className="relative">
              <div className="flex gap-6 md:gap-10 pb-16 last:pb-0">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-charcoal text-white flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icons[step.icon]} />
                    </svg>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="w-px flex-1 bg-cream-dark mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pt-2 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-gold text-sm font-bold">STEP {step.step}</span>
                    <span className="text-xs text-taupe uppercase tracking-wider">{step.subtitle}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-3">{step.description}</p>
                  <span className="inline-block px-3 py-1 bg-cream text-taupe text-xs font-medium rounded-full">
                    소요 기간: {step.duration}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">Our Promise</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                루미에르의 약속
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "추가 비용 없는 정직한 견적",
                desc: "견적서에 없는 비용은 절대 청구하지 않습니다. 자재비, 인건비, 부자재까지 모든 항목을 투명하게 공개합니다.",
              },
              {
                title: "실시간 현장 공유",
                desc: "전담 매니저가 매일 현장 사진과 진행 상황을 공유합니다. 궁금한 점은 언제든 즉시 답변드립니다.",
              },
              {
                title: "1년 무상 AS 보증",
                desc: "준공 후 1년간 무상으로 AS를 제공합니다. 작은 하자도 빠르게 처리해 드립니다.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i + 1}>
                <div className="bg-white p-8 rounded-sm">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-charcoal text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            지금 시작하면 어떤 일정으로 진행될까요?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            무료 상담을 통해 맞춤 일정을 확인해 보세요.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-semibold hover:bg-gold-dark transition-colors rounded-sm"
          >
            무료 상담 신청하기
          </Link>
        </ScrollReveal>
      </section>

      <div className="lg:hidden h-16" />
    </>
  );
}
