import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumb";
const reviewImages = [
  "/images/reviews/review-1.jpg",
  "/images/reviews/review-2.jpg",
  "/images/reviews/review-3.jpg",
  "/images/reviews/review-4.jpg",
  "/images/reviews/review-5.jpg",
];
const Reviews = () => {
  const { t } = useTranslation();
  return (
    <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb />
        <h1 className="text-2xl font-semibold mb-8">{t("otzyvy")}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reviewImages.map((src, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded overflow-hidden cursor-pointer hover:shadow-md transition duration-300"
            >
              <img
                src={src}
                alt={`Отзыв ${i + 1}`}
                className="w-full object-cover hover:scale-105 transition duration-500"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.style.background = "#f9f9f9";
                  e.target.parentElement.style.minHeight = "220px";
                }}
              />
            </div>
          ))}
        </div>

        {/* <div className="mt-6 text-gray-500 text-sm">
          {t("otzyvy_nashih_klientov_predsta")}
        </div> */}
      </div>
    </section>
  );
};
export default Reviews;
