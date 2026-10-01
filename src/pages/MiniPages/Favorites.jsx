import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumb";
import { useContext, useState } from "react";
import { FiDownload, FiHeart, FiShoppingCart } from "react-icons/fi";
import { FavorContext } from "../../components/FavorContext";
import { CartContext } from "../../components/CartContext";
import { swiperCardTrck } from "../../object";
import { Link, useParams } from "react-router-dom";

const Favorites = () => {
  const { favor, removeFromFavor } = useContext(FavorContext);
  const { addToCart } = useContext(CartContext);

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
  const categories = swiperCardTrck.map((item, i) => ({
    ...item,
    slug: slugs[i] || `category-${item.id}`,
  }));

  const { category } = useParams();
  const { t, i18n } = useTranslation();
  const [liked, setLiked] = useState({});
  const currentCat =
    categories.find((c) => c.slug === category) || categories[0];
  const toggleLike = (id) =>
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

  const language = i18n.language;

  if (favor.length === 0) {
    return (
      <section className="pt-30 bg-gray-low">
        <div className="container">
          <div className="pt-6 pb-16">
            <div>
              <Breadcrumb />
            </div>

            <div>
              <div>
                <h2 className="text-[32px] mb-8 font-medium">{t("korzina")}</h2>

                <p className="text-[24px]">
                  {t("vasha_korzina_pusta")}
                  <br />
                  {t("vospolzuytes_katalogom_ili_poi")}
                </p>
              </div>

              <div className="flex gap-5 mt-14">
                <a
                  href="/"
                  className="px-15 py-2.5 border-2 border-yellow rounded-sm hover:bg-yellow transition ease duration-300"
                >
                  {t("na_glavnuyu")}
                </a>
                <a
                  href="/catalog"
                  className="px-10 py-2.5 flex items-center justify-center rounded-sm bg-yellow hover:bg-yellow-hov transition ease duration-300"
                >
                  {t("otkryt_katalog")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-35 pb-20 bg-gray-low">
      <div className="container">
        <div>
          <Breadcrumb />
        </div>

        <h1 className="text-2xl font-bold">
          {currentCat.title?.[language] ||
            currentCat.title?.ru ||
            currentCat.title}
        </h1>
        <span className="text-gray-400 text-sm">
          {currentCat.quantity} {t?.goods || t("tovarov")}
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {favor.map((item) => (
            <div
              key={item.id}
              className="rounded flex flex-col hover:shadow-lg transition duration-300 bg-white shadow-sm"
            >
              <div className="relative bg-gray-50 h-52 flex items-center justify-center overflow-hidden rounded-t">
                <button
                  onClick={() => toggleLike(item.id)}
                  className="absolute top-2 right-2 z-10 cursor-pointer"
                >
                  <FiHeart
                    size={18}
                    className={
                      liked[item.id]
                        ? "text-red-500 fill-red-500"
                        : "text-gray-300 hover:text-red-400 transition"
                    }
                  />
                </button>
                <Link to={`/catalog/${category}/${item.id}`}>
                  <img
                    src={item.img}
                    alt={item.title?.[language] || item.title?.ru || item.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </Link>
              </div>
              <div className="p-3 flex flex-col flex-1">
                <Link
                  to={`/catalog/${category}/${item.id}`}
                  className="text-sm font-medium mb-1.5 leading-snug hover:text-yellow transition duration-200 line-clamp-2"
                >
                  {item.title?.[language] || item.title?.ru || item.title}
                </Link>
                <p className="text-base font-bold text-gray-800 mb-3">
                  {item.price === t("cena_po_zaprosu")
                    ? t?.priceOnRequest || t("cena_po_zaprosu")
                    : item.price}
                </p>
                <div className="flex items-center gap-2 mt-auto flex-wrap">
                  <Link
                    to={`/catalog/${category}/${item.id}`}
                    className="px-4 py-1.5 text-sm bg-yellow hover:bg-yellow-hov font-semibold rounded transition duration-200"
                  >
                    {t?.more || t("podrobnee")}
                  </Link>
                  <button
                    className="p-1.5 border border-gray-200 rounded hover:border-yellow transition cursor-pointer"
                    onClick={() => addToCart(item)}
                    title={t("korzina")}
                  >
                    <FiShoppingCart size={15} className="text-gray-500" />
                  </button>
                  <button
                    onClick={() => {
                      removeFromFavor(item.id);
                      toggleLike(item.id);
                    }}
                    className="p-1.5 border border-gray-200 rounded hover:border-red-300 transition cursor-pointer"
                  >
                    <FiHeart
                      size={15}
                      className={
                        liked[item.id]
                          ? "text-red-500 fill-red-500"
                          : "text-gray-500"
                      }
                    />
                  </button>
                  <button className="text-xs text-gray-400 hover:text-yellow transition cursor-pointer ml-1">
                    {t?.getKPShort || t("poluchit_kp")}
                  </button>
                  <button className="p-1 text-gray-400 hover:text-yellow transition cursor-pointer ml-auto">
                    <FiDownload size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Favorites;
