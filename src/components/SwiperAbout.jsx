import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { aboutSliderData } from "../object";
import { motion } from "motion/react";
import { fadeUp, container } from "../utils/animation";

const SwiperAbout = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-[22px] max-w-162.25">
          Автомобильный завод «РусТрак» является предприятием полного цикла: от конструкторско-технологических разработок до готового изделия.
        </p>

        <div className="items-center gap-3  hidden md:flex">
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

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-prev-el",
            nextEl: ".swiper-next-el",
          }}
          loop={true}
          breakpoints={{
            540: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },

            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className=""
          style={{
            "--swiper-navigation-color": "#f0f0f0",
            "--swiper-navigation-size": "20px",
            "--swiper-navigation-top-offset": "50%",
          }}
        >
          {aboutSliderData.map((item) => (
            <SwiperSlide className="swiperSlide" key={item.id}>
              <motion.div
                variants={fadeUp}
                className="flex! w-full! px-4.5 pt-11.25 pb-5 flex-col h-85! border rounded-md border-light-gray/20 transition ease duration-200"
              > <div className="flex self-start mb-5">
                  <img
                    src={item.icon}
                    alt={"Truck Image " + item.id}
                    className="self-start"
                  />
                </div>
                <div className="py-5">
                  <h3 title={item.title} className="text-xl w-auto text-[24px] text-semibold mb-3.25">
                    {item.title}
                  </h3>
                  <p className="">{item.text}</p>
                </div>

               
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default SwiperAbout;
