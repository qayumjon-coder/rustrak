import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { news } from "../object";
import { motion } from "motion/react";
import { container, fadeUp } from "../utils/animation";
import { MoveRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const News = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[40px] font-semibold">Новости</h2>

        <div className="hidden items-center gap-3 md:flex ">
          <button className="rt-prev-el flex items-center justify-center w-9.75 h-9.75 border rounded-md hover:bg-yellow cursor-pointer">
            <span>
              <i className="fa-solid fa-chevron-left"></i>
            </span>
          </button>
          <button className="rt-next-el flex items-center justify-center w-9.75 h-9.75 border rounded-md hover:bg-yellow cursor-pointer">
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
            prevEl: ".rt-prev-el",
            nextEl: ".rt-next-el",
          }}
          breakpoints={{
            576: {
              spaceBetween: 20,
              slidesPerView: 2,
            },
            768: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
            1280: {
              spaceBetween: 20,
              slidesPerView: 4,
            },
          }}
          loop={true}
          className="h-full!"
          style={{
            "--swiper-navigation-color": "#f0f0f0",
            "--swiper-navigation-size": "20px",
            "--swiper-navigation-top-offset": "50%",
          }}
        >
          {news.map((newsItem) => (
            <SwiperSlide
              key={newsItem.id}
              className="flex! h-110 flex-col w-78  bg-white"
            >
              <motion.div variants={fadeUp}>
                <div className="flex h-65 relative">
                  <a href="#">
                    <img
                      src={newsItem.img}
                      alt={"Truck Image " + newsItem.id}
                      className="object-cover h-full rounded-t-md"
                    />
                  </a>
                </div>

                <div className="p-2.5">
                  <p className="font-semibold">{newsItem.date}</p>
                  <a href="#">
                    <div className="pb-2">
                      <h3 className="text-lg font-semibold">
                        {newsItem.title}
                      </h3>
                    </div>
                  </a>

                  <p className="text-xl font-semibold mb-5">{newsItem.price}</p>

                  <div className="flex justify-between items-center">
                    <a
                      href="#"
                      className="flex gap-2.5 text-light-gray hover:text-yellow transition ease duration-200 text-lg"
                    >
                      Подробнее <MoveRight />
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default News;
