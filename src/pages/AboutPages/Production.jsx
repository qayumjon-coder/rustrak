import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumb";
const Production = () => {
  const { t } = useTranslation();
  return (
    <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb />
        <h1 className="text-2xl font-semibold mb-6">{t("proizvodstvo")}</h1>

        <div className="mb-8 rounded overflow-hidden">
          <img
            src="/production-1.jpg"
            alt={t("proizvodstvo_rustrak")}
            className="w-full h-64 object-cover object-center"
          />
        </div>

        <p className="text-base text-gray-700 leading-relaxed mb-10">
          {t("kompaniya_rustrak_vedushchiy_p")}
        </p>

        <section className="mb-12">
          <div className="rounded mb-6 font-medium text-center relative">
            <img src="/production-scheme.jpg" alt="Production schema image" className="w-250"/>
          </div>
          <div className="text-sm text-gray-500 mb-8">
            {t("sklad_metalla_kpp")}
          </div>
        </section>

        <p className="text-base text-gray-700 leading-relaxed mb-6">
          {t("proizvodstvennye_moshchnosti_r")}
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">
            {t("vysokokvalificirovannyy_person")}
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            {t("zalog_kachestva_produkcii_ooo_")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6">
            <img
              src="/photo_production.jpg"
              alt={t("proizvodstvo_1")}
              className="w-full object-cover rounded"
            />
            <img
              src="/photo_production2.jpg"
              alt={t("proizvodstvo_2")}
              className="w-full object-cover rounded"
            />
            <img
              src="/photo_production3.jpg"
              alt={t("proizvodstvo_3")}
              className="w-full object-cover rounded"
            />
            <img
              src="/photo_production4.jpg"
              alt={t("proizvodstvo_4")}
              className="w-full object-cover rounded"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">
            {t("sobstvennoe_konstruktorskoe_by")}
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            {t("kompaniya_rustrak_imeet_sobstv")}
          </p>
          <img
            src="/production-2.jpg"
            alt={t("proizvodstvennyy_ceh")}
            className="w-full object-cover rounded"
          />
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">
            {t("kontrol_kachestva")}
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-3">
            {t("kontrol_kachestva_nashey_produ")}
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            {t("otdel_kontrolya_kachestva_ocen")}
          </p>
        </section>
      </div>
    </section>
  );
};
export default Production;
