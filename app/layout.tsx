import type { Metadata } from "next";
import { Onest, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin", "cyrillic"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  // TODO: set once the production domain is known, e.g. new URL("https://sz-tours.ru")
  // metadataBase: new URL(""),
  title: "Шаг за перевал",
  description:
    "Авторские туры Сергея Жарахина: небольшие группы, маршруты вдали от людных троп и незабываемые горные пейзажи.",
  openGraph: {
    url: "/",
    title: "",
    description: "",
    locale: "",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${onest.variable} ${sourceSerif4.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
