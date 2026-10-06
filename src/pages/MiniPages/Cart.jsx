import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/CartContext";
import { useContext, useState } from "react";
import { FiDownload, FiHeart, FiTrash2 } from "react-icons/fi";
import { FavorContext } from "../../components/FavorContext";
const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const { addToFavor } = useContext(FavorContext);

  const { t, i18n } = useTranslation();
  const [liked, setLiked] = useState({});
  const [counts, setCounts] = useState({});

  const toggleLike = (id) =>
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

  const handleMinus = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: Math.max(0, Number(prev[id] ?? 1) - 1),
    }));
  };

  const handlePlus = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: Number(prev[id] ?? 1) + 1,
    }));
  };

  const handleCountChange = (id, value) => {
    const nextValue = value === "" ? 0 : Number(value);

    setCounts((prev) => ({
      ...prev,
      [id]: Number.isNaN(nextValue) ? 0 : Math.max(0, nextValue),
    }));
  };

  const language = i18n.language;

  if (cart.length === 0) {
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

              <div className="flex gap-5 mt-14 flex-col sm:flex-row">
                <a
                  href="/"
                  className="px-15 py-2.5 border-2 border-yellow rounded-sm hover:bg-yellow transition ease duration-300 text-center"
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
    <section className="pt-35 pb-20 bg-light-gray/10">
      <div className="container">
        <div>
          <Breadcrumb />
        </div>

        <div>
          <h2 className="text-[32px] mb-8 font-medium">{t("korzina")}</h2>
        </div>
        <div className="flex gap-4 flex-col">
          {cart.map((item) => (
            <div
              key={item.id}
              className="rounded flex flex-col lg:flex-row w-full bg-white"
            >
              <div className="relative bg-gray-50 h-full flex items-center justify-center overflow-hidden rounded-l">
                <button
                  onClick={() => {
                    addToFavor(item);
                    toggleLike(item.id);
                  }}
                  className="absolute top-2 right-2 z-10 cursor-pointer"
                >
                  <FiHeart
                    size={30}
                    strokeWidth={1}
                    className={
                      liked[item.id]
                        ? "fill-yellow"
                        : "text-black hover:text-yellow transition"
                    }
                  />
                </button>

                <img
                  src={item.img}
                  alt={item.title?.[language] || item.title?.ru || item.title}
                  className="w-full h-full  object-cover"
                />
              </div>
              <div className="p-3 pl-5 flex flex-col lg:flex-row gap-3 justify-between items-center flex-1">
                <div className="w-full lg:w-100 xl:w-150">
                  <Link className="text-lg mb-4 leading-snug hover:text-yellow transition duration-200 line-clamp-2 ">
                    {item.title?.[language] || item.title?.ru || item.title}
                  </Link>
                  <p className="text-base font-bold text-gray-800 mb-3">
                    {item.price === t("cena_po_zaprosu")
                      ? t?.priceOnRequest || t("cena_po_zaprosu")
                      : item.price}
                  </p>

                  <div className="text-light-gray flex flex-col gap-2 text-sm">
                    <div className="flex gap-2 w-full justify-between">
                      {t("gabarity_ts_label")}
                      <div className="w-[30%] md:w-[50%] xl:w-90 h-5 border-dashed border-light-gray border-b"></div>
                      10650 x 2550 x 3705 мм
                    </div>
                    <div className="flex gap-2 w-full justify-between">
                      {t("gruzopodyomnost_label")}
                      <div className="w-[30%] md:w-[50%] xl:w-90 h-5 border-dashed border-light-gray border-b"></div>
                      17360 кг
                    </div>
                    <div className="flex gap-2 w-full justify-between">
                      {t("vnutrenniy_obem")}
                      <div className="w-[30%] md:w-[50%] xl:w-90 h-5 border-dashed border-light-gray border-b"></div>
                      6645 куб. см.
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap w-full lg:w-auto items-center justify-between lg:gap-3 flex-row lg:flex-col 2xl:flex-row">
                  {/* Counter */}
                  <div className="flex w-30 items-center mt-5">
                    <div className="flex h-9 items-center justify-center w-full relative border border-light-gray/30 rounded-lg">
                      <button
                        className="border absolute border-yellow -left-px w-2/7 h-full bg-yellow rounded-l-sm cursor-pointer font-medium"
                        onClick={() => handleMinus(item.id)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="no-spinner flex pl-10 pr-10 w-full h-full text-center outline-amber-300 focus:outline-1 rounded-sm"
                        onChange={(e) => handleCountChange(item.id, e.target.value)}
                        value={counts[item.id] ?? 1}
                        name={`Counter input value ${item.id}`}
                      />
                      <button
                        className="border absolute border-yellow w-2/7 h-full bg-yellow -right-px justify-self-end rounded-r-sm cursor-pointer font-medium"
                        onClick={() => handlePlus(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-2 mt-10 lg:mt-0 flex-wrap">
                    <a
                      href="/wtf-what-The-Fool.txt"
                      download="wtf-what-The-Fool.txt"
                      aria-label="Download the file"
                      className="flex items-center gap-2 cursor-pointer px-15 py-4 text-sm bg-yellow hover:bg-yellow-hov font-medium rounded transition duration-200"
                    >
                      {t?.getKPShort || t("poluchit_kp")}

                      <FiDownload size={20} />
                    </a>
                    <button
                      className="flex gap-2 items-center text-light-gray py-1.5 px-5 cursor-pointer"
                      onClick={() => removeFromCart(item.id)}
                      title={t("korzina")}
                    >
                      {t("udalit")} <FiTrash2 size={20} className="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Cart;
