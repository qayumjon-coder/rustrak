import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumb";
const Suppliers = () => {
  const { t } = useTranslation();
  return (
    <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb />
        <h1 className="text-2xl font-semibold mb-6">
          {t("postavshchikam_i_partnyoram")}
        </h1>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {t("ooo_rustrak_priglashaet_k_sotr")}
        </h2>

        <p className="text-base text-gray-700 leading-relaxed mb-4">
          {t("nasha_kompaniya_17_let_rabotae")}
        </p>

        <p className="text-base text-gray-700 leading-relaxed mb-4">
          {t("my_priglashaem_k_sotrudnichest")}
          <br />
          {t("nasha_kompaniya_zainteresovana")}
        </p>

        <p className="text-base text-gray-700 leading-relaxed mb-4">
          {t("my_cenim_v_partnyorah")}
        </p>

        <ol className="mb-6 space-y-3">
          {[
            t("vysokokachestvennuyu_produkciy"),
            t("gibkuyu_cenovuyu_politiku"),
            t("regulyarnoe_informirovanie_ob_"),
            t("minimalnye_sroki_postavki"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-yellow flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <span
                className={`text-base text-gray-700 leading-relaxed mt-0.5 ${i === 3 ? "font-semibold" : ""}`}
              >
                {item}
              </span>
            </li>
          ))}
        </ol>

        <p className="text-base text-gray-700 leading-relaxed mb-4">
          {t("osnovnye_principy_ooo_rustrak_")}
        </p>

        <p className="text-base text-gray-700 leading-relaxed mb-4">
          {t("doverie")}
          <br />
          {t("chestnost")}
          <br />
          {t("vzaimopomoshch")}
        </p>

        <p className="text-base text-gray-700 leading-relaxed mb-6">
          {t("dolgosrochnoe_sotrudnichestvo_")}
          <br />
          {t("vsegda_rady_vam")}
        </p>
      </div>
    </section>
  );
};
export default Suppliers;
