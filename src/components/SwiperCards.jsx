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
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-129.5! rounded-2xl"
        style={{
          "--swiper-navigation-color": "#f0f0f0",
          "--swiper-navigation-size": "20px",
          "--swiper-navigation-top-offset": "50%",
        }}>

        {swiperCardTrck.map(item => (
            <SwiperSlide key={item.id}>

                <div>
                    <h3>{item.title}</h3>
                    <p>{item.quantity} моделей</p>
                </div>

                <img src={item.image} alt={"Truck Image " + item.id} className="w-full h-full object-cover" />
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}

export default SwiperCards