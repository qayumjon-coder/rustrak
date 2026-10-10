import { useParams, Link } from "react-router-dom";
import { news } from "../object";
import { useTranslation } from "react-i18next";
import { MoveLeft, MoveRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const NewsDetailPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const language = (i18n.language || "ru").split("-")[0];

  const getLocalizedText = (value) => {
    if (!value) return "";
    if (typeof value === "string") return value;

    return value[language] || value.ru || value.en || Object.values(value)[0] || "";
  };

  const currentNews = news.find((item) => String(item.id) === String(id));
  const otherNews = news.filter((item) => String(item.id) !== String(id)).slice(0, 4);

  if (!currentNews) {
    return (
      <section className="pt-35 pb-20">
        <div className="container text-center">
          <h1 className="text-2xl font-bold mb-5">
            {t("newsNotFound") || "Новость не найдена"}
          </h1>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-yellow hover:text-yellow-hov transition"
          >
            <MoveLeft size={20} />
            {t("backToNews") || "Вернуться к новостям"}
          </Link>
        </div>
      </section>
    );
  }

  const title = getLocalizedText(currentNews.title);
  const content = getLocalizedText(currentNews.content) || title;

  return (
    <>
      <section className="pt-35 pb-20 bg-gray-low min-h-screen">
        <div className="container">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-yellow transition mb-6 font-medium"
          >
            <MoveLeft size={18} />
            {t("nazad") || "Назад"}
          </Link>

          <h1 className="text-3xl md:text-[40px] font-semibold text-gray-900 mb-4 leading-tight max-w-5xl">
            {t("pervyy_v_rossii_konteynerovoz_") || title}
          </h1>

          <p className="text-yellow text-lg font-semibold mb-10">
            {currentNews.date}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="text-gray-800 text-[17px] leading-relaxed">
              <p>{t("pervyy_v_rossii_konteynerovoz_") || content}</p>
            </div>

            <div className="w-full">
              <img
                src={currentNews.img}
                alt={title}
                className="w-full h-auto rounded-md object-cover shadow-sm mb-5"
              />
            </div>
          </div>
        </div>

        {otherNews.length > 0 && (
          <div className="container mt-24">
            <h2 className="text-3xl font-semibold mb-8">{t("eshche_novosti") || "Ещё новости"}</h2>

            <Swiper
              className=""
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >
              {otherNews.map((item) => {
                const itemTitle = getLocalizedText(item.title);

                return (
                  <SwiperSlide key={item.id} className="h-auto">
                    <div className="bg-white flex h-full flex-col p-5 rounded-md hover:shadow-md transition">
                      <p className="text-sm font-medium text-gray-600 mb-2">{item.date}</p>

                      <Link to={`/news/${item.id}`} className="mb-4 block">
                        <h3 className="text-lg font-bold text-gray-900 line-clamp-3 hover:text-yellow transition">
                          {t("pervyy_v_rossii_konteynerovoz_") || itemTitle}
                        </h3>
                      </Link>

                      <div className="mt-auto">
                        <Link
                          to={`/news/${item.id}`}
                          className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow transition font-medium"
                        >
                          {t("podrobnee") || "Подробнее"}
                          <MoveRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}
      </section>
    </>
  );
};

export default NewsDetailPage;
