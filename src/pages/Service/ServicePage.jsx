import Breadcrumb from "../../components/Breadcrumb";

const ServicePage = () => {
  return (
    <>
      <section className="pt-35">
        <div className="container">
          <Breadcrumb />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="w-217.5">
            <div className="mb-10">
              <h2 className="text-[32px] font-medium">
                Сервис по гарантийному ремонту автоспецтехники РусТрак
              </h2>

              <p className="py-5 text-lg">
                После приобретения продукции в ООО «Рустрак» Вы всегда можете
                обратиться за помощью по любым вопросам, связанными с
                гарантийным обслуживанием, настройкой и ремонтом транспорного
                средства, поставкой дополнительного обурудования, а также
                внесением доработок под задачи клиента. Вы можете обратиться за
                технической поддержкой и консультацией по эксплуатации в любое
                время и в любой срок после заключения контракта.
              </p>
            </div>
            <div>
              <h3 className="text-[24px] mb-8 font-medium">Как получить поддержку?</h3>
              <ul className="flex flex-col gap-8 pl-8 mb-18">
                <li className="flex gap-5">
                  <b className="bg-yellow w-9.5 h-9.5 rounded-full text-[24px] flex items-center justify-center">
                    1
                  </b>
                  <p className="text-lg">
                    <a href="#">Заполнить Рекламационный акт</a> с внесением
                    подписи ответственного лица и печати <br /> организации, подробно
                    описать характер отказа. Приложить фото: шильды в <br />
                    пассажирской двери, шильды вышедшего из строя оборудования,
                    первая страница ПТС.
                  </p>
                </li>
                <li className="flex gap-5 items-center text-lg">
                  <b className="bg-yellow w-9.5 h-9.5 rounded-full text-[24px] flex items-center justify-center">
                    2
                  </b>
                  Сфотографировать неисправности, а также общий вид изделия в
                  целом.
                </li>
                <li className="mb-8 flex gap-5 items-center">
                  <b className="bg-yellow w-9.5 h-9.5 rounded-full text-[24px] flex items-center justify-center">
                    3
                  </b>
                  <p className="text-lg">
                    Отправить заполненный акт, копию ПТС, фотографии
                    неисправностей по электронной почте:
                    <a href="malto:kb1@rtrf.ru">kb1@rtrf.ru</a>
                  </p>
                </li>
              </ul>

              <p className="text-lg mb-8.75">
                После этого специалисты гарантийной службы свяжутся с владельцем
                и предложат варианты организации ремонта.
              </p>
              <p className="text-lg mb-5">
                Любые вопросы относительно гарантийного обслуживания техники
                производства «РусТрак» можно задать по телефону{" "}
                <a href="tel:88312250055`">8 (831) 225-00-55 (доб 610)</a> или
                по электронной почте:{" "}
                <a href="malto:kb1@rtrf.ru">kb1@rtrf.ru</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
