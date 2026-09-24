import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumb";

const Certificates = () => {
  const { t } = useTranslation();

  const certImages = [
    {
      src: "/images/certs/cert-1.jpg",
      title: t("svidetelstvo_oficialnogo_diler"),
    },
    {
      src: "/images/certs/cert-2.jpg",
      title: t("svidetelstvo"),
    },
    {
      src: "/images/certs/cert-3.jpg",
      title: t("blagodarnost"),
    },
    {
      src: "/images/certs/cert-4.jpg",
      title: t("diplom_uchastnika_vystavki"),
    },
    {
      src: "/images/certs/cert-5.jpg",
      title: t("diplom_ctt"),
    },
    {
      src: "/images/certs/cert-6.jpg",
      title: t("sertifikat_oficialnogo_dilera_"),
    },
    {
      src: "/images/certs/cert-7.jpg",
      title: t("sertifikat_oficialnogo_dilera__1"),
    },
    {
      src: "/images/certs/cert-8.jpg",
      title: t("blagodarstvennoe_pismo"),
    },
    {
      src: "/images/certs/cert-9.jpg",
      title: t("sertifikat_hyundai"),
    },
    {
      src: "/images/certs/cert-10.jpg",
      title: t("sertifikat_kmu_rus"),
    },
    {
      src: "/images/certs/cert-11.jpg",
      title: "COMVEX 2023",
    },
  ];

  return (
    <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb />
        <h1 className="text-2xl font-semibold mb-8">{t("sertifikaty")}</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {certImages.map((cert, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded overflow-hidden cursor-pointer hover:shadow-md transition duration-300 group"
            >
              <div className="bg-gray-50 h-56 flex items-center justify-center overflow-hidden">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-xs text-center p-4">${cert.title}</div>`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Certificates;
