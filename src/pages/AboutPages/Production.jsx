import { useTranslation } from 'react-i18next';
import Breadcrumb from "../../components/Breadcrumb";
const Production = () => {
  const {
    t
  } = useTranslation();
  return <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb />
        <h1 className="text-2xl font-semibold mb-6">{t("proizvodstvo")}</h1>

        {/* Banner image */}
        <div className="mb-8 rounded overflow-hidden">
          <img src="/images/about-banner.jpg" alt={t("proizvodstvo_rustrak")} className="w-full h-64 object-cover object-center" />
        </div>

        <p className="text-base text-gray-700 leading-relaxed mb-10">{t("kompaniya_rustrak_vedushchiy_p")}</p>

        {/* Схема предприятия */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase mb-2">{t("shema_predpriyatiya")}<span className="ml-4 text-sm font-normal text-gray-400 normal-case">{t("rustrak")}</span>
          </h2>
          <p className="text-xl font-semibold mb-4 text-gray-800">{t("obshchaya_ploshchad")}<span className="font-bold">{t("22_000_m2")}</span>
          </p>

          {/* Schema diagram */}
          <div className="border-2 border-yellow rounded p-4 mb-6 grid grid-cols-4 grid-rows-2 gap-2 text-xs font-medium text-center relative">
            <div className="border border-gray-300 rounded p-3 bg-gray-50">{t("stoyanka_na_200_mashin")}</div>
            <div className="border border-gray-300 rounded p-3 bg-gray-50">{t("tyoplyy_sklad_600_m2")}</div>
            <div className="border border-gray-300 rounded p-3 bg-gray-50">{t("ofis")}</div>
            <div className="border-l-4 border-yellow px-2 flex items-center justify-center text-yellow font-bold row-span-2">{t("torfyanaya_35")}</div>
            <div className="border border-gray-300 rounded p-3 bg-gray-50">{t("sklad_agregatov")}</div>
            <div className="border-2 border-yellow rounded p-3 bg-yellow/10 font-bold">{t("proizvodstvennyy_korpus_3000_m")}</div>
            <div className="border-2 border-yellow rounded p-3 bg-yellow/20 font-bold col-span-1">{t("osnovnoe_proizvodstvo_4000_m2")}</div>
          </div>
          <div className="text-sm text-gray-500 mb-8">{t("sklad_metalla_kpp")}</div>
        </section>

        <p className="text-base text-gray-700 leading-relaxed mb-6">{t("proizvodstvennye_moshchnosti_r")}</p>

        {/* Высококвалифицированный персонал */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">{t("vysokokvalificirovannyy_person")}</h2>
          <p className="text-base text-gray-700 leading-relaxed mb-6">{t("zalog_kachestva_produkcii_ooo_")}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <img src="/images/proizvodstvo_1.png" alt={t("proizvodstvo_1")} className="w-full h-48 object-cover rounded" />
            <img src="/images/proizvodstvo_4.jpg" alt={t("proizvodstvo_4")} className="w-full h-48 object-cover rounded" />
            <img src="/images/proizvodstvo_2.png" alt={t("proizvodstvo_2")} className="w-full h-48 object-cover rounded" />
          </div>
        </section>

        {/* Конструкторское бюро */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">{t("sobstvennoe_konstruktorskoe_by")}</h2>
          <p className="text-base text-gray-700 leading-relaxed mb-6">{t("kompaniya_rustrak_imeet_sobstv")}</p>
          <img src="/images/proizvodstvo_3.jpg" alt={t("proizvodstvennyy_ceh")} className="w-full h-64 object-cover rounded" />
        </section>

        {/* Контроль качества */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">{t("kontrol_kachestva")}</h2>
          <p className="text-base text-gray-700 leading-relaxed mb-3">{t("kontrol_kachestva_nashey_produ")}</p>
          <p className="text-base text-gray-700 leading-relaxed">{t("otdel_kontrolya_kachestva_ocen")}</p>
        </section>
      </div>
    </section>;
};
export default Production;