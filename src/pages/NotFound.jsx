import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <section
      className="bg-white flex items-center justify-center"
      style={{ minHeight: "calc(100vh - 160px)", paddingTop: "120px", paddingBottom: "60px" }}
    >
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">

          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xs">
            <span
              className="font-bold text-yellow leading-none select-none"
              style={{ fontSize: "clamp(100px, 16vw, 190px)", lineHeight: 1 }}
            >
              404
            </span>

            <h1
              className="font-semibold text-yellow mt-2 mb-4"
              style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}
            >
              {t("page_not_found") || "Страница не найдена"}
            </h1>

            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-[280px]">
              {t("page_not_found_desc") ||
                "Пожалуйста воспользуйтесь навигацией или формой поиска, чтобы найти интересующую Вас информацию."}
            </p>

            <Link
              to="/catalog"
              className="bg-yellow hover:bg-yellow-hov text-gray-900 font-medium text-sm py-2.5 px-10 transition duration-200"
              style={{ minWidth: "200px", textAlign: "center" }}
            >
              {t("go_to_catalog") || "Перейти в каталог"}
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full max-w-[480px] lg:max-w-[560px] xl:max-w-[620px]">
            <img
              src="/images/trucks/for-404_page.png"
              alt="404 Truck"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default NotFound;
