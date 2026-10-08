import React from "react";
import { useParams, Link } from "react-router-dom";
import { news } from "../object";
import { useTranslation } from "react-i18next";
import { MoveLeft, MoveRight } from "lucide-react";
import ContactSec from "../components/ContactSec";

const NewsDetailPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const currentNews = news.find((item) => String(item.id) === String(id));
  const otherNews = news.filter((item) => String(item.id) !== String(id)).slice(0, 4);

  if (!currentNews) {
    return (
      <section className="pt-35 pb-20">
        <div className="container text-center">
          <h1 className="text-2xl font-bold mb-5">
            {t?.newsNotFound || "Новость не найдена"}
          </h1>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-yellow hover:text-yellow-hov transition"
          >
            <MoveLeft size={20} />
            {t?.backToNews || "Вернуться к новостям"}
          </Link>
        </div>
      </section>
    );
  }

  const title = currentNews.title?.[language] || currentNews.title?.ru || currentNews.title;
  const content = currentNews.content?.[language] || currentNews.content?.ru || title;

  return (
    <>
      <section className="pt-35 pb-20 bg-[#f9f9f9] min-h-screen">
        <div className="container">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-yellow transition mb-6 font-medium"
          >
            <MoveLeft size={18} />
            {t?.back || "Назад"}
          </Link>

          <h1 className="text-3xl md:text-[40px] font-semibold text-gray-900 mb-4 leading-tight max-w-5xl">
            {title}
          </h1>

          <p className="text-yellow text-lg font-semibold mb-10">
            {currentNews.date}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="text-gray-800 text-[17px] leading-relaxed">
              <p>{content}</p>
            </div>
            
            <div className="w-full">
              <img
                src={currentNews.img}
                alt={title}
                className="w-full h-auto rounded-md object-cover shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Ещё новости */}
        {otherNews.length > 0 && (
          <div className="container mt-24">
            <h2 className="text-3xl font-semibold mb-8">{t?.moreNews || "Ещё новости"}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherNews.map((item) => (
                <div key={item.id} className="bg-white flex flex-col p-5 rounded-md hover:shadow-md transition">
                  <p className="text-sm font-medium text-gray-600 mb-2">{item.date}</p>
                  <Link to={`/news/${item.id}`} className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-3 hover:text-yellow transition">
                      {item.title?.[language] || item.title?.ru || item.title}
                    </h3>
                  </Link>
                  <div className="mt-auto flex justify-between items-center">
                    <Link
                      to={`/news/${item.id}`}
                      className="flex items-center gap-2 text-gray-400 hover:text-yellow transition font-medium"
                    >
                      {t?.more || "Подробнее"}
                      <MoveRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default NewsDetailPage;
