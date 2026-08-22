import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { swiperCardTrck } from "../object";

const SwiperCards = () => {
  return (
    <div>
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
          <SwiperSlide key={item.id}>
            <a href="#" className="flex! justify-between! w-full flex-col h-85! border rounded-md border-light-gray/20 hover:border-yellow shadow-smooth-yellow transition ease duration-200">
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
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCards;
