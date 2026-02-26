"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { portfolioItems, categories } from "@/data/portfolio";

const INITIAL_SHOW = 4;

const categoryDescriptions: Record<string, string> = {
  residential: "아파트, 빌라, 단독주택 — 가족의 일상을 담는 공간",
  commercial: "카페, 레스토랑, 클리닉 — 브랜드를 담는 공간",
  office: "오피스, 코워킹, 스튜디오 — 업무를 담는 공간",
  remodel: "구축 아파트, 빌라, 주택 — 새 생명을 불어넣는 프로젝트",
};

const categoryKeys = categories.filter((c) => c.key !== "all");

export default function PortfolioPage() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [activeNav, setActiveNav] = useState(categoryKeys[0]?.key || "");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToSection = (key: string) => {
    setActiveNav(key);
    const el = sectionRefs.current[key];
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const toggleExpand = (key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const getItemsByCategory = (key: string) =>
    portfolioItems.filter((item) => item.category === key);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="포트폴리오"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            시공사례
          </h1>
          <p className="text-gray-300 max-w-md mx-auto">
            {portfolioItems.length}개의 프로젝트. 공간이 달라지면 일상이
            달라집니다.
          </p>
        </div>
      </section>

      {/* Sticky Category Nav */}
      <nav className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-3">
            {categoryKeys.map((cat) => {
              const count = getItemsByCategory(cat.key).length;
              return (
                <button
                  key={cat.key}
                  onClick={() => scrollToSection(cat.key)}
                  className={`flex-shrink-0 px-5 py-2 text-sm font-medium rounded-sm transition-all ${
                    activeNav === cat.key
                      ? "bg-charcoal text-white"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {cat.label}
                  <span
                    className={`ml-1.5 text-xs ${
                      activeNav === cat.key ? "text-gold" : "text-gray-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
            <div className="flex-shrink-0 ml-auto pl-4 hidden md:block">
              <span className="text-xs text-gray-400">
                총{" "}
                <span className="text-charcoal font-semibold">
                  {portfolioItems.length}
                </span>
                개 프로젝트
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Category Sections */}
      <div className="bg-ivory">
        {categoryKeys.map((cat, catIdx) => {
          const items = getItemsByCategory(cat.key);
          const isExpanded = expanded.has(cat.key);
          const visibleItems = isExpanded
            ? items
            : items.slice(0, INITIAL_SHOW);
          const hasMore = items.length > INITIAL_SHOW;
          const remaining = items.length - INITIAL_SHOW;

          return (
            <section
              key={cat.key}
              ref={(el) => { sectionRefs.current[cat.key] = el; }}
              className={`py-16 lg:py-20 ${
                catIdx > 0 ? "border-t border-gray-200" : ""
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollReveal>
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal">
                          {cat.label}
                        </h2>
                        <span className="px-2.5 py-0.5 bg-gold/10 text-gold text-xs font-semibold rounded-sm">
                          {items.length}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {categoryDescriptions[cat.key]}
                      </p>
                    </div>
                    {hasMore && !isExpanded && (
                      <button
                        onClick={() => toggleExpand(cat.key)}
                        className="text-sm text-gold font-medium hover:underline flex-shrink-0"
                      >
                        전체 {items.length}개 보기 →
                      </button>
                    )}
                  </div>
                </ScrollReveal>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {visibleItems.map((item, i) => {
                    const isFeatured = i === 0;
                    return (
                      <ScrollReveal
                        key={item.id}
                        delay={Math.min(i + 1, 4)}
                        className={isFeatured ? "md:col-span-2 md:row-span-2" : ""}
                      >
                        <Link href={`/portfolio/${item.id}`} className="group block h-full">
                          <div
                            className={`portfolio-card relative rounded-sm overflow-hidden h-full ${
                              isFeatured
                                ? "aspect-[4/3] md:aspect-auto md:h-full min-h-[300px]"
                                : "aspect-[4/3]"
                            }`}
                          >
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover"
                              sizes={
                                isFeatured
                                  ? "(max-width: 768px) 100vw, 66vw"
                                  : "(max-width: 768px) 100vw, 33vw"
                              }
                            />
                            <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5 md:p-7">
                              <span className="text-gold text-xs tracking-widest uppercase mb-1.5">
                                {item.year} · {item.location}
                              </span>
                              <h3
                                className={`font-bold text-white mb-1 ${
                                  isFeatured
                                    ? "text-xl md:text-2xl lg:text-3xl"
                                    : "text-base md:text-lg"
                                }`}
                              >
                                {item.title}
                              </h3>
                              <p className="text-gray-300 text-sm">
                                {item.area}
                              </p>
                              {isFeatured && (
                                <p className="text-gray-400 text-sm mt-2 hidden md:block max-w-md">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </Link>
                      </ScrollReveal>
                    );
                  })}
                </div>

                {/* Expand / Collapse */}
                {hasMore && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => toggleExpand(cat.key)}
                      className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-sm transition-all ${
                        isExpanded
                          ? "text-gray-500 hover:text-charcoal"
                          : "bg-charcoal text-white hover:bg-charcoal-light"
                      }`}
                    >
                      {isExpanded ? (
                        <>
                          접기
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
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        </>
                      ) : (
                        <>
                          더 보기
                          <span className="text-gold">+{remaining}</span>
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
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
              이런 공간, 우리 집에도 가능할까요?
            </h2>
            <p className="text-gray-500 mb-8">
              무료 상담을 통해 확인해 보세요. 전문 디자이너가 직접
              답변드립니다.
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
