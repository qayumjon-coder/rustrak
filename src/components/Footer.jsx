import { useTranslation } from 'react-i18next';
import { motion } from "motion/react";
import { container, containerSec, fadeUp, shortFadeUp } from "../utils/animation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from 'react-router-dom';
const Footer = () => {
  const {
    t
  } = useTranslation();
  const [isOnasOpen, setIsOnasOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const handleOnasOpen = () => {
    setIsOnasOpen(!isOnasOpen);
  };
  const handleFooterMedia = () => {
    setIsMediaOpen(!isMediaOpen);
  };
  return <footer className="text-white bg-black pt-15.5 pb-10">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between">
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-150px"
        }} className="mb-7.5">
            <motion.span variants={fadeUp} className="inline-block mb-2">{t("tel_faks")}<a className="ml-1" href="tel:8312250055">
                8 (831) 225-00-55
              </a>
            </motion.span>
            <br />
            <motion.span variants={fadeUp} className="inline-block mb-2">
              Email:
              <a className="ml-1" href="mailto:info@rtrf.ru">
                info@rtrf.ru
              </a>
            </motion.span>

            <motion.address variants={fadeUp} className="mb-4">{t("g_nizhniy_novgorod_ul_torfyana")}</motion.address>

            <motion.button variants={fadeUp} className="py-3.25 px-7.5 bg-yellow text-black rounded-sm cursor-pointer hover:bg-yellow-hov transition ease duration-200">
              {t("zakazat_zvonok")}
            </motion.button>
            <motion.img variants={fadeUp} className="mt-6.25" width={200} src="/images/qr-code.svg" alt="QR Code image" />
          </motion.div>
          <div className="flex mb-10 gap-5 sm:gap-20 text-sm text-light-gray font-semibold flex-col md:flex-row">
            <div>
              <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-150px"
            }} className="text-base hidden md:block mb-8 text-white">
                {t("about")}
              </motion.h2>
              <motion.button variants={fadeUp} initial="hidden" whileInView="visible" onClick={handleOnasOpen} viewport={{
              once: true,
              margin: "-50px"
            }} className="flex gap-1 md:hidden cursor-pointer text-base mb-3 md:mb-8 text-white">
                {t("about")} <ChevronDown />
              </motion.button>

              <div className={`flex flex-col gap-3 lg:flex-row lg:gap-20 md:h-auto md:overflow-visible transition ease-in duration-300 ${!isOnasOpen ? "h-0 overflow-hidden " : "h-110 overflow-visible"}`}>
                <motion.ul variants={containerSec} initial="hidden" whileInView="visible" viewport={{
                once: true,
                margin: "-150px"
              }} className="flex flex-col gap-3 mr-20 text-light-gray">
                  <motion.li variants={shortFadeUp}>
                    <Link to="/about">{t("o_kompanii_ooo_rustrak")}</Link>
                  </motion.li>
                  <motion.li variants={shortFadeUp}>
                    <Link to="/news">{t("news")}</Link>
                  </motion.li>
                  <motion.li variants={shortFadeUp}>
                    <Link to="/partners">{t("nashi_partnyory")}</Link>
                  </motion.li>
                  <motion.li variants={shortFadeUp}>
                    <Link to="/production">{t("proizvodstvo")}</Link>
                  </motion.li>
                  <motion.li variants={shortFadeUp}>
                    <Link to="/suppliers">{t("postavshchikam_i_partnyoram")}</Link>
                  </motion.li>
                  <motion.li variants={shortFadeUp}>
                    <Link to="/reviews">{t("otzyvy")}</Link>
                  </motion.li>
                  <motion.li variants={shortFadeUp}>
                    <Link to="/cert">{t("sertifikaty")}</Link>
                  </motion.li>
                </motion.ul>

                <motion.ul variants={containerSec} initial="hidden" whileInView="visible" viewport={{
                once: true,
                margin: "-150px"
              }} className="flex flex-col gap-3 mr-20 ">
                  <motion.li variants={shortFadeUp}>
                    <Link to="/vacancies">{t("vakansii")}</Link>
                  </motion.li>
                  <motion.li variants={shortFadeUp}>
                    <Link to="/leasing">{t("kredit_i_lizing")}</Link>
                  </motion.li>
                  <motion.li variants={shortFadeUp}>
                    <Link to="/service">{t("service")}</Link>
                  </motion.li>
                  <motion.li variants={shortFadeUp}>
                    <Link to="/repair">{t("repair")}</Link>
                  </motion.li>
                  <motion.li variants={shortFadeUp}>
                    <Link to="/contacts">{t("contacts")}</Link>
                  </motion.li>
                  <motion.li variants={shortFadeUp}>
                    <Link to="/info">{t("poleznye_stati")}</Link>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
            <div>
              <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-150px"
            }} className="text-base md:mb-8 text-white hidden md:block">
                {t("media")}
              </motion.h2>
              <motion.button variants={fadeUp} initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-50px"
            }} onClick={handleFooterMedia} className="text-base flex gap-1 cursor-pointer mb-3 md:mb-8 text-white md:hidden">
                {t("media")} <ChevronDown />
              </motion.button>

              <motion.ul variants={containerSec} initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-150px"
            }} className={`flex flex-col gap-3 transition ease-in duration-300 ${!isMediaOpen ? "h-0 overflow-hidden md:h-auto md:overflow-visible" : "h-20 overflow-visible"}`}>
                <motion.li variants={shortFadeUp}>
                  <Link to="/photogallery">{t("fotogalereya")}</Link>
                </motion.li>
                <motion.li variants={shortFadeUp}>
                  <Link to="/video">{t("video")}</Link>
                </motion.li>
                <motion.li variants={shortFadeUp}>
                  <Link to="/promo">{t("reklamnye_materialy")}</Link>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row justify-between lg:justify-start">
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="text-sm md:oreder-1 order-2 lg:mr-60 text-light-gray opacity-40 font-medium">{t("2009_2026_c_rus_trucks_informa")}<br />{" "}{t("publichnoy_ofertoy_opredelyaem")}{" "}
            <br />{t("kodeksa_rf_i_nosit_isklyuchite")}</motion.p>

          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="flex gap-5 md:order-2">
            <motion.a variants={shortFadeUp} href="#">
              <img width={30} src="images/social/max-messenger-sign-logo.svg" alt="Max messenger" />
            </motion.a>
            <motion.a variants={shortFadeUp} href="#">
              <img width={30} src="images/social/telegram.svg" alt="Telegram logo" />
            </motion.a>
            <motion.a variants={shortFadeUp} href="#">
              <img width={30} src="images/social/VK_com-logo.svg" alt="Vkontakte logo" />
            </motion.a>
            <motion.a variants={shortFadeUp} href="#">
              <img width={30} src="images/social/Rutube_icon.png" alt="Rutube logo" />
            </motion.a>
            <motion.a variants={shortFadeUp} href="#">
              <img className="w-10" src="images/social/YouTube_full-color_icon.png" alt="Youtube Logo" />
            </motion.a>
            <motion.a variants={shortFadeUp} href="#">
              <img width={30} src="images/social/Yandex_Zen_logo_icon.png" alt="Yandex Zen Logo" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>;
};
export default Footer;