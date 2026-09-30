import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumb";
import { useState } from "react";

const reviewImages = [
  "/images/reviews/review-1.jpg",
  "/images/reviews/review-2.jpg",
  "/images/reviews/review-3.jpg",
  "/images/reviews/review-4.jpg",
  "/images/reviews/review-5.jpg",
];

const Reviews = () => {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (i) => setLightbox({ index: i });
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox(lb => ({ index: (lb.index - 1 + reviewImages.length) % reviewImages.length }));
  const next = () => setLightbox(lb => ({ index: (lb.index + 1) % reviewImages.length }));

  return (
    <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb />
        <h1 className="text-2xl font-semibold mb-8">{t("otzyvy")}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reviewImages.map((src, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className="border border-gray-200 rounded overflow-hidden cursor-pointer hover:shadow-md transition duration-300 group relative"
            >
              <img
                src={src}
                alt={`${t("otzyvy")} ${i + 1}`}
                className="w-full object-cover group-hover:scale-105 transition duration-500"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.style.background = "#f9f9f9";
                  e.target.parentElement.style.minHeight = "220px";
                }}
              />
              {/* Zoom icon on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
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
              src={reviewImages[lightbox.index]}
              alt={`${t("otzyvy")} ${lightbox.index + 1}`}
              className="max-h-[82vh] max-w-[85vw] object-contain rounded shadow-2xl"
            />
            <p className="text-white/40 text-xs mt-3">
              {lightbox.index + 1} / {reviewImages.length}
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

export default Reviews;
