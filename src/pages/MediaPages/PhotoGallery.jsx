import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import { useState } from "react";

const PhotoGallery = () => {
  const { t } = useTranslation();

  const galleryData = [
    {
      label: t("avtomobili"),
      images: [
        "/images/gallery/avtomobili/001-yioe30qveqer3vjd8ujjtj2jxa15wgod.webp",
        "/images/gallery/avtomobili/002-3it35tnq5bxobgf3ushp1lww2semwoy1.webp",
        "/images/gallery/avtomobili/003-is2mbfgtttl7dfcv64ivfgxxylfy132x.webp",
        "/images/gallery/avtomobili/004-mm4qfvi3datm807of0lgs90nx8cy511b.webp",
        "/images/gallery/avtomobili/005-Gruzovik-rustrak-_34_.jpg",
        "/images/gallery/avtomobili/006-Gruzovik-rustrak-_33_.jpg",
        "/images/gallery/avtomobili/007-Gruzovik-rustrak-_32_.jpg",
        "/images/gallery/avtomobili/008-Gruzovik-rustrak-_31_.jpg",
        "/images/gallery/avtomobili/009-Gruzovik-rustrak-_30_.jpg",
        "/images/gallery/avtomobili/010-Gruzovik-rustrak-_29_.jpg",
        "/images/gallery/avtomobili/011-Gruzovik-rustrak-_28_.jpg",
        "/images/gallery/avtomobili/012-Gruzovik-rustrak-_27_.jpg",
        "/images/gallery/avtomobili/013-Gruzovik-rustrak-_26_.jpg",
        "/images/gallery/avtomobili/014-Gruzovik-rustrak-_25_.jpg",
        "/images/gallery/avtomobili/015-Gruzovik-rustrak-_24_.jpg",
        "/images/gallery/avtomobili/016-Gruzovik-rustrak-_23_.jpg",
        "/images/gallery/avtomobili/017-Gruzovik-rustrak-_22_.jpg",
        "/images/gallery/avtomobili/018-Gruzovik-rustrak-_21_.jpg",
        "/images/gallery/avtomobili/019-Gruzovik-rustrak-_20_.jpg",
        "/images/gallery/avtomobili/020-Gruzovik-rustrak-_19_.jpg",
        "/images/gallery/avtomobili/021-Gruzovik-rustrak-_18_.jpg",
        "/images/gallery/avtomobili/022-Gruzovik-rustrak-_17_.jpg",
        "/images/gallery/avtomobili/023-Gruzovik-rustrak-_16_.jpg",
        "/images/gallery/avtomobili/024-Gruzovik-rustrak-_15_.jpg",
        "/images/gallery/avtomobili/025-Gruzovik-rustrak-_14_.jpg",
        "/images/gallery/avtomobili/026-Gruzovik-rustrak-_13_.jpg",
        "/images/gallery/avtomobili/027-Gruzovik-rustrak-_12_.jpg",
        "/images/gallery/avtomobili/028-Gruzovik-rustrak-_11_.jpg",
        "/images/gallery/avtomobili/029-Gruzovik-rustrak-_10_.jpg",
        "/images/gallery/avtomobili/030-Gruzovik-rustrak-_9_.jpg",
        "/images/gallery/avtomobili/031-Gruzovik-rustrak-_8_.jpg",
        "/images/gallery/avtomobili/032-Gruzovik-rustrak-_7_.jpg",
        "/images/gallery/avtomobili/033-Gruzovik-rustrak-_6_.jpg",
        "/images/gallery/avtomobili/034-Gruzovik-rustrak-_5_.jpg",
        "/images/gallery/avtomobili/035-Gruzovik-rustrak-_4_.jpg",
        "/images/gallery/avtomobili/036-Gruzovik-rustrak-_3_.jpg",
        "/images/gallery/avtomobili/037-Gruzovik-rustrak-_2_.jpg",
        "/images/gallery/avtomobili/038-Gruzovik-rustrak-_1_.jpg",
        "/images/gallery/avtomobili/039-148p47d6k9n1nk38tdmqbvuhm6tvl0ia.webp",
      ],
    },
    {
      label: t("proizvodstvo"),
      images: [
        "/images/gallery/proizvodstvo/040-bw1xsf26x0yf1z7iik8otu08kdawad5k.webp",
        "/images/gallery/proizvodstvo/041-90729wkeev1qucquepix20m1056kihy0.webp",
        "/images/gallery/proizvodstvo/042-651a6lk1hdo2exc0k69f9iqvl7ljnngz.webp",
        "/images/gallery/proizvodstvo/043-d3f54rxe89vdq1ap7of9vqeth7nn53qr.webp",
        "/images/gallery/proizvodstvo/044-xjv2rch8cuomw669aow3p7imtu1bw3lm.webp",
      ],
    },
    {
      label: t("o_kompanii"),
      images: [
        "/images/gallery/o_kompaniy/045-aajbuunti4c7cfapxy6r2ndvv9enmm45.webp",
        "/images/gallery/o_kompaniy/046-80j41rzi4brf3nq5c7v47586rod7nqs2.webp",
        "/images/gallery/o_kompaniy/047-1rrb4l1hemoqpz2akzcvc8lfik1r7oph.webp",
        "/images/gallery/o_kompaniy/048-3a170glpm24c32zi7m5s9vvdnzxkv9oh.webp",
        "/images/gallery/o_kompaniy/049-Skrinshot_2026_04_02_03_13_21_469.png",
        "/images/gallery/o_kompaniy/050-Skrinshot_2026_04_02_03_12_34_922.webp",
        "/images/gallery/o_kompaniy/051-Skrinshot_2026_04_02_03_12_23_780.png",
        "/images/gallery/o_kompaniy/052-Proizvodstvo-Rustrak-_11_.jpg",
        "/images/gallery/o_kompaniy/053-Proizvodstvo-Rustrak-_10_.jpg",
        "/images/gallery/o_kompaniy/054-Proizvodstvo-Rustrak-_9_.jpg",
        "/images/gallery/o_kompaniy/055-Proizvodstvo-Rustrak-_8_.jpg",
        "/images/gallery/o_kompaniy/056-Proizvodstvo-Rustrak-_7_.jpg",
        "/images/gallery/o_kompaniy/057-Proizvodstvo-Rustrak-_6_.jpg",
        "/images/gallery/o_kompaniy/058-Proizvodstvo-Rustrak-_5_.jpg",
        "/images/gallery/o_kompaniy/059-Proizvodstvo-Rustrak-_4_.jpg",
        "/images/gallery/o_kompaniy/060-Proizvodstvo-Rustrak-_3_.jpg",
        "/images/gallery/o_kompaniy/061-Proizvodstvo-Rustrak-_2_.jpg",
        "/images/gallery/o_kompaniy/062-Proizvodstvo-Rustrak-_1_.jpg",
        "/images/gallery/o_kompaniy/063-zscwkpsgxe3z0n775bhk4ytyzoxo2xlq.webp",
      ],
    },
    {
      label: t("vystavki"),
      images: [
        "/images/gallery/vistafki/064-x8ejsc9073k1oodlgcoeaeoo3ino0ekz.webp",
        "/images/gallery/vistafki/065-tl0y7epzi6yrw4pvt1bok8b7o4haeg5q.webp",
        "/images/gallery/vistafki/066-9dil4wcapj971zfsl2vi1lt2cf0jvqtf.webp",
        "/images/gallery/vistafki/067-kka38fdnld13oay7sc7sltrckw6vk6p3.webp",
        "/images/gallery/vistafki/068-Vistavki-rustrak-_7_.webp",
        "/images/gallery/vistafki/069-Vistavki-rustrak-_6_.jpg",
        "/images/gallery/vistafki/070-Vistavki-rustrak-_5_.jpg",
        "/images/gallery/vistafki/071-Vistavki-rustrak-_4_.jpg",
        "/images/gallery/vistafki/072-Vistavki-rustrak-_3_.webp",
        "/images/gallery/vistafki/073-Vistavki-rustrak-_2_.webp",
        "/images/gallery/vistafki/074-Vistavki-rustrak-_1_.webp",
        "/images/gallery/vistafki/075-h5tn9ysuu3l3el60gw5dkzzhke0xpwh8.webp",
        "/images/gallery/vistafki/076-7l7m8att0z9l0y6a60saagqs3lj5o86w.webp",
        "/images/gallery/vistafki/077-xmhkw6r79n5jvzbb9p47xdke0ptkig00.webp",
        "/images/gallery/vistafki/078-4ty691y4ko8ynl76mz2tm4vt62handmf.webp",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const currentImages = galleryData[activeTab].images;

  const openLightbox = (index) => setLightbox({ images: currentImages, index });
  const closeLightbox = () => setLightbox(null);
  const prevImage = () =>
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length,
    }));
  const nextImage = () =>
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length,
    }));

  return (
    <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-xl font-semibold">
            {t("fotogalereya_proizvoditelya_av")}
          </h1>
          <Link
            to="/video"
            className="shrink-0 px-5 py-2 border border-gray-300 text-sm rounded hover:border-yellow hover:text-yellow transition duration-200"
          >
            {t("smotret_video")}
          </Link>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {galleryData.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 rounded text-sm font-medium transition duration-200 cursor-pointer ${
                activeTab === i
                  ? "bg-yellow text-black"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {currentImages.map((src, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden rounded cursor-pointer group"
              onClick={() => openLightbox(i)}
            >
              <img
                src={src}
                alt={`${galleryData[activeTab].label} ${i + 1}`}
                className="w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl px-4 py-2 hover:text-yellow transition"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ‹
          </button>
          <img
            src={lightbox.images[lightbox.index]}
            alt={`${lightbox.index + 1}`}
            className="max-h-[90vh] max-w-[90vw] rounded shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl px-4 py-2 hover:text-yellow transition"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ›
          </button>
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-yellow transition"
            onClick={closeLightbox}
          >
            ✕
          </button>
          <div className="absolute bottom-4 text-white/60 text-sm">
            {lightbox.index + 1} / {lightbox.images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
