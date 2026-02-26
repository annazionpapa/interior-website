"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const showWhite = scrolled || !isHome || mobileOpen;
  const headerBg = showWhite
    ? "bg-white/95 backdrop-blur-md shadow-sm"
    : "bg-transparent";
  const textColor = showWhite ? "text-charcoal" : "text-white";
  const logoColor = showWhite ? "text-charcoal" : "text-white";

  return (
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
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base py-3 border-b border-gray-50 transition-colors ${
                pathname === item.href ? "text-gold font-semibold" : "text-charcoal"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 mb-2 bg-charcoal text-white text-center py-3.5 rounded-sm text-sm font-semibold"
          >
            무료 상담 신청하기
          </Link>
        </nav>
      </div>
    </header>
  );
}
