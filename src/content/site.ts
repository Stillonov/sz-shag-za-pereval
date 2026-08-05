export const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/trips", label: "Путешествия" },
  { href: "/contacts", label: "Контакты" },
] as const;

// TODO: заменить заглушки Telegram / VK на реальные ссылки
export const contacts = {
  email: "hello@shagzapereval.ru",
  phone: "+7 913 000 00 00",
  phoneHref: "tel:+79130000000",
  telegram: "#",
  vk: "#",
} as const;

export const site = {
  name: "Шаг за перевал",
  tagline: "Бюро горных экспедиций",
  copyright: "© 2026 Шаг за перевал · Все права защищены",
} as const;
