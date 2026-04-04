import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "../components/seo/json-ld";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kyuryo-lab.com"),
  title: "給料ラボ | 給与計算ツール",
  description:
    "残業代・手取り額を無料で即計算。スマホ対応のシンプルなUIで、給与に関する計算をサポートします。",
  verification: {
    google: "Ndqz372zHs5shJmpmc_n1bYjLCIt48NZrDvwwYPyGjc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6875835900503056"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-700 font-sans">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "給料ラボ",
            url: "https://kyuryo-lab.com",
            description:
              "残業代・手取り額を無料で即計算。スマホ対応のシンプルなUIで、給与に関する計算をサポートします。",
            inLanguage: "ja",
          }}
        />
        {children}
      </body>
    </html>
  );
}
