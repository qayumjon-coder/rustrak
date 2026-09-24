import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumb";

const Partners = () => {
  const { t } = useTranslation();

  const partners = [
    {
      name: t("kamaz"),
      description: t("gruppa_kompaniy_kamaz_krupneys"),
      site: null,
    },
    {
      name: t("gruppa_gaz"),
      description: t("gruppa_gaz_specializiruetsya_n"),
      site: null,
    },
    {
      name: t("ooo_traks_vostok_rus"),
      description: t("ooo_traks_vostok_rus_yavlyaets"),
      site: "https://compasstrucks.ru",
    },
    {
      name: t("publichnoe_akcionernoe_obshche"),
      description: t("publichnoe_akcionernoe_obshche_1"),
      site: "https://nefaz.ru",
    },
    {
      name: t("ooo_palfinger_kran_rus"),
      description: t("palfinger_kran_rus_sovmestnoe_"),
      site: "https://www.palfinger.ru",
    },
    {
      name: t("ooo_kmu_rus"),
      description: t("ooo_kmu_rus_realizuet_krany_ma"),
      site: "https://kmu-rus.ru",
    },
    {
      name: t("oao_zavod_start"),
      description: t("oao_zavod_start_specializiruet"),
      site: "http://zavod-start.ru",
    },
    {
      name: t("maz"),
      description: t("oficialnyy_distribyutor_kommer"),
      site: "https://maz.by",
    },
    {
      name: "JAC Motors RUS",
      description: t("kompaniya_jac_motors_rus_yavly"),
      site: "https://jaccar.ru",
    },
    {
      name: t("dunfen_trak_rus"),
      description: t("dunfen_trak_rus"),
      site: null,
    },
    {
      name: t("ooo_foton_motor"),
      description: t("kompaniya_ooo_foton_motor_osno"),
      site: "https://foton-motor.ru",
    },
    {
      name: t("ooo_ferro_ottimo"),
      description: t("fassi_eksklyuzivnyy_distribyut"),
      site: "https://fassi.ru",
    },
    {
      name: "FAW",
      description: "FAW",
      site: null,
    },
    {
      name: t("ooo_shakman_motors"),
      description: t("oficialnyy_distribyutor_gruzov"),
      site: "https://shacman.ru",
    },
  ];

  return (
    <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb />
        <h1 className="text-2xl font-semibold mb-8">{t("partnyory")}</h1>

        <div className="flex flex-col gap-0">
          {partners.map((p, i) => (
            <div key={i} className="border-b border-gray-200 py-6">
              <h2 className="text-lg font-semibold mb-2">{p.name}</h2>
              {p.description && p.description !== p.name && (
                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                  {p.description}
                </p>
              )}
              {p.site && (
                <a
                  href={p.site}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-yellow hover:underline"
                >
                  {p.site}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Partners;
