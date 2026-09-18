import { useTranslation } from 'react-i18next';
import Breadcrumb from "../../components/Breadcrumb";
const InfoPage = () => {
  const {
    t
  } = useTranslation();
  return <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb />
        <h1 className="text-2xl font-semibold mb-8">{t("informacionnye_materialy")}</h1>

        <p className="text-gray-500 text-base">{t("razdel_nahoditsya_v_razrabotke")}</p>
      </div>
    </section>;
};
export default InfoPage;