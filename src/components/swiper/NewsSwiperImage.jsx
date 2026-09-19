import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import { swiperCardTrck } from "../../object";
// import { motion } from "motion/react";
// import { fadeUp, container } from "../../utils/animation";

const NewsSwiperImage = () => {
  const images = [
    {
      img: "/images/swiperNews/000.webp",
    },
    {
      img: "/images/swiperNews/0001.jpg",
    },
    {
      img: "/images/swiperNews/0002.jpg",
    },
    {
      img: "/images/swiperNews/0004.jpg",
    },
    {
      img: "/images/swiperNews/0005.jpg",
    },
    {
      img: "/images/swiperNews/0006.jpg",
    },
  ];

  return (
    <div className="lg:w-170 w-120 mb-5">
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full! rounded-[15px]"
        style={{
          "--swiper-navigation-color": "#f0f0f0",
          "--swiper-navigation-size": "20px",
          "--swiper-navigation-top-offset": "-50%",
        }}
      >
        {images.map((item, i) => (
          <SwiperSlide key={i} className="h-full! rounded-lg!">
            <img
              className="h-full! w-full"
              src={item.img}
              alt={"Marketing image " + `${i + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsSwiperImage;
