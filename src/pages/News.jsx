import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import NewsSwiperImage from "../components/swiper/NewsSwiperImage";
import { news } from "../object";
import { motion } from "motion/react";
import { fadeUp, container } from "../utils/animation";
import { MoveRight } from "lucide-react";

const News = () => {
  return (
    <>
      <section className="pt-35">
        <div className="container">
          <Breadcrumb />
        </div>

        <div className="container">
          <div>
            <h2 className="text-[32px] mb-8 font-semibold">Новости РусТрак</h2>

            <div className="flex mt-5 gap-6.25">
              <NewsSwiperImage />
              <div className="flex flex-col gap-30">
                <div>
                  <p className="text-lg mb-2.75">07.07.2026</p>

                  <a className="text-[24px] font-semibold mb-7.5!" href="#">
                    Первый в России контейнеровоз на шасси КАМАЗ‑65658 выпустил
                    «Рустрак»
                  </a>
                </div>

                <a className="text-lg text-light-gray" href="#">
                  Подробнее <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="container">
          <div className="grid grid-cols-4">
            {news.map((item) => (
              <motion.div
                key={item.id}
                className="flex! h-110 flex-col w-78  bg-white"
                variants={container}
              >
                <motion.div variants={fadeUp}>
                  <div className="flex h-65 relative">
                    <a href="#">
                      <img
                        src={item.img}
                        alt={"Truck Image " + item.id}
                        className="object-cover h-full rounded-t-md"
                      />
                    </a>
                  </div>

                  <div className="p-2.5">
                    <p>{item.date}</p>
                    <a href="#">
                      <div className="pb-2">
                        <h3 className="text-lg font-semibold line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                    </a>

                    <p className="text-xl font-semibold mb-5">{item.price}</p>

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
              </motion.div>
            ))}
            
          </div>
          <div>
            <div className="flex items-center justify-center w-full mt-5">
              <button className="px-6.25 py-2 bg-yellow w-max rounded-sm hover:bg-yellow-hov transition ease-in duration-300 cursor-pointer mb-10">
                Показать ещё
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
