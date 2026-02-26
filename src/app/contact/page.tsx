"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const spaceTypes = [
  "아파트",
  "빌라/주택",
  "카페/레스토랑",
  "사무실",
  "매장/상가",
  "기타",
];

const budgetRanges = [
  "1,000만원 이하",
  "1,000~3,000만원",
  "3,000~5,000만원",
  "5,000~1억원",
  "1억원 이상",
  "미정 (상담 후 결정)",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    spaceType: "",
    area: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `상담 신청이 완료되었습니다!\n\n` +
      `성함: ${formData.name}\n` +
      `연락처: ${formData.phone}\n` +
      `공간 유형: ${formData.spaceType}\n` +
      `면적: ${formData.area}\n` +
      `예산: ${formData.budget}\n\n` +
      `빠른 시일 내 연락드리겠습니다. 감사합니다.`
    );
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80"
            alt="상담 신청"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">상담 신청</h1>
          <p className="text-gray-300 max-w-md mx-auto">
            부담 없이 문의하세요. 전문 디자이너가 직접 상담해 드립니다.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                {submitted ? (
                  <div className="bg-white p-12 rounded-sm text-center">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-charcoal mb-3">상담 신청이 완료되었습니다</h2>
                    <p className="text-gray-500 mb-6">
                      영업일 기준 1일 이내로 연락드리겠습니다.<br />
                      감사합니다.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", phone: "", email: "", spaceType: "", area: "", budget: "", message: "" });
                      }}
                      className="text-gold font-semibold hover:underline"
                    >
                      새로운 상담 신청하기
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-sm">
                    <h2 className="text-2xl font-bold text-charcoal mb-2">무료 상담 신청</h2>
                    <p className="text-gray-400 text-sm mb-8">* 표시는 필수 입력 항목입니다</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          성함 <span className="text-gold">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="홍길동"
                          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-gold transition-colors bg-white"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          연락처 <span className="text-gold">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="010-0000-0000"
                          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-gold transition-colors bg-white"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          이메일
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email@example.com"
                          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-gold transition-colors bg-white"
                        />
                      </div>

                      {/* Space Type */}
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          공간 유형 <span className="text-gold">*</span>
                        </label>
                        <select
                          name="spaceType"
                          required
                          value={formData.spaceType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-gold transition-colors bg-white appearance-none"
                        >
                          <option value="">선택해 주세요</option>
                          {spaceTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      {/* Area */}
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          면적 (평수)
                        </label>
                        <input
                          type="text"
                          name="area"
                          value={formData.area}
                          onChange={handleChange}
                          placeholder="예: 32평"
                          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-gold transition-colors bg-white"
                        />
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          예산 범위
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-gold transition-colors bg-white appearance-none"
                        >
                          <option value="">선택해 주세요</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mt-5">
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        문의 내용
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="공간에 대한 고민이나 원하는 스타일을 자유롭게 적어주세요."
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-gold transition-colors bg-white resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-6 w-full py-4 bg-gold text-white font-semibold hover:bg-gold-dark transition-colors rounded-sm text-base"
                    >
                      무료 상담 신청하기
                    </button>

                    <p className="mt-4 text-xs text-gray-400 text-center">
                      상담 신청 시 개인정보 수집 및 이용에 동의하는 것으로 간주합니다.
                    </p>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={2}>
                <div className="space-y-8">
                  {/* Office Info */}
                  <div className="bg-white p-8 rounded-sm">
                    <h3 className="font-bold text-charcoal text-lg mb-6">찾아오시는 길</h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="text-sm text-charcoal font-medium">주소</p>
                          <p className="text-sm text-gray-500">서울특별시 강남구 테헤란로 123<br />루미에르빌딩 3층</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <p className="text-sm text-charcoal font-medium">전화</p>
                          <a href="tel:02-1234-5678" className="text-sm text-gray-500 hover:text-gold transition-colors">
                            02-1234-5678
                          </a>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="text-sm text-charcoal font-medium">이메일</p>
                          <a href="mailto:hello@lumiere-interior.kr" className="text-sm text-gray-500 hover:text-gold transition-colors">
                            hello@lumiere-interior.kr
                          </a>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="text-sm text-charcoal font-medium">영업시간</p>
                          <p className="text-sm text-gray-500">평일 09:00 - 18:00<br />토요일 10:00 - 15:00 (예약제)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Google Map */}
                  <div className="rounded-sm overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.354037563089!2d127.02761231531065!3d37.49798797981101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15aee9ab8f7%3A0x67b0f36b7bd4ea4d!2z6rCV64Ko7Jet!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="루미에르 인테리어 위치 - 강남역"
                      className="w-full"
                    />
                    <div className="bg-white px-4 py-3 border-t border-gray-100">
                      <p className="text-charcoal text-sm font-medium">강남역 3번 출구 도보 5분</p>
                      <p className="text-gray-400 text-xs mt-0.5">주차장 완비 (건물 지하 1~2층)</p>
                    </div>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-charcoal p-6 rounded-sm text-center">
                    <p className="text-white font-semibold mb-1">급하신 문의는 전화로!</p>
                    <a href="tel:02-1234-5678" className="text-gold text-2xl font-bold hover:text-gold-light transition-colors">
                      02-1234-5678
                    </a>
                    <p className="text-gray-400 text-xs mt-2">평일 09:00 - 18:00</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:hidden h-16" />
    </>
  );
}
