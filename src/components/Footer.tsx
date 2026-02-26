import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* CTA Banner */}
      <div className="bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-taupe-light text-sm tracking-widest uppercase mb-3">
            Free Consultation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            아직 고민 중이신가요?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            부담 없이 물어보세요. 상담은 무료입니다.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-white px-8 py-4 text-base font-semibold hover:bg-gold-dark transition-colors rounded-sm"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold">
              <span className="text-gold">L</span>umière
              <span className="text-sm font-normal ml-1.5 tracking-widest uppercase">Interior</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              공간에 빛을 더하다.<br />
              당신의 일상이 달라지는 인테리어.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-taupe-light mb-4">
              서비스
            </h3>
            <ul className="space-y-2.5">
              {["주거 인테리어", "상업 인테리어", "사무실 인테리어"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-sm text-gray-400 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-taupe-light mb-4">
              회사
            </h3>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-gold transition-colors">회사 소개</Link></li>
              <li><Link href="/portfolio" className="text-sm text-gray-400 hover:text-gold transition-colors">포트폴리오</Link></li>
              <li><Link href="/process" className="text-sm text-gray-400 hover:text-gold transition-colors">시공 프로세스</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-taupe-light mb-4">
              연락처
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>서울특별시 강남구 테헤란로 123</li>
              <li>
                <a href="tel:02-1234-5678" className="hover:text-gold transition-colors">
                  02-1234-5678
                </a>
              </li>
              <li>
                <a href="mailto:hello@lumiere-interior.kr" className="hover:text-gold transition-colors">
                  hello@lumiere-interior.kr
                </a>
              </li>
              <li className="text-gray-500">평일 09:00 - 18:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2026 루미에르 인테리어. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold transition-colors text-sm font-bold">
              N
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
