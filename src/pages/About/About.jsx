import Breadcrumb from "../../components/Breadcrumb";
import SwiperAbout from "../../components/SwiperAbout";
import { aboutRustrakThis } from "../../object";

const About = () => {
  return (
    <>
      <section className="pt-35 mb-22">
        <div className="container">
          <div>
            <Breadcrumb />
          </div>
        </div>
        <div className="bg-[url(/images/about-banner.jpg)] bg-right bg-no-repeat bg-cover">
          <div className="container">
            <div className="relative">
              <p className="pt-22.5 pb-56.75 text-2xl max-w-126.75 font-semibold text-white ">
                Автомобильный завод «РусТрак» - ведущий производитель
                коммерческого транспорта и специализированной техники в Нижнем
                Новгороде.
              </p>

              <img
                src="/images/exp17years.png"
                alt="17 years of experience badge"
                className="absolute w-40 -bottom-6.25"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 pb-14.5">
        <div className="container">
          <div>
            <SwiperAbout />
          </div>
        </div>
      </section>

      <section className="pt-14 pb-19">
        <div className="container">
          <div className="flex items-center">
            <div className="w-1/2">
              <h2 className="text-[32px] mb-10 font-semibold">
                Сегодня ООО «Рустрак» - это:
              </h2>

              <ul className="text-lg flex flex-col gap-2">
                {aboutRustrakThis.map((item) => (
                  <li className="flex items-center gap-3 mb-2">
                    <img
                      src="/images/check-icon.svg"
                      alt="check circle icon"
                      className=""
                    />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-1/2 justify-end">
              <img
                className="w-8/10"
                src="/images/about-track.png"
                alt="Truck about preview image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-19.5 pt-14.5">
        <div className="container">
          <div className="flex gap-6 mb-39">
            <div className="w-1/3 bg-yellow px-5 py-10 flex flex-col justify-between rounded-lg">
              <div>
                <h2 className="mb-3 text-[32px] font-medium">
                  Отрасли применения выпускаемой техники:
                </h2>

                <p className="text-lg">
                  Cтроительная, телекоммуникационная, коммунальная, дорожное
                  хозяйство, логистика, сельское хозяйство.
                </p>
              </div>
              <div>
                <h2 className="mb-3 text-[32px] font-medium">
                  Выпускаемая техника:
                </h2>
                <p className="text-lg">
                  Краны-манипуляторы, автотопливозаправщики, автовышки, фургоны,
                  самосвалы, бортовые платформы, эвакуаторы, крюковые
                  погрузчики, мастерские, пищевые цистерны, вакуумные машины,
                  автогидроподъёмники.
                </p>
              </div>
            </div>
            <div className="w-2/3 flex gap-6">
              <div className="w-1/2">
                <img
                  className="rounded-lg"
                  src="/images/about-im_v2-1.webp"
                  alt="About image truck images collage"
                />
              </div>
              <div className="w-1/2">
                <img
                  className="rounded-lg"
                  src="/images/about-im2_v2-2.webp"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 text-lg w-217.5">
            <p>
              ООО «РусТрак» является официальным дилером на территории РФ
              следующих марок: Palfinger, ИНМАН, HKTC, UNIC, DongYang, FASSI,
              Hangil, XCMG, HIAB.
            </p>

            <p>
              За 16 лет деятельности компания заслужила высокий уровень доверия
              дистрибьютеров и автопроизводителей: ИСУЗУ РУС, КАМАЗ, ГАЗ,
              DAEWOO, FAW, JAC, ТРАКС ВОСТОК РУС (КОМПАС), МАЗ РУС, ДАЙМЛЕР
              КАМАЗ РУС (FUSO), ХИНО МОТОРС, FOTON, DONG FENG, SHACHMAN, НЕФАЗ,
              ЗАВОД СТАРТ
            </p>

            <p>
              Наши клиенты: Газпром, Росатом, Россети, РСК «МИГ», Роснефть и др.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
