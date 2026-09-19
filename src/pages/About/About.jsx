import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumb";
import SwiperAbout from "../../components/swiper/SwiperAbout";
import { aboutRustrakThis } from "../../object";
const About = () => {
  const { t, i18n } = useTranslation();
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
                {t("avtomobilnyy_zavod_rustrak_ved")}
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
          <div className="flex items-center flex-col md:flex-row gap-3">
            <div className="md:w-1/2">
              <h2 className="text-[32px] mb-10 font-semibold">
                {t("segodnya_ooo_rustrak_eto")}
              </h2>

              <ul className="text-lg flex flex-col gap-2">
                {aboutRustrakThis.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 mb-2">
                    <img
                      src="/images/check-icon.svg"
                      alt="check circle icon"
                      className=""
                    />
                    {item.text?.[i18n.language] || item.text?.ru || item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-full md:w-1/2 justify-end">
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
          <div className="flex gap-6 mb-39 flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 gap-5 bg-yellow px-5 py-10 flex flex-col justify-between rounded-lg ">
              <div>
                <h2 className="mb-3 text-[32px] font-medium">
                  {t("otrasli_primeneniya_vypuskaemo")}
                </h2>

                <p className="text-lg">{t("ctroitelnaya_telekommunikacion")}</p>
              </div>
              <div>
                <h2 className="mb-3 text-[32px] font-medium">
                  {t("vypuskaemaya_tehnika")}
                </h2>
                <p className="text-lg">{t("krany_manipulyatory_avtotopliv")}</p>
              </div>
            </div>
            <div className="lg:w-2/3 flex-col sm:flex-row flex gap-6">
              <div className="sm:w-1/2">
                <img
                  className="rounded-lg w-full h-80 sm:h-auto object-cover"
                  src="/images/about-im_v2-1.webp"
                  alt="About image truck images collage"
                />
              </div>
              <div className="sm:w-1/2">
                <img
                  className="rounded-lg w-full h-80 sm:h-auto object-cover"
                  src="/images/about-im2_v2-2.webp"
                  alt="About image truck images collage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 text-lg lg:w-217.5">
            <p>{t("ooo_rustrak_yavlyaetsya_oficia")}</p>

            <p>{t("za_16_let_deyatelnosti_kompani")}</p>

            <p>{t("nashi_klienty_gazprom_rosatom_")}</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
