import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { recommended_trucks } from "../object";
import { ArrowDownToLine, Heart } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, container } from "../utils/animation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RecommendedTrucks = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[40px] font-semibold">Рекомендуемая продукция</h2>

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

      <motion.dev
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            prevEl: ".swiper-prev-el",
            nextEl: ".swiper-next-el",
          }}
          className="h-full!"
          style={{
            "--swiper-navigation-color": "#f0f0f0",
            "--swiper-navigation-size": "20px",
            "--swiper-navigation-top-offset": "50%",
          }}
        >
          {recommended_trucks.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex! h-110 flex-col w-78"
            >
              <motion.div variants={fadeUp} transition={{ease: "easeIn", }} className="bg-white">
                <div className="flex h-65 relative">
                  <a href="#">
                    <img
                      src={item.img}
                      alt={"Truck Image " + item.id}
                      className="object-cover h-full rounded-t-md"
                    />
                  </a>
                  <button className="absolute right-2 top-2 cursor-pointer group">
                    <Heart
                      className="group-hover:fill-yellow"
                      size={30}
                      strokeWidth={1}
                    />
                  </button>
                </div>

                <div className="p-2.5">
                  <a href="#">
                    <div className="pb-2">
                      <h3 className="text-lg line-clamp-1">{item.title}</h3>
                    </div>
                  </a>

                  <p className="text-xl font-semibold mb-5">{item.price}</p>

                  <div className="flex justify-between items-center">
                    <a href="#" className="py-3 px-7.5 bg-yellow rounded-sm">
                      Подробнее
                    </a>
                    <a href="#" className="flex gap-2.5 text-light-gray">
                      Получить КП <ArrowDownToLine />
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.dev>
    </div>
  );
};

export default RecommendedTrucks;
