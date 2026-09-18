import { useTranslation } from 'react-i18next';
import Breadcrumb from "../../components/Breadcrumb";
const Leasing = () => {
  const {
    t
  } = useTranslation();
  return <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb />
        <h1 className="text-xl font-semibold mb-6">{t("kredit_i_lizing_na_avtospecteh")}</h1>

        <p className="text-base text-gray-700 leading-relaxed mb-4">{t("kompaniya_rustrak_predostavlya")}</p>
        <p className="text-base text-gray-700 leading-relaxed mb-4">{t("my_rabotaem_so_vsemi_bankami_i")}</p>

        <h2 className="text-lg font-semibold mt-8 mb-3">{t("osnovnye_usloviya_lizinga")}</h2>
        <p className="text-base text-gray-700 leading-relaxed mb-6">{t("summa_avansa_5_30_ot_stoimosti")}</p>

        <h2 className="text-lg font-semibold mb-4">{t("preimushchestva_lizingovyh_she")}</h2>
        <p className="text-base text-gray-700 leading-relaxed mb-6">{t("maksimalnaya_otsrochka_platezh")}</p>

        <h2 className="text-lg font-semibold mb-5">{t("tri_osnovnyh_vida_lizinga")}</h2>
        <ol className="space-y-6 mb-10">
          {[{
          title: t("finansovyy_lizing"),
          text: t("lizingodatel_lizingovaya_kompa")
        }, {
          title: t("operativnyy_lizing"),
          text: t("imushchestvo_ne_vykupaetsya_li")
        }, {
          title: t("vozvratnyy_lizing"),
          text: t("predpriyatie_pokupaet_imushche")
        }].map((item, i) => <li key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold mb-1">{item.title}</p>
                <p className="text-gray-700 text-base leading-relaxed">{item.text}</p>
              </div>
            </li>)}
        </ol>

        <h2 className="text-lg font-semibold mb-4">{t("informaciya_o_partnyore_kompan")}</h2>
        <p className="text-base text-gray-700 leading-relaxed mb-2">{t("kompaniya_carcade_eto_universa")}</p>
        <p className="text-base text-gray-700 leading-relaxed">{t("za_polucheniem_bolee_podrobnoy")}{" "}
          <a href="tel:88312250055" className="text-yellow hover:underline font-medium">
            8 (831) 225-00-55
          </a>
        </p>
      </div>
    </section>;
};
export default Leasing;