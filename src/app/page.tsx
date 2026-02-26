import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { portfolioItems } from "@/data/portfolio";
import { services, processSteps } from "@/data/services";

const stats = [
  { number: "500+", label: "완공 프로젝트" },
  { number: "98%", label: "고객 만족도" },
  { number: "15년", label: "업력" },
  { number: "50+", label: "전문 인력" },
];

const testimonials = [
  {
    name: "김서연",
    location: "강남구 아파트 42평",
    text: "처음 인테리어라 걱정이 많았는데, 상담부터 완공까지 매 단계를 사진으로 공유해주셔서 안심하고 맡길 수 있었어요. 결과물도 기대 이상이었습니다.",
    rating: 5,
  },
  {
    name: "박준호",
    location: "성수동 카페 35평",
    text: "다른 업체 3곳과 비교했는데, 루미에르만 동선 분석까지 해주셨어요. 오픈 후 고객 체류 시간이 확실히 늘었습니다. 매출도요.",
    rating: 5,
  },
  {
    name: "이미영",
    location: "판교 사무실 80평",
    text: "직원들이 '출근하고 싶은 사무실'이라고 할 때 정말 뿌듯했습니다. 회의실 방음과 조명 디테일이 특히 좋아요.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
            alt="루미에르 인테리어 - 고급 거실 인테리어"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Lumière Interior Design
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              공간에<br />
              <span className="text-gold">빛</span>을 더하다
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-lg">
              당신의 일상이 달라지는 공간을 만듭니다.<br />
              상담부터 완공까지, 매 순간 함께합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-semibold hover:bg-gold-dark transition-colors rounded-sm text-base"
              >
                무료 상담 신청하기
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors rounded-sm text-base"
              >
                시공사례 둘러보기
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/30 relative overflow-hidden">
            <div className="w-full h-full bg-white animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-charcoal py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-gold mb-1">{stat.number}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">Portfolio</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                최근 시공사례
              </h2>
              <p className="text-gray-500 max-w-md mx-auto">
                공간의 가능성을 발견하세요. 우리가 만든 변화입니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioItems.slice(0, 4).map((item, i) => (
              <ScrollReveal key={item.id} delay={i < 2 ? i + 1 : i}>
                <Link href={`/portfolio/${item.id}`} className="portfolio-card group block relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <span className="text-gold text-xs tracking-widest uppercase mb-2">
                      {item.categoryLabel}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {item.location} · {item.area}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-charcoal font-semibold hover:text-gold transition-colors group"
            >
              전체 포트폴리오 보기
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                무엇이든 만들어 드립니다
              </h2>
              <p className="text-gray-500 max-w-md mx-auto">
                주거부터 상업, 사무 공간까지. 모든 공간에 최적화된 솔루션을 제공합니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i + 1}>
                <div className="bg-white rounded-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-taupe text-xs tracking-widest uppercase mb-2">{service.subtitle}</p>
                    <h3 className="text-xl font-bold text-charcoal mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold font-semibold text-sm">{service.priceHint}</span>
                      <Link href="/services" className="text-charcoal text-sm font-medium hover:text-gold transition-colors">
                        자세히 보기 →
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">Process</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                투명한 5단계 프로세스
              </h2>
              <p className="text-gray-500 max-w-md mx-auto">
                상담부터 완공까지, 숨기는 것 없이 함께합니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i + 1}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-charcoal text-white flex items-center justify-center text-xl font-bold group-hover:bg-gold transition-colors duration-300">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-charcoal mb-1">{step.title}</h3>
                  <p className="text-xs text-taupe uppercase tracking-wider mb-2">{step.subtitle}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  <p className="mt-3 text-xs text-gold font-medium">{step.duration}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-charcoal font-semibold hover:text-gold transition-colors group"
            >
              프로세스 자세히 보기
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">Testimonials</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                고객이 말하는 루미에르
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i + 1}>
                <div className="bg-charcoal-light p-8 rounded-sm">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.location}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
                alt="인테리어 시공 결과"
                width={1920}
                height={600}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center px-4">
                  <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                    Transform Your Space
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    같은 평수, 전혀 다른 공간
                  </h2>
                  <p className="text-gray-300 mb-8 max-w-md mx-auto">
                    이런 공간, 우리 집에도 가능할까요?<br />
                    지금 바로 확인해 보세요.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-semibold hover:bg-gold-dark transition-colors rounded-sm text-base"
                  >
                    무료 상담 신청하기
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom padding for mobile CTA */}
      <div className="lg:hidden h-16" />
    </>
  );
}
