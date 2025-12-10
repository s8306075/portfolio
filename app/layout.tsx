import "./globals.css";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "魚也是貓 | 聽得懂需求的獨立全端開發者",
  description:
    "魚也是貓 - 專注於邏輯梳理與系統落地的獨立全端開發者。提供客製化網站開發、自動化系統建置與技術諮詢服務。",
  authors: [{ name: "魚也是貓" }],
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className="bg-beige text-umber">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
