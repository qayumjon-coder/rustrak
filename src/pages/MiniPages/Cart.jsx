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
  const toggleLike = (id) =>
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

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
    <section className="pt-35 pb-20 bg-light-gray/10">
      <div className="container">
        <div>
          <Breadcrumb />
        </div>

        <div>
          <h2 className="text-[32px] mb-8 font-medium">{t("korzina")}</h2>
        </div>
        <div className="flex gap-4">
          {cart.map((item) => (
            <div key={item.id} className="rounded flex w-full bg-white">
              <div className="relative bg-gray-50 h-45 flex items-center justify-center overflow-hidden rounded-t">
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
              <div className="p-3 pl-5 flex justify-between flex-1">
                <div>
                  <Link className="text-lg mb-4 leading-snug hover:text-yellow transition duration-200 line-clamp-2">
                    {item.title?.[language] || item.title?.ru || item.title}
                  </Link>
                  <p className="text-base font-bold text-gray-800 mb-3">
                    {item.price === t("cena_po_zaprosu")
                      ? t?.priceOnRequest || t("cena_po_zaprosu")
                      : item.price}
                  </p>

                  <div className="text-light-gray flex flex-col gap-2 text-sm">
                    <div className="flex gap-2">
                      Габариты ТС
                      <div className="w-100 h-5 border-dashed border-light-gray border-b"></div>
                      10650 x 2550 x 3705 мм
                    </div>
                    <div className="flex gap-2">
                      Грузоподъёмность
                      <div className="w-100 h-5 border-dashed border-light-gray border-b"></div>
                      17360 кг
                    </div>
                    <div className="flex gap-2">
                      Внутренний объём
                      <div className="w-100 h-5 border-dashed border-light-gray border-b"></div>
                      6645 куб. см.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 flex-wrap">
                  <button className="flex items-center gap-2 px-15 py-4 text-sm bg-yellow hover:bg-yellow-hov font-medium rounded transition duration-200">
                    {t?.getKPShort || t("poluchit_kp")}

                    <FiDownload size={20} />
                  </button>
                  <button
                    className="flex gap-2 items-center text-light-gray py-1.5 px-5 cursor-pointer"
                    onClick={() => removeFromCart(item.id)}
                    title={t("korzina")}
                  >
                    Удалить <FiTrash2 size={20} className="" />
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
export default Cart;
