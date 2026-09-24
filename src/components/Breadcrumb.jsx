import { useTranslation } from "react-i18next";
// components/Breadcrumb.jsx
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const { t } = useTranslation();

  const routeNames = {
    "": t("glavnaya"),
    about: t("o_kompanii"),
    catalog: t("katalog"),
    service: t("servis"),
    repair: t("remont"),
    news: t("novosti"),
    contacts: t("kontakty"),
    cart: t("korzina"),
    favorites: t("izbrannoe"),
    partners: t("nashi_partnyory"),
    production: t("proizvodstvo"),
    suppliers: t("postavshchikam_i_partnyoram"),
    reviews: t("otzyvy"),
    cert: t("sertifikaty"),
    vacancies: t("vakansii"),
    leasing: t("kredit_i_lizing"),
    photogallery: t("fotogalereya"),
    video: t("video"),
    promo: t("reklamnye_materialy"),
    info: t("informacionnye_materialy"),
  };

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  return (
    <nav className="text-sm text-light-gray py-3 pb-2.5 mb-6">
      <Link to="/" className="hover:text-yellow-500">
        {t("glavnaya")}
      </Link>
      {pathnames.map((segment, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;
        const label = routeNames[segment] || segment;
        return (
          <span key={to}>
            {" "}
            /{" "}
            {isLast ? (
              <span className="text-gray-700">{label}</span>
            ) : (
              <Link to={to} className="hover:text-yellow-500">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
