import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, container, shortFadeUp, slideRight } from "../utils/animation";
const ContactSec = () => {
  const {
    t
  } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  return <section className="lg:h-85.25 pb-7 lg:py-0 flex relative lg:overflow-hidden! bg-light-gray/20">
      <div className="container">
        <div className="pt-10 relative z-10">
          <div className="mb-9.5">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-150px"
          }} className="text-[42px] font-semibold">
              {t?.questionTitle || t("ostalis_voprosy")}
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" transition={{
            delay: 0.2
          }} viewport={{
            once: true,
            margin: "-150px"
          }} className="text-lg">
              {t?.questionText || t("ostavte_svoi_kontaktnye_dannye")}
            </motion.p>
          </div>
          <motion.form variants={container} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-150px"
        }}>
            <div className="flex items-end xl gap-5 flex-wrap sm:flex-nowrap lg:w-188 mb-4">
              <div className="flex flex-col w-full">
                <motion.label variants={shortFadeUp} htmlFor="abc" className="text-sm">
                  {t?.yourName || t("vashe_imya")} *
                </motion.label>
                <motion.input variants={shortFadeUp} className="py-2.75 px-3 rounded-sm border outline-0" type="text" placeholder="Ivan" />
              </div>
              <div className="flex flex-col w-full">
                <motion.label variants={shortFadeUp} htmlFor="abc" className="text-sm">
                  {t?.phone || t("telefon")} *
                </motion.label>
                <motion.input variants={shortFadeUp} className="py-2.75 px-3 rounded-sm border outline-0" type="tel" onMouseLeave={() => setIsHovered(false)} onMouseEnter={() => setIsHovered(true)} placeholder={isHovered ? "+7 (___) ___-__-__" : "+7"} />
              </div>

              <motion.button variants={shortFadeUp} className="py-3.25 px-7.5 self bg-yellow rounded-sm" type="submit">
                {t?.send || t("otpravit")}
              </motion.button>
            </div>

            <motion.div variants={shortFadeUp} className="flex gap-1 text-light-gray text-sm flex-col sm:flex-row">
              <p>{t?.privacyText || t("nazhimaya_na_knopku_otpravit")}</p>
              <a href="#" className="text-indigo-700 underline opacity-50 hover:no-underline">
                {t?.privacyLink || t("vy_soglashaetes_na_obrabotku_p")}
              </a>
            </motion.div>
          </motion.form>
        </div>

        <motion.img initial={slideRight.hidden} whileInView={slideRight.visible} viewport={{
        once: true,
        margin: "-150px"
      }} transition={{
        delay: 0.4
      }} className="absolute hidden lg:block lg:-right-200 lg:-top-10 xl:-right-150 xl:-top-10 2xl:-right-110 2xl:-top-15 z-0" src="/images/trucks/Contact/feedback-truck_result.webp" alt="Truck image" />
      </div>
    </section>;
};
export default ContactSec;