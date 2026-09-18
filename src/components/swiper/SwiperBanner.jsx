import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "motion/react";
import { fadeUp } from "../../utils/animation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const SwiperBanner = () => {
  const {
    t
  } = useTranslation();
  return <motion.div initial={fadeUp.hidden} whileInView={fadeUp.visible} transition={{
    ease: "easeInOut",
    delay: 0.1,
    duration: 0.3
  }} viewport={{
    once: true
  }}>
      <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={0} slidesPerView={1} navigation pagination={{
      clickable: true
    }} autoplay={{
      delay: 5000
    }} loop={true} breakpoints={{
      768: {
        spaceBetween: 20
      }
    }} className="h-129.5! md:rounded-2xl" style={{
      "--swiper-navigation-color": "#f0f0f0",
      "--swiper-navigation-size": "20px",
      "--swiper-navigation-top-offset": "50%"
    }}>
        <SwiperSlide className="h-full! relative!">
          <div>
            <img src="/images/banner1.jpg" alt="Banner 1" className="w-full h-129.5 object-cover hidden md:block" />
            <img src="/images/banner1-mobile.jpg" alt="Banner 1" className="w-full h-129.5 object-cover md:hidden" />
          </div>

          <div className="absolute z-100 top-0 pt-10 pl-8 md:w-2/5 text-white">
            <h1 className="text-3xl mb-4 font-bold ">{t("atz_rustrak_vklyucheny_v_reest")}</h1>
            <p className="mb-8">{t("teper_dostupny_dlya_priobreten")}</p>
            <a href="#" className="py-2.5 px-7.5 border-2 rounded-sm border-yellow hover:bg-yellow hover:text-black cursor-pointer transition ease duration-200">{t("zakazat_zvonok")}</a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-full! relative!">
          <div className="relative">
            <img src="/images/banner2.jpg" alt="Banner 2" className="w-full h-129.5 object-cover" />
          </div>
          <div className="w-full md:w-4/5 h-full bg-linear-to-r from-black/80 to-black/0 absolute top-0 left-0 z-10">
            <div className="absolute flex flex-col justify-center items-start z-100 top-0 pt-10 pl-10 md:w-1/2 text-white">
              <h1 className="text-3xl mb-4 font-bold ">{t("v_nalichii_shtornye_furgony_ka")}</h1>
              <p className="mb-8">{t("razmery_nadstroyki_6200h2550h2")}<br />{t("cena_5_500_000_rub")}</p>
              <a href="#" className="py-2.5 px-7.5 border-2 rounded-sm border-yellow hover:bg-yellow hover:text-black cursor-pointer transition ease duration-200">{t("zakazat_zvonok")}</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-full!">
          <div>
            <img src="/images/banner3.webp" alt="Banner 3" className="w-full h-129.5 object-cover" />
          </div>
          <div className="w-full md:w-6/8 h-full bg-linear-to-r from-black/80 to-black/0 absolute top-0 left-0 z-10">
            <div className="absolute flex flex-col justify-center items-start z-100 top-0 pt-10 pl-10 md:w-1/2 text-white">
              <h1 className="text-[28px] mb-4 font-bold leading-[1.1]">{t("bortovye_platformy_so_shtornym")}</h1>
              <p className="mb-8">{t("proizvodstvo_i_postavka_kommer")}</p>
              <a href="#" className="py-2.5 px-7.5 rounded-sm bg-yellow hover:bg-yellow-hov text-black cursor-pointer transition ease duration-200">{t("podrobnee")}</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full!">
          <div>
            <img src="/images/banner4.jpg" alt="Banner 4" className="w-full h-129.5 object-cover" />
          </div>

          <div className="w-full md:w-6/8 h-full bg-linear-to-r from-black/80 to-black/0 absolute top-0 left-0 z-10">
            <div className="absolute flex flex-col justify-center items-start z-100 top-0 pt-10 pl-10 md:w-1/2 text-white">
              <h1 className="text-[28px] mb-4 font-bold leading-[1.1]">{t("ooo_rustrak_1")}</h1>
              <p className="mb-8">{t("proizvodstvo_i_postavka_specia")}</p>
              <div className="flex gap-4 items-center">
                <a href="#" className="py-2.5 px-7.5 rounded-sm bg-yellow hover:bg-yellow-hov text-black cursor-pointer transition ease duration-200">{t("otkryt_katalog")}</a>

                <a href="#" className="py-2.5 px-7.5 rounded-sm border-2 border-yellow hover:bg-yellow-hov hover:text-black cursor-pointer transition ease duration-200">{t("zakazat_zvonok")}</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full!">
          <div>
            <img src="/images/banner5.jpg" alt="Banner 4" className="w-full h-129.5 object-cover" />
          </div>

          <div className="w-full md:w-6/8 h-full bg-linear-to-r from-black/80 to-black/0 absolute top-0 left-0 z-10">
            <div className="absolute flex flex-col justify-center items-start z-100 top-0 pt-10 pl-10 md:w-1/2 text-white">
              <h1 className="text-[28px] mb-4 font-bold leading-[1.1]">{t("krany_manipulyatory_na_baze_mc")}</h1>
              <p className="mb-8">{t("proizvodstvo_avtomobiley_s_kra")}</p>
              <div className="flex gap-4 items-center">
                <a href="#" className="py-2.5 px-7.5 rounded-sm bg-yellow hover:bg-yellow-hov text-black cursor-pointer transition ease duration-200">{t("podrobnee")}</a>

                <a href="#" className="py-2.5 px-7.5 rounded-sm border-2 border-yellow hover:bg-yellow-hov hover:text-black cursor-pointer transition ease duration-200">{t("zakazat_zvonok")}</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full!">
          <div>
            <img src="/images/banner6.jpg" alt="Banner 4" className="w-full h-129.5 object-cover" />
          </div>

          <div className="w-full md:w-6/8 h-full bg-linear-to-r from-black to-black/1 absolute top-0 left-0 z-10">
            <div className="absolute flex flex-col justify-center items-start z-100 top-0 pt-10 pl-10 md:w-1/2 text-white">
              <h1 className="text-[28px] mb-4 font-bold leading-[1.1]">{t("avtotoplivozapravshchiki_na_ba")}</h1>
              <p className="mb-8">{t("proizvodstvo_i_postavka_avtoto")}</p>
              <div className="flex gap-4 items-center">
                <a href="#" className="py-2.5 px-7.5 rounded-sm bg-yellow hover:bg-yellow-hov text-black cursor-pointer transition ease duration-200">{t("podrobnee")}</a>

                <a href="#" className="py-2.5 px-7.5 rounded-sm border-2 border-yellow hover:bg-yellow-hov hover:text-black cursor-pointer transition ease duration-200">{t("zakazat_zvonok")}</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>;
};
export default SwiperBanner;