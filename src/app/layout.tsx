import type { Metadata } from "next";
import { JetBrains_Mono, Onest, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
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
        {/* Контент перекрывает футер и «уезжает» с него при скролле —
            футер прибит к низу вьюпорта и лежит ниже по z-оси. */}
        <div className="bg-bg relative z-10 flex min-h-dvh flex-col">
          <Nav />
          {children}
        </div>
        <div className="sticky bottom-0 z-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
