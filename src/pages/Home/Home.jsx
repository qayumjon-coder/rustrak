import "../../index.css";
import SwiperBanner from "../../components/SwiperBanner";
import SwiperCards from "../../components/SwiperCards";

const Home = ({ t }) => {
  t;

  return (
    <>
      <section className="swiperSection pt-38">
        <div className="container">
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
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[40px] font-semibold">Категории</h2>

              <div className="flex items-center gap-3">
                <button className="swiper-prev-el flex items-center justify-center w-9.75 h-9.75 border rounded-md hover:bg-yellow cursor-pointer">
                  <span>
                    <i className="fa-solid fa-chevron-left"></i>
                  </span>
                </button>
                <button className="swiper-next-el flex items-center justify-center w-9.75 h-9.75 border rounded-md hover:bg-yellow cursor-pointer">
                  <span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </button>
              </div>
            </div>

            <SwiperCards />
          </div>
        </div>
      </section>

      <section className="pt-19.75 mb-40">
        <div className="container">
          <div className="flex">
            <div className="w-2/5 flex flex-col items-start">
              <h2 className="text-[40px] font-semibold mb-5.5">
                О компании <b className="font-semibold text-yellow">Рустрак</b>
              </h2>
              <p className="mb-16 text-lg">
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
              </p>

              <a
                href="#"
                className="p-2.5 bg-yellow hover:bg-yellow-hov w-40 flex items-center justify-center rounded-sm transition ease duration-200"
              >
                Подробнее <i className="fa-solid fa-arrow-right-long ml-2"></i>
              </a>
            </div>

            <div className="w-3/5">
              <img
                className="w-full"
                src="/images/about-truck32.png"
                alt="about company"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-20 mb-40 bg-yellow">
        <div className="container">
          <div className="grid grid-cols-12 gap-3.5">
            <div className="col-span-3">
              <div className="mb-6">
                <h2 className="text-[100px] leading-30 font-semibold">17</h2>
                <p className="text-[32px]">субъектов</p>
              </div>

              <p className="text-lg">
                За 17 лет деятельности ООО «РусТрак» превратилось в крупное
                предприятие по производству и продаже специальной техники
              </p>
            </div>
            <div className="col-span-3 col-start-5">
              <div className="mb-6">
                <h2 className="text-[100px] leading-30 font-semibold">85</h2>
                <p className="text-[32px]">субъектов</p>
              </div>

              <p className="text-lg">
                Мы обеспечили 85 субъектов РФ надёжной техникой коммерческого и
                специализированного предназначения
              </p>
            </div>
            <div className="col-span-3 col-start-9">
              <div className="mb-6">
                <h2 className="text-[100px] leading-30 font-semibold">11</h2>
                <p className="text-[32px]">концернов</p>
              </div>

              <p className="text-lg">
                ООО «РусТрак» дорожит доверием автопрома, которое подтверждено
                полномочиями от 11 автопроизводителей
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[500dvh]">
        <div className="bg-amber-100 h-screen sticky top-0">
          <div className="container">
              
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
