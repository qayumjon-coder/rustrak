import Breadcrumb from "../components/Breadcrumb";
import { rtrfContacts } from "../object";
import { motion } from "framer-motion";
import { container, fadeUp } from "../utils/animation";


const Contact = () => {
  return (
    <>
      <div className="pt-35">
        <div className="container">
          <Breadcrumb />
        </div>
      </div>

      <section>
        <div className="container">
          <div>
            <h2 className="text-[32px] font-medium mb-8">
              Контакты производителя автоспецтехники РусТрак
            </h2>
            <div className="flex pb-20">
              <div className="bg-yellow w-6/12 p-8 text-lg flex flex-col gap-10 h-87.5">
                <div>
                  <p>603035 г. Нижний Новгород, ул. Торфяная, д. 35</p>
                </div>
                <div>
                  <p>
                    <b>Нижний Новгород:</b>
                    <a href="tel:88312250055">8 (831) 225-00-55</a>
                  </p>
                  <p>
                    <b>Для регионов:</b>
                    <a href="tel:88005110525">8 (800)-511-05-25</a>
                  </p>
                  <p>
                    <b>Электронная почта: </b>
                    <a href="mailto:info@rtrf.ru">info@rtrf.ru</a>
                  </p>
                </div>
                <div>
                  <p>Запись на техническое обслуживание: </p>

                  <a href="tel:88312250055">8 (831) 225-00-55</a>
                </div>
              </div>
              <div
                className="map-wrapper"
                style={{ position: "relative", width: "100%", height: "350px" }}
              >
                <iframe
                  src="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&source=constructor-api&um=constructor%3A5ae836d5720676e2f0d32162afa86c3b03a8a1a0359f4732fa442277488cf68a"
                  frameBorder="0"
                  allowFullScreen
                  allow="geolocation"
                  width="100%"
                  height="350px"
                  style={{ position: "absolute", top: 0, left: 0 }}
                  title="RusTrak location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container">
          <div>
            <h2 className="text-[32px] mb-8 font-medium">Сотрудники</h2>

            <motion.div variants={container} initial='hidden' whileInView='visible' viewport={{once: true, margin: "-250px" }} className="grid grid-cols-4 gap-5">
              {rtrfContacts.map((item, index) => (
                <motion.div variants={fadeUp} key={index} className="flex flex-col justify-between items-center p-5 min-h-102.25 border-light-gray/20 border rounded-lg shadow-lg shadow-light-gray/10">
                  <div className="flex flex-col items-center">
                    <img
                      src="/employees/profile-avatar.avif"
                      alt="Image"
                      className="w-35 h-35 rounded-full" 
                    />
                    <div className="flex flex-col items-center text-center mt-2">
                      <h2 className="text-2xl font-medium">{item.fullName}</h2>
                      <p className="text-light-gray">{item.position}</p>
                    </div>
                  </div>
                  <div className="flex flex-col text-center">
                    <a href={"tel:" + item.mobile}>{item.mobile}</a>
                    <a href={"tel:" + item.phone}>{item.phone}</a>
                    <a href={"mailto:" + item.email}>{item.email}</a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
