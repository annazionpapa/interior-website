"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/portfolio", label: "포트폴리오" },
  { href: "/services", label: "서비스" },
  { href: "/process", label: "시공 프로세스" },
  { href: "/about", label: "회사 소개" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 페이지 이동 시 메뉴 닫기
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // 모바일 메뉴 열릴 때 배경 스크롤 완전 차단 (iOS 대응)
  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      if (top) {
        window.scrollTo(0, parseInt(top, 10) * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const isHome = pathname === "/";

  // 메뉴가 열려 있으면 항상 흰색 헤더
  const showWhite = scrolled || !isHome || mobileOpen;
  const headerBg = showWhite
    ? "bg-white/95 backdrop-blur-md shadow-sm"
    : "bg-transparent";
  const textColor = showWhite ? "text-charcoal" : "text-white";
  const logoColor = showWhite ? "text-charcoal" : "text-white";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className={`text-xl font-bold tracking-tight transition-colors ${logoColor}`}>
              <span className="text-gold">L</span>umière
              <span className="text-sm font-normal ml-1.5 tracking-widest uppercase">Interior</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[15px] font-medium transition-colors hover:text-gold ${
                    pathname === item.href ? "text-gold" : textColor
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`px-5 py-2.5 text-sm font-semibold rounded-sm transition-all ${
                  scrolled || !isHome
                    ? "bg-charcoal text-white hover:bg-charcoal-light"
                    : "bg-white text-charcoal hover:bg-ivory"
                }`}
              >
                무료 상담
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 ${textColor}`}
              aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - header 바깥에 독립 배치 */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-20 z-40 bg-white overflow-y-auto"
          onClick={closeMobile}
        >
          <nav
            className="flex flex-col px-6 py-8 gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg py-3 border-b border-gray-100 transition-colors ${
                  pathname === item.href ? "text-gold font-semibold" : "text-charcoal"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-6 bg-charcoal text-white text-center py-4 rounded-sm text-base font-semibold"
            >
              무료 상담 신청하기
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
