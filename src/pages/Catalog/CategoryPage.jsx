import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumb";
import { Link, useParams } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { recommended_trucks, swiperCardTrck } from "../../object";
import { useContext, useState } from "react";
import { FiHeart, FiShoppingCart, FiDownload } from "react-icons/fi";
import { CartContext } from "../../components/CartContext";
import { FavorContext } from "../../components/FavorContext";
const CategoryPage = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const brands = [
    { label: t("gaz"), value: "ГАЗ" },
    { label: t("kamaz"), value: "КАМАЗ" },
    { label: "JAC", value: "JAC" },
    { label: "DAEWOO", value: "DAEWOO" },
    { label: "FOTON", value: "FOTON" },
    { label: "DONG FENG", value: "DONG FENG" },
    { label: t("maz"), value: "МАЗ" },
  ];
  const massOptions = [
    { label: t("do_12"), value: "do_12" },
    { label: t("do_20"), value: "do_20" },
    { label: t("do_5_5"), value: "do_5_5" },
    { label: t("svyshe_20"), value: "svyshe_20" },
  ];

  const getGoodsWord = (count) => {
    if (language === "uz") return "ta mahsulot";
    if (language === "en") return count === 1 ? "product" : "products";
    const mod10 = count % 10;
    const mod100 = count % 100;
    if (mod100 >= 11 && mod100 <= 19) return "товаров";
    if (mod10 === 1) return "товар";
    if (mod10 >= 2 && mod10 <= 4) return "товара";
    return "товаров";
  };

  const { addToCart } = useContext(CartContext);
  const { addToFavor } = useContext(FavorContext);

  const { category } = useParams();
  const [liked, setLiked] = useState({});
  const [view, setView] = useState("grid");
  const [searchBrand, setSearchBrand] = useState("");
  const [checkedBrands, setCheckedBrands] = useState({});
  const [checkedMass, setCheckedMass] = useState({});

  const currentCat =
    swiperCardTrck.find(
      (c) =>
        c.slug === category ||
        (category === "avtomobili-dopog-kategoriya-exii" && c.slug === "avtomobili-dopog-exii")
    ) || {
      id: 0,
      slug: category,
      title: { ru: category, uz: category, en: category },
      quantity: 0,
    };

  const toggleLike = (id) =>
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  const filteredBrands = brands.filter((b) =>
    b.label.toLowerCase().includes(searchBrand.toLowerCase()),
  );

  const hasBrand = Object.values(checkedBrands).some(Boolean);
  const hasMass = Object.values(checkedMass).some(Boolean);
  const isFiltered = hasBrand || hasMass;

  // Faqat shu kategoriyaga tegishli haqiqiy tovarlar
  const categoryTrucks = recommended_trucks.filter((item) => {
    return (
      item.category === currentCat.slug ||
      (currentCat.slug === "avtomobili-dopog-exii" &&
        (item.category === "avtomobili-dopog-exii" ||
          item.category === "avtomobili-dopog-kategoriya-exii"))
    );
  });

  // Filtr natijalari
  const filteredTrucks = categoryTrucks.filter((item) => {
    const brandMatch = !hasBrand || checkedBrands[item.brand];
    const massMatch = !hasMass || checkedMass[item.mass];
    return brandMatch && massMatch;
  });

  const categoryTitle =
    currentCat.title?.[language] ||
    currentCat.title?.ru ||
    currentCat.title;

  // Haqiqiy tovarlar soni: filtr bo'lsa filtr natijasi, bo'lmasa shu kategoriyadagi barcha haqiqiy tovarlar soni
  const countToShow = filteredTrucks.length;
  const countLabel = `${countToShow} ${getGoodsWord(countToShow)}`;

  return (
    <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb customLabels={{ [category]: categoryTitle }} />

        <div className="flex items-baseline gap-4 mb-6 flex-wrap">
          <h1 className="text-2xl font-bold">{categoryTitle}</h1>
          <span className="text-gray-400 text-sm">{countLabel}</span>
          <div className="ml-auto flex items-center gap-3 text-sm text-gray-500">
            <span>{t?.sorting || t("sortirovka")}</span>
            <span className="font-semibold text-gray-800">
              {t?.sortByBrand || t("po_brendu")}
            </span>
            {/* View toggle */}
            <div className="flex gap-1 ml-2">
              <button
                onClick={() => setView("list")}
                className={`p-1.5 rounded cursor-pointer ${view === "list" ? "bg-yellow" : "hover:bg-gray-100"}`}
                title={t("spisok")}
              >
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <rect
                    x="0"
                    y="1"
                    width="16"
                    height="3"
                    rx="1"
                    fill={view === "list" ? "#333" : "#aaa"}
                  />
                  <rect
                    x="0"
                    y="6.5"
                    width="16"
                    height="3"
                    rx="1"
                    fill={view === "list" ? "#333" : "#aaa"}
                  />
                  <rect
                    x="0"
                    y="12"
                    width="16"
                    height="3"
                    rx="1"
                    fill={view === "list" ? "#333" : "#aaa"}
                  />
                </svg>
              </button>
              <button
                onClick={() => setView("grid")}
                className={`p-1.5 rounded cursor-pointer ${view === "grid" ? "bg-yellow" : "hover:bg-gray-100"}`}
                title={t("setka")}
              >
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <rect
                    x="0"
                    y="0"
                    width="7"
                    height="7"
                    rx="1"
                    fill={view === "grid" ? "#333" : "#aaa"}
                  />
                  <rect
                    x="9"
                    y="0"
                    width="7"
                    height="7"
                    rx="1"
                    fill={view === "grid" ? "#333" : "#aaa"}
                  />
                  <rect
                    x="0"
                    y="9"
                    width="7"
                    height="7"
                    rx="1"
                    fill={view === "grid" ? "#333" : "#aaa"}
                  />
                  <rect
                    x="9"
                    y="9"
                    width="7"
                    height="7"
                    rx="1"
                    fill={view === "grid" ? "#333" : "#aaa"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <aside className="sticky top-5 hidden lg:flex flex-col gap-4 w-52 shrink-0">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <span className="font-semibold text-base">{t?.filters || "Фильтры"}</span>
              {isFiltered && (
                <button
                  onClick={() => {
                    setCheckedBrands({});
                    setCheckedMass({});
                    setSearchBrand("");
                  }}
                  className="text-xs text-gray-400 hover:text-black uppercase cursor-pointer transition"
                >
                  {t?.reset || "сбросить"}
                </button>
              )}
            </div>

            <div className="rounded">
              <p className="font-semibold text-sm mb-3">
                {t?.brand || t("marka")}
              </p>
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder={t?.find || t("nayti")}
                  value={searchBrand}
                  onChange={(e) => setSearchBrand(e.target.value)}
                  className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-yellow"
                />
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  <GoSearch size={18} />
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                {filteredBrands.map((b) => (
                  <label
                    key={b.value}
                    className="flex items-center gap-2 text-sm cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      className="accent-yellow w-3.5 h-3.5"
                      checked={!!checkedBrands[b.value]}
                      onChange={() =>
                        setCheckedBrands((p) => ({
                          ...p,
                          [b.value]: !p[b.value],
                        }))
                      }
                    />
                    {b.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-sm mb-3">
                {t?.fullMass || t("polnaya_massa_tonn")}
              </p>
              <div className="flex flex-col gap-1.5">
                {massOptions.map((m) => (
                  <label
                    key={m.value}
                    className="flex items-center gap-2 text-sm cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      className="accent-yellow w-3.5 h-3.5"
                      checked={!!checkedMass[m.value]}
                      onChange={() =>
                        setCheckedMass((p) => ({
                          ...p,
                          [m.value]: !p[m.value],
                        }))
                      }
                    />
                    {m.label}
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById("catalog-content");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full py-2.5 bg-yellow hover:bg-yellow-hov font-semibold text-sm rounded transition duration-200 cursor-pointer"
            >
              {t?.showGoods || t("pokazat_tovary")}
            </button>
          </aside>

          <div className="flex-1 min-w-0" id="catalog-content">
            {view === "grid" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredTrucks.map((item) => (
                  <div
                    key={item.id}
                    className="rounded flex flex-col hover:shadow-lg transition duration-300 bg-white shadow-sm"
                  >
                    <div className="relative bg-gray-50 h-52 flex items-center justify-center overflow-hidden rounded-t">
                      <button
                        onClick={() => {
                          addToFavor(item);
                          toggleLike(item.id);
                        }}
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
                          alt={
                            item.title?.[language] ||
                            item.title?.ru ||
                            item.title
                          }
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
                            addToFavor(item);
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
                        <a
                          href="/wtf-what-The-Fool.txt"
                          download="wtf-what-The-Fool.txt"
                          aria-label="Download the file"
                          className="text-xs text-gray-400 hover:text-yellow transition cursor-pointer ml-1"
                        >
                          {t?.getKPShort || t("poluchit_kp")}
                        </a>
                        <button className="p-1 text-gray-400 hover:text-yellow transition cursor-pointer ml-auto">
                          <FiDownload size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {view === "list" && (
              <div className="flex flex-col gap-4">
                {filteredTrucks.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-gray-100 flex flex-row hover:bg-gray-50 transition duration-200"
                  >
                    <div className="relative bg-grashrink-0 w-60 overflow-hidden rounded-l">
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
                      <Link
                        to={`/catalog/${category}/${item.id}`}
                        className="block w-full h-full"
                      >
                        <img
                          src={item.img}
                          alt={
                            item.title?.[language] ||
                            item.title?.ru ||
                            item.title
                          }
                          className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                        />
                      </Link>
                    </div>

                    <div className="flex-1 px-6 py-4 flex flex-col justify-center min-w-0">
                      <Link
                        to={`/catalog/${category}/${item.id}`}
                        className="text-base font-semibold text-gray-800 hover:text-yellow transition duration-200 mb-5 leading-snug"
                      >
                        {item.title?.[language] || item.title?.ru || item.title}
                      </Link>
                      <div className="flex flex-col gap-2.5 text-sm">
                        {[
                          {
                            label: t?.brand || t("marka"),
                            value: item.brand || "—",
                          },
                          item.dimensions && {
                            label: t?.dimensions || t("gabarity_ts"),
                            value: item.dimensions,
                          },
                          item.payload && {
                            label: t?.payload || t("gruzopodyomnost_kg"),
                            value: `${Number(item.payload).toLocaleString()} кг`,
                          },
                        ].filter(Boolean).map((spec, si) => (
                          <div key={si} className="flex items-baseline">
                            <span className="text-gray-500 shrink-0">
                              {spec.label}
                            </span>
                            <span className="flex-1 mx-2 border-b border-dotted border-gray-300 mb-0.5" />
                            <span className="text-gray-700 shrink-0">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0 w-44 flex flex-col items-center justify-center gap-3 px-4 py-4">
                      <p className="text-base font-bold text-gray-800 text-center">
                        {item.price === t("cena_po_zaprosu")
                          ? t?.priceOnRequest || t("cena_po_zaprosu")
                          : item.price}
                      </p>
                      <Link
                        to={`/catalog/${category}/${item.id}`}
                        className="w-full py-2 text-center text-sm bg-yellow hover:bg-yellow-hov font-semibold rounded transition duration-200"
                      >
                        {t?.more || t("podrobnee")}
                      </Link>
                      <a
                        href="/wtf-what-The-Fool.txt"
                        download="wtf-what-The-Fool.txt"
                        aria-label="Download the file"
                        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-yellow transition cursor-pointer"
                      >
                        {t?.getKPShort || t("poluchit_kp")}{" "}
                        <FiDownload size={13} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CategoryPage;
