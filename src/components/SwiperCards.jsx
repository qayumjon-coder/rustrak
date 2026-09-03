import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { swiperCardTrck } from "../object";
import { motion } from "motion/react";
import { fadeUp, container } from "../utils/animation";

const SwiperCards = () => {
  return (
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

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={4}
          navigation={{
            prevEl: ".swiper-prev-el",
            nextEl: ".swiper-next-el",
          }}
          loop={true}
          className="p-5!"
          style={{
            "--swiper-navigation-color": "#f0f0f0",
            "--swiper-navigation-size": "20px",
            "--swiper-navigation-top-offset": "50%",
          }}
        >
          {swiperCardTrck.map((item) => (
            <SwiperSlide className="swiperSlide" key={item.id}>
              <motion.a
                variants={fadeUp}
                href="#"
                className="flex! justify-between! w-full flex-col h-85! border rounded-md border-light-gray/20 hover:border-yellow shadow-smooth-yellow transition ease duration-200"
              >
                <div className="pt-5 pl-4.5">
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="text-light-gray">{item.quantity} моделей</p>
                </div>

                <div className="flex self-end">
                  <img
                    src={item.img}
                    alt={"Truck Image " + item.id}
                    className="self-end"
                  />
                </div>
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default SwiperCards;
