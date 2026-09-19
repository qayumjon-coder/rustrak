import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumb";
import { swiperCardTrck } from "../../object";
import { Link } from "react-router-dom";

const CatalogPage = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const slugs = [
    "avtotoplivozapravshchiki",
    "avtogidropodyemniki",
    "avtotsisterny",
    "avtoevakuatory",
    "avtofurgony",
    "konteynerovozy",
    "kryukovye-pogruzchiki",
    "samosvaly",
    "avtomobili-dopog-exii",
    "shtornye-avtomobili",
    "krany-manipulyatory",
  ];
  const items = swiperCardTrck.map((item, i) => ({
    ...item,
    slug: slugs[i] || `category-${item.id}`,
  }));
  return (
    <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 border-l border-t border-gray-200">
          {items.map((item) => (
            <Link
              key={item.id}
              to={`/catalog/${item.slug}`}
              className="border-r border-b border-gray-200 flex flex-col items-start p-4 hover:bg-gray-50 transition duration-200 group"
            >
              <p className="font-semibold text-[15px] mb-0.5 group-hover:text-yellow transition duration-200">
                {item.title?.[language] || item.title?.ru || item.title}
              </p>
              <p className="text-sm text-gray-400 mb-3">
                {item.quantity} {t?.models || t("modeley")}
              </p>
              <div className="w-full flex justify-center">
                <img
                  src={item.img}
                  alt={item.title?.[language] || item.title?.ru || item.title}
                  className="h-36 object-contain group-hover:scale-105 transition duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CatalogPage;
