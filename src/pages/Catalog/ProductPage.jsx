import { useTranslation } from 'react-i18next';
import Breadcrumb from "../../components/Breadcrumb";
import { useParams } from "react-router-dom";
import { recommended_trucks } from "../../object";
import { Link } from "react-router-dom";
import { FiHeart, FiMail } from "react-icons/fi";
const ProductPage = () => {
  const {
    t,
    i18n
  } = useTranslation();
  
  const allSpecs = [{
    label: t("bazovoe_shassi"),
    value: t("gaz_c41r33")
  }, {
    label: t("dvigatel"),
    value: t("yamz_534_s_turbonadduvom")
  }, {
    label: t("kpp"),
    value: t("mehanicheskaya_5_ti_stupenchat")
  }, {
    label: t("vysota_avtomobilya_mm"),
    value: "3667"
  }, {
    label: t("kolyosnaya_baza_mm"),
    value: "4515"
  }, {
    label: t("polnaya_massa_kg"),
    value: "8170"
  }, {
    label: t("vysota_podyoma_m"),
    value: "18"
  }, {
    label: t("gruzopodyomnost_lyulki_kg"),
    value: "10,7"
  }];
  
  const fullSpecs = [{
    label: t("model_avtomobilya_po_otts"),
    value: "43897"
  }, {
    label: t("shassi"),
    value: t("gaz_c41r33")
  }, {
    label: t("razmer_korziny_d_h_sh_h_v_m"),
    value: t("1_4_h_0_85_h_1_1")
  }, {
    label: t("baza_avtomobilya_mm"),
    value: "4515"
  }, {
    label: t("maksimalnaya_vysota_podyoma_m"),
    value: t("18_0_po_gost_r_53037")
  }, {
    label: t("maksimalnyy_gorizontalnyy_vyle"),
    value: "10,7"
  }, {
    label: t("maksimalnaya_gruzopodyomnost_k"),
    value: "300"
  }, {
    label: t("ugol_povorota_korziny_grad"),
    value: "+90 -:- -90"
  }];
  
  const categoryNames = {
    "shtornye-avtomobili": t("shtornye_avtomobili"),
    "krany-manipulyatory": t("krany_manipulyatory"),
    "avtotoplivozapravshchiki": t("avtotoplivozapravshchiki"),
    "avtogidropodyemniki": t("avtogidropodyomniki"),
    "avtotsisterny": t("avtocisterny"),
    "avtoevakuatory": t("avtoevakuatory"),
    "bortovye-avtomobili": t("bortovye_avtomobili"),
    "avtofurgony": t("izotermicheskie_furgony"),
    "konteynerovozy": t("konteynerovozy"),
    "kryukovye-pogruzchiki": t("kryukovye_pogruzchiki"),
    "samosvaly": t("samosvaly"),
    "avtomobili-dopog-kategoriya-exii": t("avtomobili_dopog_kategoriya_ex")
  };

  const language = i18n.language;
  const {
    category,
    productId
  } = useParams();
  const product = recommended_trucks.find(t => String(t.id) === String(productId)) || recommended_trucks[0];
  const catTitle = categoryNames[category] || category;
  return <section className="pt-35 mb-0">
      <div className="container">
        <Breadcrumb />

        <h1 className="text-xl font-bold uppercase mb-6">{product.title?.[language] || product.title?.ru || product.title}</h1>

        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Left: Image */}
          <div className="w-full lg:w-[55%]">
            <div className="border border-gray-200 rounded bg-gray-50 flex items-center justify-center h-80 lg:h-96 overflow-hidden">
              <img src={product.img} alt={product.title?.[language] || product.title?.ru || product.title} className="w-full h-full object-contain" />
            </div>
            <p className="text-sm text-red-500 mt-2 text-center">{t("skidka_16_ne_bolee_500_000_rub")}</p>
          </div>

          {/* Right: Info */}
          <div className="w-full lg:w-[45%]">
            <p className="text-2xl font-semibold mb-4">
              {product.price === t("cena_po_zaprosu") ? t?.priceOnRequest || t("cena_po_zaprosu") : product.price}
            </p>

            <div className="flex gap-3 mb-6">
              <button className="flex-1 py-2.5 bg-yellow hover:bg-yellow-hov font-semibold text-sm rounded transition duration-200 cursor-pointer">
                {t?.addToCart || t("dobavit_v_korzinu")}
              </button>
              <button className="flex-1 py-2.5 border border-yellow text-sm font-semibold rounded hover:bg-yellow hover:text-black transition duration-200 cursor-pointer">
                {t?.getKP || t("poluchit_kp")}
              </button>
            </div>

            {/* Quick specs */}
            <table className="w-full text-sm">
              <tbody>
                {allSpecs.map((s, i) => <tr key={i} className="border-b border-gray-100">
                    <td className="py-1.5 text-gray-500 w-1/2">{s.label}</td>
                    <td className="py-1.5 text-right font-medium">{s.value}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>

        {/* Full specs table */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">{t?.specs || t("harakteristiki")}</h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th colSpan={2} className="bg-yellow text-left px-4 py-2 font-semibold text-sm uppercase">{t("agp_palfinger_p_180t")}</th>
              </tr>
            </thead>
            <tbody>
              {fullSpecs.map((s, i) => <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-4 py-3 text-gray-600 border border-gray-100 w-1/2">
                    {s.label}
                  </td>
                  <td className="px-4 py-3 font-medium border border-gray-100 text-right">
                    {s.value}
                  </td>
                </tr>)}
            </tbody>
          </table>
          <div className="text-sm text-gray-500 mt-3 grid grid-cols-2 gap-x-8 gap-y-1">
            <span>{t("dlina_avtomobilya_mm")}<b>8680</b></span>
            <span>{t("shirina_avtomobilya_mm")}<b>2420</b></span>
            <span>{t("vysota_avtomobilya_mm")}<b>3667</b></span>
            <span>{t("kolyosnaya_formula")}<b>4x2</b></span>
            <span>{t("vylet_strely_m")}<b>10,7</b></span>
          </div>
        </section>

        {/* Similar products */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-6">{t?.similar || t("pohozhie_gruzoviki")}</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {recommended_trucks.slice(0, 6).map(item => <div key={item.id} className="border border-gray-200 rounded flex-shrink-0 w-44 flex flex-col hover:shadow-md transition duration-300">
                <div className="bg-gray-50 h-28 flex items-center justify-center overflow-hidden rounded-t">
                  <img src={item.img} alt={item.title?.[language] || item.title?.ru || item.title} className="h-full object-contain" />
                </div>
                <div className="p-2 flex flex-col flex-1">
                  <p className="text-xs mb-2 line-clamp-3">{item.title?.[language] || item.title?.ru || item.title}</p>
                  <div className="flex gap-1 mt-auto">
                    <Link to={`/catalog/${category}/${item.id}`} className="flex-1 py-1 text-center text-xs bg-yellow hover:bg-yellow-hov rounded transition duration-200">
                      {t?.more || t("podrobnee")}
                    </Link>
                    <button className="text-gray-400 hover:text-red-400 transition">
                      <FiHeart size={14} />
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
        </section>
      </div>
    </section>;
};
export default ProductPage;