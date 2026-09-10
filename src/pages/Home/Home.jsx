import "../../index.css";
import SwiperBanner from "../../components/SwiperBanner";
import SwiperCards from "../../components/SwiperCards";
import ArcNavigation from "../../components/AboutCircleSection";
import RecommendedTrucks from "../../components/RecommendedTrucks";
import News from "../../components/NewsSwiper";
import { motion } from "motion/react";
import { fadeUp, container } from "../../utils/animation";

const Home = ({ t }) => {
  t;

  return (
    <>
      <section className="swiperSection pt-38">
        <div className="container p-0! md:px-5!">
          <div className="">
            {/* <div className="mb-8 rounded-2xl bg-linear-to-r from-yellow to-amber-300 p-8 shadow-lg">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-black/70">
                {t.language === "uz" ? "Rustrak" : "Rustrak"}
              </p>
              <h1 className="max-w-2xl text-4xl font-bold text-black md:text-5xl">
                {t.heroTitle}
              </h1>
              <p className="mt-4 max-w-xl text-lg text-black/80">{t.heroText}</p>
              <div className="mt-6 flex gap-4">
                <button className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
                  {t.catalogBtn}
                </button>
                <button className="rounded-full border border-black/40 bg-white px-6 py-3 text-sm font-semibold text-black">
                  {t.contactBtn}
                </button>
              </div>
            </div> */}

            <SwiperBanner />
          </div>
        </div>
      </section>

      <section className="pt-19.75 mb-20">
        <div className="container">
          <div>
            <SwiperCards />
          </div>
        </div>
      </section>

      <section className="pt-19.75 mb-40">
        <div className="container">
          <div className="flex flex-col items-center w-full lg:flex-row">
            <div className="w-full lg:w-2/5 flex flex-col items-start">
              <motion.h2
                variants={fadeUp}
                initial={fadeUp.hidden}
                whileInView={fadeUp.visible}
                viewport={{ once: true, amount: 0.5, margin: "-50px" }}
                transition={{ ease: "easeIn", duration: 0.4 }}
                className="text-[40px] font-semibold mb-5.5"
              >
                О компании <b className="font-semibold text-yellow">Рустрак</b>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5, margin: "-50px" }}
                transition={{ ease: "easeIn", duration: 0.4 }}
                className="mb-16 text-lg"
              >
                Наша компания занимает лидирующие позиции на рынке спецтехники:
                каждый день мы вносим свой вклад в развитие отечественного
                автопрома и укрепление российской экономики.
                <br />
                <br />
                «РусТрак» является ведущим производителем коммерческого
                транспорта и специализированной техники. Наша работа признана и
                высоко оценена крупнейшими отечественными корпорациями и
                государственными структурами: мы поставляем спецтехнику для
                таких корпораций, как Газпром, Росатом, Россети, РСК «МИГ» и
                других.
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5, margin: "-50px" }}
                transition={{ ease: "easeIn", duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                href="#"
                className="p-2.5 bg-yellow hover:bg-yellow-hov w-40 hidden lg:flex items-center justify-center rounded-sm transition ease duration-200 flex-wrap"
              >
                Подробнее <i className="fa-solid fa-arrow-right-long ml-2"></i>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5, margin: "-50px" }}
              transition={{ ease: "easeIn", duration: 0.4 }}
              className="w-full lg:w-3/5"
            >
              <img
                className="w-full"
                src="/images/about-truck32.png"
                alt="about company"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-20 mb-40 bg-yellow">
        <div className="container">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-12 gap-3.5"
          >
            <motion.div variants={fadeUp} className="stat md:col-span-3">
              <div className="mb-6">
                <h2 className="text-[80px] md:text-[100px] leading-30 font-semibold">
                  17
                </h2>
                <p className="text-[32px]">субъектов</p>
              </div>

              <p className="text-base md:text-lg">
                За 17 лет деятельности ООО «РусТрак» превратилось в крупное
                предприятие по производству и продаже специальной техники
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="stat md:col-span-3 md:col-start-5"
            >
              <div className="mb-6">
                <h2 className="text-[80px] xl md:text-[100px] leading-30 font-semibold">
                  85
                </h2>
                <p className="text-[32px]">субъектов</p>
              </div>

              <p className="text-base md:text-lg">
                Мы обеспечили 85 субъектов РФ надёжной техникой коммерческого и
                специализированного предназначения
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="stat md:col-span-3 md:col-start-9"
            >
              <div className="mb-6">
                <h2 className="text-[80px] md:text-[100px] leading-30 font-semibold">
                  11
                </h2>
                <p className="text-[32px]">концернов</p>
              </div>

              <p className="text-base md:text-lg">
                ООО «РусТрак» дорожит доверием автопрома, которое подтверждено
                полномочиями от 11 автопроизводителей
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section>
        <ArcNavigation />
      </section>

      <section className="bg-light-gray/10 py-20">
        <div className="container">
          <div>
            <RecommendedTrucks />
          </div>
        </div>
      </section>

      <section className="py-30">
        <div className="container">
          <News />
        </div>
      </section>
    </>
  );
};

export default Home;
