import { useTranslation } from 'react-i18next';
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import { useState } from "react";

const PhotoGallery = () => {
  const {
    t
  } = useTranslation();
  
  const tabs = [t("avtomobili"), t("proizvodstvo"), t("o_kompanii"), t("vystavki")];

  // Use existing truck images from the project
  const galleryImages = [{
    src: "/images/truck1.jpg",
    alt: t("avtomobil_1")
  }, {
    src: "/images/truck2.jpg",
    alt: t("avtomobil_2")
  }, {
    src: "/images/truck3.jpg",
    alt: t("avtomobil_3")
  }, {
    src: "/images/truck4.jpg",
    alt: t("avtomobil_4")
  }, {
    src: "/images/truck5.jpg",
    alt: t("avtomobil_5")
  }, {
    src: "/images/truck6.jpg",
    alt: t("avtomobil_6")
  }, {
    src: "/images/truck7.jpg",
    alt: t("avtomobil_7")
  }, {
    src: "/images/truck8.jpg",
    alt: t("avtomobil_8")
  }, {
    src: "/images/truck9.jpg",
    alt: t("avtomobil_9")
  }, {
    src: "/images/truck10.jpg",
    alt: t("avtomobil_10")
  }, {
    src: "/images/truck11.jpg",
    alt: t("avtomobil_11")
  }, {
    src: "/images/truck12.jpg",
    alt: t("avtomobil_12")
  }];
  
  const [activeTab, setActiveTab] = useState(0);
  return <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-xl font-semibold">
            {t?.photoGalleryTitle || t("fotogalereya_proizvoditelya_av")}
          </h1>
          <Link to="/video" className="flex-shrink-0 px-5 py-2 border border-gray-300 text-sm rounded hover:border-yellow hover:text-yellow transition duration-200">
            {t?.watchVideo || t("smotret_video")}
          </Link>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map((tab, i) => <button key={i} onClick={() => setActiveTab(i)} className={`px-5 py-2 rounded text-sm font-medium transition duration-200 cursor-pointer ${activeTab === i ? "bg-yellow text-black" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
              {tab}
            </button>)}
        </div>

        {/* Masonry-like grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {galleryImages.map((img, i) => <div key={i} className="break-inside-avoid overflow-hidden rounded cursor-pointer group">
              <img src={img.src} alt={img.alt} className="w-full object-cover group-hover:scale-105 transition duration-500" onError={e => {
            e.target.src = "/images/placeholder-truck.jpg";
          }} />
            </div>)}
        </div>
      </div>
    </section>;
};
export default PhotoGallery;