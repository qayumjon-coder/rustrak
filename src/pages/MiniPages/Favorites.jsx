import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumb";
const Favorites = () => {
  const {
    t
  } = useTranslation();
  return <section className="pt-30 bg-gray-low">
          <div className="container">
            <div className="pt-6 pb-16">
              <div>
                <Breadcrumb />
              </div>
    
              <div>
                <div>
                  <h2 className="text-[32px] mb-8 font-medium">{t("korzina")}</h2>
    
                  <p className="text-[24px]">{t("vasha_korzina_pusta")}<br />{t("vospolzuytes_katalogom_ili_poi")}</p>
                </div>
    
                <div className="flex gap-5 mt-14">
                  <a href="/" className="px-15 py-2.5 border-2 border-yellow rounded-sm hover:bg-yellow transition ease duration-300">{t("na_glavnuyu")}</a>
                  <a href="/" className="px-10 py-2.5 flex items-center justify-center rounded-sm bg-yellow hover:bg-yellow-hov transition ease duration-300">{t("otkryt_katalog")}</a>
                </div>
              </div>
            </div>
          </div>
        </section>;
};
export default Favorites;