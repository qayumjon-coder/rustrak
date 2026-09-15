import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Repair = () => {
  const liArr = [
    "Большая производственная база – позволяет одновременно выполнять несколько крупных заказов и обслуживать большое количество техники.",
    "Вместительные цеха – обеспечивают удобство работы с крупногабаритными полуприцепами и комфорт для сотрудников.",
    "Профессиональные мастера – специалисты с опытом и знаниями гарантируют качественный и точный ремонт.",
    "Полный цикл производства – все работы выполняются на месте, от диагностики до финальной сборки, без привлечения сторонних подрядчиков.",
    "Опыт 17 лет – долгий срок работы на рынке подтверждает надёжность и компетентность компании.",
    "Гарантия на ремонт – обеспечивает уверенность в долговечности и качестве выполненных работ.",
  ];

  return (
    <>
      <section className="pt-35">
        <div className="container">
          <Breadcrumb />
        </div>

        <div className="container">
          <div className="mb-30">
            <h2 className="text-[32px] font-medium mb-8">
              Ремонт шторных полуприцепов от компании «Рустрак» в Нижнем
              Новгороде
            </h2>

            <p className="text-lg mb-5">
              Логистическая сфера опирается на устойчивую работу прицепной
              техники. Ремонт шторных полуприцепов обеспечивает восстановление
              работоспособности конструкции после интенсивной эксплуатации. Наши
              мастера учитывают конструктивные особенности узлов и применяют
              проверенные методы обслуживания. Компания «Рустрак» в Нижнем
              Новгороде предлагает сервис, ориентированный на качество и
              долговечность оборудования. Своевременные технические мероприятия
              поддерживают стабильное состояние прицепов при интенсивных
              нагрузках. Надёжный подход к обслуживанию формирует уверенность в
              бесперебойной работе техники.
            </p>

            <div>
              <div className="flex items-center gap-5 justify-center">
                <img
                  className="w-1/3 rounded-sm"
                  src="/images/compare/first_car_2.jpg"
                  alt="Comparing cars first image"
                />
                <img
                  className="w-1/3 rounded-sm"
                  src="/images/compare/first_car_1.jpg"
                  alt="Comparing cars second image"
                />
              </div>

              <div className="flex items-center justify-center">
                <button className="py-2 px-6.25 bg-yellow uppercase font-medium rounded-sm hover:bg-yellow-hov transition ease duration-300 cursor-pointer mt-6.25">
                  Рассчитать стоимость ремонта
                </button>
              </div>
            </div>

            <h3 className="mt-5 mb-3 text-[22px] font-semibold">Наши услуги</h3>

            <p className="text-lg">
              Компания «Рустрак» выполняет полный ремонт полуприцепов в Нижнем
              Новгороде после повреждений или выхода из строя. Мы
              восстанавливаем конструкцию прицепа, исправляем каркас и боковые
              тенты, ремонтируем двери, замки и механизмы открывания, а также
              восстанавливаем пол и борта прицепа. Все работы выполняются с
              высокой точностью и соблюдением стандартов качества, что
              гарантирует долговечность восстановленных элементов.
            </p>
            <p className="text-lg">
              <b>Важно:</b> ремонт ходовой, двигателя, замена масел и плановое
              техническое обслуживание не производятся.
            </p>

            <div className="flex justify-center gap-5 w-full h-100 my-5">
              <div className="w-150">
                <ReactCompareSlider
                  className=" rounded-sm"
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/compare/slider/first.jfif"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/compare/slider/second.jfif"
                      alt="Image two"
                    />
                  }
                />
              </div>

              <div className="w-75">
                <ReactCompareSlider
                  className=" rounded-sm"
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/compare/slider/second-first.jfif"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/compare/slider/second-second.jfif"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>

            <div>
              <h3 className="mt-5 mb-3 text-[22px] font-semibold">
                Преимущества компании «Рустрак»
              </h3>

              <ul className="flex flex-col">
                {liArr.map((item, i) => (
                  <li key={i} className="pb-2.5 text-lg">
                    <span className="romb"></span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <img
                src="/images/proizvodstvo_3.jpg"
                alt="proizvodstvo_3 image"
              />

              <div className="flex">
                <img
                  className="w-1/3"
                  src="/images/proizvodstvo_1.png"
                  alt=""
                />
                <img
                  className="w-1/3"
                  src="/images/proizvodstvo_4.jpg"
                  alt=""
                />
                <img
                  className="w-1/3"
                  src="/images/proizvodstvo_2.png"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center">
                <button className="mt-6.25 py-2 px-6.25 bg-yellow uppercase font-medium rounded-sm hover:bg-yellow-hov transition ease duration-300 cursor-pointer">
                  Рассчитать стоимость ремонта
                </button>
              </div>
            </div>

            <h3 className="mt-5 mb-3 text-[22px] font-semibold">Качественный сервис для полуприцепов</h3>

            <p className="text-lg">
              Ремонт шторных полуприцепов помогает продлить срок службы техники
              и сохранить её функциональность. Обратитесь к нашей команде, чтобы
              получить надежное и аккуратное обслуживание. Компания «Рустрак» в
              Нижнем Новгороде выполняет работы с вниманием к деталям и строгими
              стандартами качества. Доверьте нам технические задачи и получите
              результат, который оправдает ожидания. Запланируйте обслуживание
              заранее и убедитесь в удобстве нашего сервиса. Для начала
              сотрудничества свяжитесь с нами любым удобным способом, и мы
              поможем организовать все быстро и профессионально.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Repair;
