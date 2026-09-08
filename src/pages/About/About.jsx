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

      <section className="mb-5">
        <div className="container">
          <div>
            <SwiperAbout />
          </div>
        </div>
      </section>

      <section className="pt-14">
        <div className="container">
          <div>
            <div>
              <h2 className="">Сегодня ООО «Рустрак» - это:</h2>

              <ul>
                {aboutRustrakThis.map((item) => (
                  <li className="flex items-center gap-3 mb-2">
                    <img src="/images/check-icon.svg" alt="check circle icon" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <img src="/images/about-track.png" alt="Truck about preview image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
