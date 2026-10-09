import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumb";
import { swiperCardTrck, recommended_trucks } from "../../object";
import { Link } from "react-router-dom";

const CatalogPage = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const getModelsWord = (count) => {
    if (language === "uz") return "ta model";
    if (language === "en") return count === 1 ? "model" : "models";
    const mod10 = count % 10;
    const mod100 = count % 100;
    if (mod100 >= 11 && mod100 <= 19) return "моделей";
    if (mod10 === 1) return "модель";
    if (mod10 >= 2 && mod10 <= 4) return "модели";
    return "моделей";
  };

  const getCategoryCount = (slug) => {
    return recommended_trucks.filter(
      (item) =>
        item.category === slug ||
        (slug === "avtomobili-dopog-exii" &&
          (item.category === "avtomobili-dopog-exii" ||
            item.category === "avtomobili-dopog-kategoriya-exii"))
    ).length;
  };

  const items = swiperCardTrck;
  return (
    <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 border-l border-t border-gray-200">
          {items.map((item) => {
            const catCount = getCategoryCount(item.slug);
            return (
              <Link
                key={item.id}
                to={`/catalog/${item.slug}`}
                className="border-r border-b border-gray-200 flex flex-col items-start p-4 hover:bg-gray-50 transition duration-200 group"
              >
                <p className="font-semibold text-[15px] mb-0.5 group-hover:text-yellow transition duration-200">
                  {item.title?.[language] || item.title?.ru || item.title}
                </p>
                <p className="text-sm text-gray-400 mb-3">
                  {catCount} {getModelsWord(catCount)}
                </p>
                <div className="w-full flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title?.[language] || item.title?.ru || item.title}
                    className="h-36 object-contain group-hover:scale-105 transition duration-300"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default CatalogPage;
