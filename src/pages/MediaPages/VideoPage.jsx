import { useTranslation } from 'react-i18next';
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import { FiPlayCircle } from "react-icons/fi";

const VideoPage = () => {
  const {
    t,
    i18n
  } = useTranslation();
  
  const texts = {
    ru: {
      title: t("videogalereya_proizvoditelya_a"),
      watchPhoto: t("smotret_foto"),
      videos: [{
        id: "dQw4w9WgXcQ",
        title: t("kran_manipulyator_nkts_na_shas")
      }, {
        id: "dQw4w9WgXcQ",
        title: t("kamaz_kompas_2022_sdvizhnaya_s")
      }, {
        id: "dQw4w9WgXcQ",
        title: t("krano_manipulyatornaya_ustanov")
      }, {
        id: "dQw4w9WgXcQ",
        title: t("evakuator_s_pryamoy_platformoy")
      }, {
        id: "dQw4w9WgXcQ",
        title: t("isuzu_giga_samosval_zernovoz")
      }, {
        id: "dQw4w9WgXcQ",
        title: t("hyundai_hd78_s_avtovyshkoy_agp")
      }, {
        id: "dQw4w9WgXcQ",
        title: t("toplivozapravshchik_5_2_m_kuba")
      }, {
        id: "dQw4w9WgXcQ",
        title: t("avtotoplivozapravshchik_gazon_")
      }]
    },
    uz: {
      title: "RusTrak maxsus avtotexnika ishlab chiqaruvchisining video galereyasi",
      watchPhoto: "Rasmlarni ko'rish",
      videos: [{
        id: "dQw4w9WgXcQ",
        title: "Kamaz Kompas shassisida NKTS kran-manipulyatori"
      }, {
        id: "dQw4w9WgXcQ",
        title: "KAMAZ Kompas 2022 | Suriluvchi Parda va Chodir Tomi | KAMAZ sharhi | Bortli yuk mashinasi |"
      }, {
        id: "dQw4w9WgXcQ",
        title: "FUSO Canter shassisida UNIC374K kran-manipulyator qurilmasi"
      }, {
        id: "dQw4w9WgXcQ",
        title: "ISUZU bazasida PALFINGER manipulyatoriga ega to'g'ri platformali evakuator"
      }, {
        id: "dQw4w9WgXcQ",
        title: "ISUZU GIGA samosval don tashuvchi"
      }, {
        id: "dQw4w9WgXcQ",
        title: "HANSIN AGP avtominorasi bilan Hyundai HD78"
      }, {
        id: "dQw4w9WgXcQ",
        title: "ISUZU NPR75 AT3 ELF 7 5 bazasida 5,2 kub metrli yonilg'i tashuvchi"
      }, {
        id: "dQw4w9WgXcQ",
        title: "GAZon NEXT yonilg'i tashuvchisi"
      }]
    },
    en: {
      title: "Video gallery of RusTrak special vehicle manufacturer",
      watchPhoto: "Watch photos",
      videos: [{
        id: "dQw4w9WgXcQ",
        title: "NKTS crane manipulator on Kamaz Kompas chassis"
      }, {
        id: "dQw4w9WgXcQ",
        title: "KAMAZ Kompas 2022 | Sliding Curtain and Awning Roof | KAMAZ Review | Flatbed Truck |"
      }, {
        id: "dQw4w9WgXcQ",
        title: "UNIC374K crane manipulator unit on FUSO Canter chassis"
      }, {
        id: "dQw4w9WgXcQ",
        title: "ISUZU-based tow truck with a straight platform and PALFINGER manipulator"
      }, {
        id: "dQw4w9WgXcQ",
        title: "ISUZU GIGA dump truck grain carrier"
      }, {
        id: "dQw4w9WgXcQ",
        title: "Hyundai HD78 with HANSIN AGP aerial platform"
      }, {
        id: "dQw4w9WgXcQ",
        title: "5.2 cubic meter fuel truck based on ISUZU NPR75 AT3 ELF 7 5"
      }, {
        id: "dQw4w9WgXcQ",
        title: "GAZon NEXT fuel truck"
      }]
    }
  };
  
  const language = i18n.language;
  const content = texts[language] || texts.ru;
  return <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb language={language} />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-xl font-semibold">
            {content.title}
          </h1>
          <Link to="/photogallery" className="flex-shrink-0 px-5 py-2 border border-gray-300 text-sm rounded hover:border-yellow hover:text-yellow transition duration-200">
            {content.watchPhoto}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {content.videos.map((v, i) => <div key={i} className="group">
              <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noreferrer" className="block relative overflow-hidden rounded bg-black mb-3">
                <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} className="w-full h-52 object-cover opacity-90 group-hover:opacity-75 transition duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                    <FiPlayCircle size={32} className="text-white fill-white" />
                  </div>
                </div>
              </a>
              <p className="text-sm font-medium text-gray-800 leading-snug">{v.title}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default VideoPage;