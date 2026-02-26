import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";

export const metadata: Metadata = {
  title: "루미에르 인테리어 | 공간에 빛을 더하다",
  description: "당신의 일상이 달라지는 공간. 주거·상업·사무실 인테리어 전문. 무료 상담부터 완공까지 함께합니다.",
  keywords: "인테리어, 리모델링, 주거인테리어, 상업인테리어, 사무실인테리어, 인테리어디자인",
  openGraph: {
    title: "루미에르 인테리어 | 공간에 빛을 더하다",
    description: "당신의 일상이 달라지는 공간. 주거·상업·사무실 인테리어 전문.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
