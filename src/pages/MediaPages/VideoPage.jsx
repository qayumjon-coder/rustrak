import { useTranslation } from 'react-i18next';
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import { useState } from "react";

const videos = [
  {
    id: "08tNWRWhfo0",
    ru: "Кран манипулятор HKTC на шасси Камаз Компас",
    uz: "Kamaz Kompas shassisida HKTC kran-manipulyatori",
    en: "HKTC crane manipulator on Kamaz Kompas chassis",
  },
  {
    id: "rD2Jr1l0kfM",
    ru: "КАМАЗ Компас 2022 | Сдвижная Штора и Крыша Тента | Обзор КАМАЗ | Грузовик с Бортом",
    uz: "KAMAZ Kompas 2022 | Suriluvchi Parda va Chodir Tom | KAMAZ sharhi | Bortli yuk mashinasi",
    en: "KAMAZ Kompas 2022 | Sliding Curtain and Awning Roof | KAMAZ Review | Flatbed Truck",
  },
  {
    id: "SZFOxY44O_Q",
    ru: "Крано-манипуляторная установка UNIC374К на шасси FUSO Canter",
    uz: "FUSO Canter shassisida UNIC374K kran-manipulyator qurilmasi",
    en: "UNIC374K crane manipulator unit on FUSO Canter chassis",
  },
  {
    id: "40Pt1Oi7r-s",
    ru: "Эвакуатор с прямой платформой на базе ISUZU с манипулятором PALFINGER",
    uz: "ISUZU bazasida PALFINGER manipulyatoriga ega to'g'ri platformali evakuator",
    en: "ISUZU-based tow truck with a straight platform and PALFINGER manipulator",
  },
  {
    id: "Cw-rxJR_RNg",
    ru: "ISUZU GIGA самосвал зерновоз",
    uz: "ISUZU GIGA samosval don tashuvchi",
    en: "ISUZU GIGA dump truck grain carrier",
  },
  {
    id: "Zm1lZ53PK2I",
    ru: "Hyundai HD78 с автовышкой АГП HANSIN",
    uz: "HANSIN AGP avtominorasi bilan Hyundai HD78",
    en: "Hyundai HD78 with HANSIN AGP aerial platform",
  },
  {
    id: "Zr9zpCgeEIU",
    ru: "Топливозаправщик 5,2 м куб на базе ISUZU NPR75 АТЗ ELF 7 5",
    uz: "ISUZU NPR75 AT3 ELF 7 5 bazasida 5,2 kub metrli yonilg'i tashuvchi",
    en: "5.2 cubic meter fuel truck based on ISUZU NPR75 AT3 ELF 7 5",
  },
  {
    id: "F2C_uBd3l5o",
    ru: "Автотопливозаправщик ГАЗон NEXT",
    uz: "GAZon NEXT yonilg'i tashuvchisi",
    en: "GAZon NEXT fuel truck",
  },
  {
    id: "EhAdt8qwvDw",
    ru: "Пищевая цистерна FUSO Canter",
    uz: "FUSO Canter oziq-ovqat sisternasi",
    en: "FUSO Canter food tanker",
  },
  {
    id: "7Ekr8KlqKi8",
    ru: "ISUZU грузовой бортовой со сдвижной крышей и боковыми шторками",
    uz: "ISUZU yuk mashinasi suriluvchi tom va yon pardali bortli",
    en: "ISUZU flatbed truck with sliding roof and side curtains",
  },
  {
    id: "LURhQdc2q8g",
    ru: "С наступающим новым годом!",
    uz: "Yangi yil muborak!",
    en: "Happy New Year!",
  },
  {
    id: "8hv6F9oxtYU",
    ru: "ГАЗОН NEXT с краном манипулятором UNIC",
    uz: "GAZON NEXT UNIC kran-manipulyatori bilan",
    en: "GAZON NEXT with UNIC crane manipulator",
  },
  {
    id: "isfTuPY2JjU",
    ru: "Автотопливозаправщик (АТЗ) Газон Некст",
    uz: "Gazov Next yonilg'i tashuvchisi (ATZ)",
    en: "Gazon Next fuel truck (ATZ)",
  },
  {
    id: "cx4412yyZM0",
    ru: "СТТ 2017 Итоги выставки ООО Рустрак",
    uz: "STT 2017 RusTrak MChJ ko'rgazmasi yakunlari",
    en: "STT 2017 RusTrak LLC exhibition results",
  },
  {
    id: "l9Cuj7xPE-w",
    ru: "Бортовая платформа со сдвижной крышей и шторкой ФОТОН 1093 / Commercial vehicle FOTON 1093",
    uz: "Suriluvchi tom va parda bilan FOTON 1093 bortli platforma / Commercial vehicle FOTON 1093",
    en: "Flatbed platform with sliding roof and curtain FOTON 1093 / Commercial vehicle FOTON 1093",
  },
  {
    id: "SrLMHIyOmQM",
    ru: "Кран-манипулятор ИНМАН ИТ90 на шасси ISUZU NQR90",
    uz: "ISUZU NQR90 shassisida INMAN IT90 kran-manipulyatori",
    en: "INMAN IT90 crane manipulator on ISUZU NQR90 chassis",
  },
];

const VideoPage = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h1 className="text-xl font-semibold">
            {t("videogalereya_proizvoditelya_a")}
          </h1>
          <Link
            to="/photogallery"
            className="flex-shrink-0 px-5 py-2 border border-gray-300 text-sm rounded hover:border-yellow hover:text-yellow transition duration-200"
          >
            {t("smotret_foto")}
          </Link>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {videos.map((v) => (
            <div key={v.id} className="group">
              {/* Thumbnail / embedded player */}
              {activeVideo === v.id ? (
                <div className="relative w-full rounded overflow-hidden mb-3" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${v.id}?autoplay=1`}
                    title={v[language] || v.ru}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <button
                  className="block relative w-full overflow-hidden rounded bg-black mb-3 cursor-pointer"
                  onClick={() => setActiveVideo(v.id)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v[language] || v.ru}
                    className="w-full h-52 object-cover opacity-90 group-hover:opacity-75 transition duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                      {/* Play icon */}
                      <svg className="w-7 h-7 text-white fill-white ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              )}
              <p className="text-sm font-medium text-gray-800 leading-snug">
                {v[language] || v.ru}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoPage;