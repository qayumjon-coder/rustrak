import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const pageTitles = {
  "/": { ru: "Главная", uz: "Bosh sahifa", en: "Home" },
  "/about": { ru: "О компании", uz: "Kompaniya haqida", en: "About" },
  "/catalog": { ru: "Каталог", uz: "Katalog", en: "Catalog" },
  "/news": { ru: "Новости", uz: "Yangiliklar", en: "News" },
  "/partners": { ru: "Партнёры", uz: "Hamkorlar", en: "Partners" },
  "/production": { ru: "Производство", uz: "Ishlab chiqarish", en: "Production" },
  "/suppliers": { ru: "Поставщикам", uz: "Ta'minotchilar", en: "Suppliers" },
  "/reviews": { ru: "Отзывы", uz: "Sharhlar", en: "Reviews" },
  "/cert": { ru: "Сертификаты", uz: "Sertifikatlar", en: "Certificates" },
  "/vacancies": { ru: "Вакансии", uz: "Vakansiyalar", en: "Vacancies" },
  "/leasing": { ru: "Кредит и лизинг", uz: "Kredit va lizing", en: "Leasing" },
  "/service": { ru: "Сервис", uz: "Xizmat", en: "Service" },
  "/repair": { ru: "Ремонт", uz: "Ta'mirlash", en: "Repair" },
  "/contacts": { ru: "Контакты", uz: "Kontaktlar", en: "Contacts" },
  "/photogallery": { ru: "Фотогалерея", uz: "Fotogalereya", en: "Photo Gallery" },
  "/video": { ru: "Видео", uz: "Video", en: "Video" },
  "/promo": { ru: "Рекламные материалы", uz: "Reklama materiallari", en: "Promo" },
  "/info": { ru: "Информация", uz: "Ma'lumot", en: "Info" },
  "/cart": { ru: "Корзина", uz: "Savat", en: "Cart" },
  "/favorites": { ru: "Избранное", uz: "Sevimlilar", en: "Favorites" },
};

const PageTitle = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const lang = i18n.language || "ru";

  useEffect(() => {
    const path = location.pathname;

    let titleObj = pageTitles[path];
    if (!titleObj && path.startsWith("/catalog")) {
      titleObj = { ru: "Каталог", uz: "Katalog", en: "Catalog" };
    }
    const pageTitle = titleObj ? titleObj[lang] || titleObj.ru : null;
    document.title = pageTitle
      ? `${pageTitle} — RusTrak`
      : "RusTrak — Автомобильный завод";
  }, [location.pathname, lang]);

  return null;
};

export default PageTitle;
