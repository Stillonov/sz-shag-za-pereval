import type { Metadata } from "next";
import { JetBrains_Mono, Onest, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "cyrillic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Шаг за перевал — бюро горных экспедиций",
  description:
    "Авторские путешествия по горам: Северный Кавказ, Камчатка, Сулакский каньон, Сванетия.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${onest.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body>
        {/* Content sits above the footer and scrolls off it — the footer is
            pinned to the bottom of the viewport, lower on the z-axis. */}
        <div className="bg-bg relative z-10 flex min-h-dvh flex-col">
          <Header />
          {children}
        </div>
        <div className="sticky bottom-0 z-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
