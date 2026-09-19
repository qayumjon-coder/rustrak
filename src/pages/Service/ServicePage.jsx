import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumb";
const ServicePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="pt-35">
        <div className="container">
          <Breadcrumb />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="w-full  lg:w-217.5">
            <div className="mb-10">
              <h2 className="text-[32px] font-medium">
                {t("servis_po_garantiynomu_remontu")}
              </h2>

              <p className="py-5 text-lg">
                {t("posle_priobreteniya_produkcii_")}
              </p>
            </div>
            <div>
              <h3 className="text-[24px] mb-8 font-medium">
                {t("kak_poluchit_podderzhku")}
              </h3>
              <ul className="flex flex-col gap-8 pl-8 mb-18">
                <li className="flex gap-5 lg:flex-row flex-col">
                  <b className="bg-yellow w-9.5 h-9.5 rounded-full text-[24px] flex items-center justify-center">
                    1
                  </b>
                  <p className="text-lg">
                    <a href="#">{t("zapolnit_reklamacionnyy_akt")}</a>
                    {t("s_vneseniem_podpisi_otvetstven")}
                    <br />
                    {t("organizacii_podrobno_opisat_ha")}
                    <br />
                    {t("passazhirskoy_dveri_shildy_vys")}
                  </p>
                </li>
                <li className="flex gap-5 lg:items-center text-lg lg:flex-row flex-col items-start">
                  <b className="bg-yellow w-9.5 h-9.5 rounded-full text-[24px] flex items-center justify-center">
                    2
                  </b>
                  {t("sfotografirovat_neispravnosti_")}
                </li>
                <li className="mb-8 flex gap-5 lg:items-center lg:flex-row flex-col items-start">
                  <b className="bg-yellow w-9.5 h-9.5 rounded-full text-[24px] flex items-center justify-center">
                    3
                  </b>
                  <p className="text-lg">
                    {t("otpravit_zapolnennyy_akt_kopiy")}
                    <a href="malto:kb1@rtrf.ru">kb1@rtrf.ru</a>
                  </p>
                </li>
              </ul>

              <p className="text-lg mb-8.75">
                {t("posle_etogo_specialisty_garant")}
              </p>
              <p className="text-lg mb-5">
                {t("lyubye_voprosy_otnositelno_gar")}{" "}
                <a href="tel:88312250055`">{t("8_831_225_00_55_dob_610")}</a>
                {t("ili_po_elektronnoy_pochte")}{" "}
                <a href="malto:kb1@rtrf.ru">kb1@rtrf.ru</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ServicePage;
