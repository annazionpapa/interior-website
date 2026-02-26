import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="서비스 소개"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">서비스 안내</h1>
          <p className="text-gray-300 max-w-md mx-auto">
            주거부터 상업, 사무 공간까지. 모든 공간에 최적의 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} className="mb-20 last:mb-0">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                {/* Image */}
                <div className={`relative aspect-[4/3] rounded-sm overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2 font-medium">
                    {service.subtitle}
                  </p>
                  <h2 className="text-3xl font-bold text-charcoal mb-4">{service.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-charcoal">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price hint */}
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-gold">{service.priceHint}</span>
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-charcoal text-white font-semibold hover:bg-charcoal-light transition-colors rounded-sm text-sm"
                    >
                      견적 문의하기
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">Why Lumière</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                루미에르를 선택하는 이유
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "투명한 견적", desc: "숨은 비용 없는 정직한 견적서. 항목별 상세 내역을 공개합니다.", icon: "📋" },
              { title: "전담 매니저", desc: "처음부터 끝까지 한 분이 책임집니다. 소통 비용을 줄여드립니다.", icon: "👤" },
              { title: "실시간 현장 공유", desc: "매일 사진과 함께 진행 상황을 공유합니다. 안심하고 맡기세요.", icon: "📸" },
              { title: "1년 무상 AS", desc: "준공 후 1년간 무상 AS를 제공합니다. 사소한 것도 놓치지 않습니다.", icon: "🛡️" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i + 1}>
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-charcoal text-lg mb-2">{item.title}</h3>
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
            어떤 서비스가 필요하신가요?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            상담은 무료입니다. 부담 없이 문의해 주세요.
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
