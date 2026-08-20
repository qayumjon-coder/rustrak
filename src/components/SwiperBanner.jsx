import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperBanner = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-129.5! rounded-2xl"
        style={{
          "--swiper-navigation-color": "#f0f0f0",
          "--swiper-navigation-size": "20px",
          "--swiper-navigation-top-offset": "50%",
        }}
      >
        <SwiperSlide className="h-full! relative!">
          <div>
            <img
              src="/images/banner1.jpg"
              alt="Banner 1"
              className="w-full h-129.5 object-cover"
            />
          </div>

          <div className="absolute z-100 top-0 pt-31 pl-8 w-2/5 text-white">
            <h1 className="text-3xl mb-4 font-bold ">
              АТЗ Рустрак включены в реестр российской промышленной продукции
            </h1>
            <p className="mb-8">Теперь доступны для приобретения по 44 ФЗ</p>
            <a
              href="#"
              className="py-2.5 px-7.5 border-2 rounded-sm border-yellow hover:bg-yellow hover:text-black cursor-pointer transition ease duration-200"
            >
              Заказать звонок
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-full! relative!">
          <div className="relative">
            <img
              src="/images/banner2.jpg"
              alt="Banner 2"
              className="w-full h-129.5 object-cover"
            />
          </div>
          <div className="w-4/5 h-full bg-linear-to-r from-black/80 to-black/0 absolute top-0 left-0 z-10">
            <div className="absolute flex flex-col justify-center items-start z-100 top-0 pt-31 pl-10 w-1/2 text-white">
              <h1 className="text-3xl mb-4 font-bold ">
                В наличии шторные фургоны КАМАЗ 4308
              </h1>
              <p className="mb-8">
                Размеры надстройки 6200х2550х2850 мм. <br /> Цена 5 500 000 руб.
              </p>
              <a
                href="#"
                className="py-2.5 px-7.5 border-2 rounded-sm border-yellow hover:bg-yellow hover:text-black cursor-pointer transition ease duration-200"
              >
                Заказать звонок
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-full!">
          <div>
            <img
              src="/images/banner3.webp"
              alt="Banner 3"
              className="w-full h-129.5 object-cover"
            />
          </div>
          <div className="w-6/8 h-full bg-linear-to-r from-black/80 to-black/0 absolute top-0 left-0 z-10">
            <div className="absolute flex flex-col justify-center items-start z-100 top-0 pt-31 pl-10 w-1/2 text-white">
              <h1 className="text-[28px] mb-4 font-bold leading-[1.1]">
                Бортовые платформы со шторным механизмом
              </h1>
              <p className="mb-8">
                Производство и поставка коммерческого транспорта, бортовых
                платформ, в том числе со сдвижными шторами, сдвижной крышей.
              </p>
              <a
                href="#"
                className="py-2.5 px-7.5 rounded-sm bg-yellow hover:bg-yellow-hov text-black cursor-pointer transition ease duration-200"
              >
                Подробнее
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full!">
          <div>
            <img
              src="/images/banner4.jpg"
              alt="Banner 4"
              className="w-full h-129.5 object-cover"
            />
          </div>

          <div className="w-6/8 h-full bg-linear-to-r from-black/80 to-black/0 absolute top-0 left-0 z-10">
            <div className="absolute flex flex-col justify-center items-start z-100 top-0 pt-34 pl-10 w-1/2 text-white">
              <h1 className="text-[28px] mb-4 font-bold leading-[1.1]">
                ООО «РусТрак»
              </h1>
              <p className="mb-8">
                Производство и поставка специализированной техники и
                спецтранспорта
              </p>
              <div className="flex gap-4 items-center">
                <a
                  href="#"
                  className="py-2.5 px-7.5 rounded-sm bg-yellow hover:bg-yellow-hov text-black cursor-pointer transition ease duration-200"
                >
                  Открыть каталог
                </a>

                <a
                  href="#"
                  className="py-2.5 px-7.5 rounded-sm border-2 border-yellow hover:bg-yellow-hov hover:text-black cursor-pointer transition ease duration-200"
                >
                  Заказать звонок
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full!">
          <div>
            <img
              src="/images/banner5.jpg"
              alt="Banner 4"
              className="w-full h-129.5 object-cover"
            />
          </div>

          <div className="w-6/8 h-full bg-linear-to-r from-black/80 to-black/0 absolute top-0 left-0 z-10">
            <div className="absolute flex flex-col justify-center items-start z-100 top-0 pt-34 pl-10 w-1/2 text-white">
              <h1 className="text-[28px] mb-4 font-bold leading-[1.1]">
                Краны манипуляторы на базе MCV/HCV грузовиков
              </h1>
              <p className="mb-8">
                Производство автомобилей с крано-манипуляторными установками.
                Использование противосдвиговых пластин, установка блока
                распределителя управления задними опорами, открытый профиль
                HOSSEN, монтажные плиты в основании КМУ, окрас платформы в цвет
                крана.
              </p>
              <div className="flex gap-4 items-center">
                <a
                  href="#"
                  className="py-2.5 px-7.5 rounded-sm bg-yellow hover:bg-yellow-hov text-black cursor-pointer transition ease duration-200"
                >
                  Подробнее
                </a>

                <a
                  href="#"
                  className="py-2.5 px-7.5 rounded-sm border-2 border-yellow hover:bg-yellow-hov hover:text-black cursor-pointer transition ease duration-200"
                >
                  Заказать звонок
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full!">
          <div>
            <img
              src="/images/banner6.jpg"
              alt="Banner 4"
              className="w-full h-129.5 object-cover"
            />
          </div>

          <div className="w-6/8 h-full bg-linear-to-r from-black to-black/1 absolute top-0 left-0 z-10">
            <div className="absolute flex flex-col justify-center items-start z-100 top-0 pt-34 pl-10 w-1/2 text-white">
              <h1 className="text-[28px] mb-4 font-bold leading-[1.1]">
                Автотопливозаправщики на базе MCV/HCV грузовиков
              </h1>
              <p className="mb-8">
                Производство и поставка автотопливозаправщиков объёмом 8 и 6
                м.куб. Алюминиевые коммуникации, композитные напорно-всасывающие
                рукава, производительный узел выдачи топлива.
              </p>
              <div className="flex gap-4 items-center">
                <a
                  href="#"
                  className="py-2.5 px-7.5 rounded-sm bg-yellow hover:bg-yellow-hov text-black cursor-pointer transition ease duration-200"
                >
                  Подробнее
                </a>

                <a
                  href="#"
                  className="py-2.5 px-7.5 rounded-sm border-2 border-yellow hover:bg-yellow-hov hover:text-black cursor-pointer transition ease duration-200"
                >
                  Заказать звонок
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperBanner;
