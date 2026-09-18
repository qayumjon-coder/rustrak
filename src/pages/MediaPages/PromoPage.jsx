import { useTranslation } from 'react-i18next';
import Breadcrumb from "../../components/Breadcrumb";

const PromoPage = () => {
  const {
    t
  } = useTranslation();

  const promoItems = [{
    category: t("ooo_rustrak"),
    items: [{
      label: t("zavod_dorabotchik_kommerchesko"),
      files: []
    }]
  }, {
    category: t("avtotoplivozapravshchiki"),
    items: [{
      label: t("listovka_gaz_next"),
      files: []
    }, {
      label: t("listovka_gaz"),
      files: []
    }, {
      label: t("listovka_fuso"),
      files: []
    }]
  }, {
    category: t("pishchevye_cisterny"),
    items: [{
      label: t("listovka_gaz_next_pishchevaya_"),
      files: []
    }, {
      label: t("listovka_fuso_pishchevaya_cist"),
      files: []
    }]
  }];

  return <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb />
        <h1 className="text-2xl font-semibold mb-8">{t("reklamnye_materialy")}</h1>

        <div className="flex flex-col gap-8">
          {promoItems.map((group, gi) => <div key={gi}>
              <h2 className="text-lg font-semibold mb-3 text-gray-800">
                {group.category}
              </h2>
              <ul className="flex flex-col gap-1">
                {group.items.map((item, ii) => <li key={ii}>
                    <a href="#" className="text-base text-gray-700 hover:text-yellow transition duration-200" onClick={e => e.preventDefault()}>
                      {item.label}
                    </a>
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </section>;
};
export default PromoPage;