import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const timeline = [
  { year: "2011", event: "루미에르 인테리어 설립" },
  { year: "2014", event: "강남 쇼룸 오픈 · 100호 시공 달성" },
  { year: "2017", event: "상업 인테리어 사업부 신설" },
  { year: "2019", event: "대한민국 인테리어대상 수상" },
  { year: "2021", event: "사무실 인테리어 사업부 확장 · 300호 시공" },
  { year: "2023", event: "프리미엄 브랜드 리뉴얼 · 분당 지사 오픈" },
  { year: "2025", event: "500호 시공 달성 · 고객 만족도 98% 기록" },
];

const values = [
  {
    title: "정직한 소통",
    desc: "고객과의 투명한 소통이 좋은 결과의 시작이라 믿습니다. 견적부터 시공까지 모든 과정을 함께합니다.",
  },
  {
    title: "디테일의 힘",
    desc: "마감재 하나, 조명 각도 하나까지. 사소한 디테일이 공간의 품격을 결정합니다.",
  },
  {
    title: "사람을 위한 공간",
    desc: "트렌드를 좇기보다 그곳에 사는 사람의 일상을 먼저 생각합니다. 좋은 공간은 좋은 삶을 만듭니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="회사 소개"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">회사 소개</h1>
          <p className="text-gray-300 max-w-md mx-auto">
            15년의 경험, 500개의 프로젝트. 공간에 빛을 더해온 여정입니다.
          </p>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?w=800&q=80"
                  alt="대표이사"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">CEO Message</p>
                <h2 className="text-3xl font-bold text-charcoal mb-6">
                  좋은 공간은<br />좋은 삶을 만듭니다
                </h2>
                <div className="space-y-4 text-gray-500 leading-relaxed">
                  <p>
                    안녕하세요. 루미에르 인테리어 대표 김현우입니다.
                  </p>
                  <p>
                    15년간 500개 이상의 공간을 만들어 오면서 확신하게 된 것이 있습니다.
                    좋은 인테리어는 단순히 예쁜 공간을 만드는 것이 아니라,
                    그곳에서 생활하는 사람의 일상을 바꾸는 것이라는 사실입니다.
                  </p>
                  <p>
                    루미에르는 &lsquo;빛&rsquo;이라는 뜻의 프랑스어입니다.
                    우리는 모든 공간에 빛을 더합니다.
                    자연광이 닿는 동선, 조명이 만드는 분위기,
                    그리고 고객의 눈이 빛나는 순간까지.
                  </p>
                  <p>
                    앞으로도 정직한 소통과 세심한 디테일로
                    한 분 한 분의 공간에 최선을 다하겠습니다.
                  </p>
                </div>
                <div className="mt-8">
                  <p className="font-bold text-charcoal">김현우</p>
                  <p className="text-sm text-taupe">루미에르 인테리어 대표이사</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">Our Values</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">우리의 철학</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i + 1}>
                <div className="bg-white p-8 rounded-sm h-full">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mb-5">
                    <span className="text-gold font-bold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">{v.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">History</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">연혁</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year}>
                <div className="flex gap-6 items-start py-5 border-b border-cream-dark last:border-0">
                  <span className="text-gold font-bold text-lg w-16 flex-shrink-0">{item.year}</span>
                  <p className="text-charcoal">{item.event}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "완공 프로젝트" },
              { number: "98%", label: "고객 만족도" },
              { number: "15년", label: "업력" },
              { number: "50+", label: "전문 인력" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-gold mb-1">{stat.number}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
            함께 만들어 갈 다음 공간은 어디인가요?
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            무료 상담을 통해 이야기를 시작해 보세요.
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
