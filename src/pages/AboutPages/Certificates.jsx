import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumb";
import { useState } from "react";

const Certificates = () => {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState(null); // { index }

  const certImages = [
    { src: "/certs/sert-1.jpg", title: t("svidetelstvo_oficialnogo_diler") },
    { src: "/certs/sert-2.jpg", title: t("svidetelstvo") },
    { src: "/certs/sert-3.jpg", title: t("blagodarnost") },
    { src: "/certs/sert-4.jpg", title: t("diplom_uchastnika_vystavki") },
    { src: "/certs/sert-5.jpg", title: t("diplom_ctt") },
    { src: "/certs/sert-6.jpg", title: t("sertifikat_oficialnogo_dilera_") },
    { src: "/certs/sert-71.jpg", title: t("sertifikat_oficialnogo_dilera__1") },
    { src: "/certs/sert-7.jpg", title: t("blagodarstvennoe_pismo") },
    { src: "/certs/sert-8.jpg", title: t("sertifikat_hyundai") },
    { src: "/certs/sert-9.jpg", title: t("sertifikat_kmu_rus") },
    { src: "/certs/sert-10.jpg", title: "COMVEX 2023" },
  ];

  const openLightbox = (i) => setLightbox({ index: i });
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox(lb => ({ index: (lb.index - 1 + certImages.length) % certImages.length }));
  const next = () => setLightbox(lb => ({ index: (lb.index + 1) % certImages.length }));

  return (
    <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb />
        <h1 className="text-2xl font-semibold mb-8">{t("sertifikaty")}</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {certImages.map((cert, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className="border border-gray-200 rounded overflow-hidden cursor-pointer hover:shadow-md transition duration-300 group"
            >
              <div className="flex items-center justify-center relative">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<div class="w-full h-48 flex items-center justify-center bg-gray-100 text-gray-400 text-xs text-center p-4">${cert.title}</div>`;
                  }}
                />
                {/* Zoom icon on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <p className="text-xs text-center text-gray-500 py-2 px-2 truncate">{cert.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/92 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl w-12 h-12 flex items-center justify-center hover:text-yellow transition rounded-full hover:bg-white/10"
            onClick={e => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>

          {/* Image */}
          <div className="flex flex-col items-center max-w-[90vw] max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <img
              src={certImages[lightbox.index].src}
              alt={certImages[lightbox.index].title}
              className="max-h-[80vh] max-w-[85vw] object-contain rounded shadow-2xl"
            />
            <p className="mt-4 text-white/70 text-sm text-center">
              {certImages[lightbox.index].title}
            </p>
            <p className="text-white/40 text-xs mt-1">
              {lightbox.index + 1} / {certImages.length}
            </p>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl w-12 h-12 flex items-center justify-center hover:text-yellow transition rounded-full hover:bg-white/10"
            onClick={e => { e.stopPropagation(); next(); }}
          >
            ›
          </button>

          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
            onClick={closeLightbox}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default Certificates;
