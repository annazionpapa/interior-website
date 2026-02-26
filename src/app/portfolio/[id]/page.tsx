import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import {
  portfolioItems,
  categoryScopes,
  getItemStory,
  getItemGalleryImages,
  getRelatedItems,
  getAdjacentItems,
} from "@/data/portfolio";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ id: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = portfolioItems.find((p) => p.id === id);
  if (!item) return { title: "시공사례 | 루미에르 인테리어" };
  return {
    title: `${item.title} | 루미에르 인테리어`,
    description: item.description,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = portfolioItems.find((p) => p.id === id);
  if (!item) notFound();

  const story = getItemStory(item);
  const galleryImages = getItemGalleryImages(item);
  const scopes = categoryScopes[item.category] || [];
  const related = getRelatedItems(item, 3);
  const { prev, next } = getAdjacentItems(item);

  const specs = [
    { label: "위치", value: item.location },
    { label: "면적", value: item.area },
    { label: "연도", value: item.year },
    { label: "유형", value: item.categoryLabel },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] lg:h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-gold transition-colors"
                >
                  시공사례
                </Link>
              </li>
              <li>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-gold">{item.title}</li>
            </ol>
          </nav>

          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-gold/20 backdrop-blur-sm text-gold text-xs tracking-widest uppercase rounded-sm border border-gold/30">
              {item.categoryLabel}
            </span>
            <span className="text-gray-400 text-sm">{item.year}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            {item.title}
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl">
            {item.description}
          </p>
        </div>
      </section>

      {/* Specs Bar */}
      <section className="bg-charcoal border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {specs.map((spec) => (
              <div key={spec.label} className="py-5 md:py-6 px-4 md:px-6 text-center">
                <p className="text-gold text-[11px] tracking-[0.2em] uppercase mb-1 font-medium">
                  {spec.label}
                </p>
                <p className="text-white text-sm md:text-base font-semibold">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left: Story */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="mb-8">
                  <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                    Project Story
                  </span>
                  <div className="w-12 h-[2px] bg-gold mt-3 mb-6" />
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6 leading-snug">
                    {item.description}
                  </h2>
                  <p className="text-gray-500 leading-relaxed text-base md:text-lg">
                    {story}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-4 mt-10">
                  <div className="bg-white p-5 rounded-sm">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <p className="text-charcoal font-semibold text-sm">맞춤 설계</p>
                    <p className="text-gray-400 text-xs mt-1">고객 라이프스타일 기반</p>
                  </div>
                  <div className="bg-white p-5 rounded-sm">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-charcoal font-semibold text-sm">프리미엄 마감</p>
                    <p className="text-gray-400 text-xs mt-1">고급 자재 엄선 사용</p>
                  </div>
                  <div className="bg-white p-5 rounded-sm">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-charcoal font-semibold text-sm">정시 완공</p>
                    <p className="text-gray-400 text-xs mt-1">체계적 공정 관리</p>
                  </div>
                  <div className="bg-white p-5 rounded-sm">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="text-charcoal font-semibold text-sm">고객 만족</p>
                    <p className="text-gray-400 text-xs mt-1">완공 후 A/S 보장</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Scope Card */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={2}>
                <div className="bg-white p-8 rounded-sm sticky top-28">
                  <h3 className="text-charcoal font-bold text-lg mb-1">시공 범위</h3>
                  <p className="text-gray-400 text-xs mb-6">
                    이 프로젝트에 적용된 서비스
                  </p>
                  <div className="space-y-3">
                    {scopes.map((scope, i) => (
                      <div
                        key={scope}
                        className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3.5 h-3.5 text-gold"
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
                        <span className="text-sm text-charcoal">{scope}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-gray-400 text-xs mb-4">
                      비슷한 공간을 원하시나요?
                    </p>
                    <Link
                      href="/contact"
                      className="block w-full py-4 bg-gold text-white font-semibold text-center hover:bg-gold-dark transition-colors rounded-sm text-sm"
                    >
                      무료 상담 신청하기
                    </Link>
                    <a
                      href="tel:02-1234-5678"
                      className="flex items-center justify-center gap-2 mt-3 py-3 border border-gray-200 text-charcoal text-sm font-medium hover:border-gold hover:text-gold transition-colors rounded-sm"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      02-1234-5678
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {galleryImages.length >= 3 && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-10">
                <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                  Gallery
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mt-2">
                  프로젝트 갤러리
                </h2>
              </div>
            </ScrollReveal>

            {/* Asymmetric Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
              {/* Large Image */}
              <ScrollReveal className="lg:col-span-7" delay={1}>
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden group">
                  <Image
                    src={galleryImages[0]}
                    alt={`${item.title} 갤러리 1`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
              </ScrollReveal>

              {/* Right Stack */}
              <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5">
                <ScrollReveal delay={2}>
                  <div className="relative aspect-[4/3] lg:aspect-[16/9] rounded-sm overflow-hidden group">
                    <Image
                      src={galleryImages[1]}
                      alt={`${item.title} 갤러리 2`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 50vw, 42vw"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={3}>
                  <div className="relative aspect-[4/3] lg:aspect-[16/9] rounded-sm overflow-hidden group">
                    <Image
                      src={galleryImages[2]}
                      alt={`${item.title} 갤러리 3`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 50vw, 42vw"
                    />
                  </div>
                </ScrollReveal>
              </div>

              {/* Bottom Wide Image */}
              {galleryImages[3] && (
                <ScrollReveal className="lg:col-span-12" delay={4}>
                  <div className="relative aspect-[21/9] rounded-sm overflow-hidden group">
                    <Image
                      src={galleryImages[3]}
                      alt={`${item.title} 갤러리 4`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="100vw"
                    />
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="py-16 lg:py-24 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                    Related
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal mt-2">
                    비슷한 프로젝트
                  </h2>
                </div>
                <Link
                  href="/portfolio"
                  className="text-sm text-gold font-medium hover:underline hidden md:block"
                >
                  전체 시공사례 보기 →
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r, i) => (
                <ScrollReveal key={r.id} delay={i + 1}>
                  <Link href={`/portfolio/${r.id}`} className="group block">
                    <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <span className="text-gold text-xs tracking-widest uppercase">
                      {r.categoryLabel} · {r.year}
                    </span>
                    <h3 className="text-charcoal font-bold text-lg mt-1 group-hover:text-gold transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {r.location} · {r.area}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <div className="text-center mt-8 md:hidden">
              <Link
                href="/portfolio"
                className="text-sm text-gold font-medium hover:underline"
              >
                전체 시공사례 보기 →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next Navigation */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 divide-x divide-gray-100">
            {/* Prev */}
            <div>
              {prev ? (
                <Link
                  href={`/portfolio/${prev.id}`}
                  className="group flex items-center gap-4 p-6 md:p-10 hover:bg-ivory/50 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-gold transition-colors flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 mb-1">이전 프로젝트</p>
                    <p className="text-charcoal font-semibold text-sm md:text-base truncate group-hover:text-gold transition-colors">
                      {prev.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="p-6 md:p-10">
                  <p className="text-xs text-gray-300">첫 번째 프로젝트</p>
                </div>
              )}
            </div>

            {/* Next */}
            <div>
              {next ? (
                <Link
                  href={`/portfolio/${next.id}`}
                  className="group flex items-center justify-end gap-4 p-6 md:p-10 hover:bg-ivory/50 transition-colors text-right"
                >
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 mb-1">다음 프로젝트</p>
                    <p className="text-charcoal font-semibold text-sm md:text-base truncate group-hover:text-gold transition-colors">
                      {next.title}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-gold transition-colors flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ) : (
                <div className="p-6 md:p-10 text-right">
                  <p className="text-xs text-gray-300">마지막 프로젝트</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
              이런 공간, 우리 집에도 가능할까요?
            </h2>
            <p className="text-gray-500 mb-8">
              무료 상담을 통해 확인해 보세요. 전문 디자이너가 직접 답변드립니다.
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
