const Footer = () => {
  return (
    <div className="text-white">
      <div className="flex justify-between">
        <div className="mb-7.5">
          <span className="inline-block mb-2">
            Тел/факс:
            <a className="ml-1" href="tel:8312250055">8 (831) 225-00-55</a>
          </span><br />
          <span className="inline-block mb-2">
            Email:
            <a className="ml-1" href="mailto:info@rtrf.ru">info@rtrf.ru</a>
          </span>

          <address className="mb-4">г. Нижний Новгород ул. Торфяная, 35</address>

          <button className="py-3.25 px-7.5 bg-yellow text-black rounded-sm cursor-pointer hover:bg-yellow-hov transition ease duration-200">Заказать звонок</button>
          <img className="mt-6.25" width={200} src="/images/qr-code.svg" alt="QR Code image" />
        </div>
        <div className="flex mb-10 gap-20 text-sm text-light-gray font-semibold">
          <div>
            <h2 className="text-base mb-8 text-white">О нас</h2>

            <ul className="flex gap-20">
              <div className="flex flex-col gap-3 mr-20 text-light-gray">
                <li>
                  <a href="#">О компании ООО «Рустрак»</a>
                </li>
                <li>
                  <a href="#">Новости</a>
                </li>
                <li>
                  <a href="#">Наши партнёры</a>
                </li>
                <li>
                  <a href="#">Производство</a>
                </li>
                <li>
                  <a href="#">Поставщикам и партнёрам</a>
                </li>
                <li>
                  <a href="#">Отзывы</a>
                </li>
                <li>
                  <a href="#">Сертификаты</a>
                </li>
              </div>

              <div className="flex flex-col gap-3 mr-20 ">
                <li>
                  <a href="#">Вакансии</a>
                </li>
                <li>
                  <a href="#">Кредит и лизинг</a>
                </li>
                <li>
                  <a href="#">Сервис</a>
                </li>
                <li>
                  <a href="#">Ремонт</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
                <li>
                  <a href="#">Полезные статьи</a>
                </li>
              </div>
            </ul>
          </div>
          <div >
            <h2 className="text-base mb-8 text-white">Медиа</h2>

            <ul className="flex flex-col gap-3">
              <li>
                <a href="#">Фотогалерея</a>
              </li>
              <li>
                <a href="#">Видео</a>
              </li>
              <li>
                <a href="#">Рекламные материалы</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex">
        <p className="text-sm mr-60 text-light-gray opacity-40 font-medium">
          2009 - 2026 © Rus - Trucks Информация на сайте не является <br /> публичной
          офертой, определяемой согласно статье 435 Гражданского <br /> кодекса РФ и
          носит исключительно информационный характер.
        </p>

        <div className="flex gap-5">
          <a href="#"><img width={30} src="images/social/max-messenger-sign-logo.svg" alt="Max messenger" /></a>
          <a href="#"><img width={30} src="images/social/telegram.svg" alt="Telegram logo" /></a>
          <a href="#"><img width={30} src="images/social/VK_com-logo.svg" alt="Vkontakte logo" /></a>
          <a href="#"><img width={30} src="images/social/Rutube_icon.png" alt="Rutube logo" /></a>
          <a href="#"><img className="w-10" src="images/social/YouTube_full-color_icon.png" alt="Youtube Logo" /></a>
          <a href="#"><img width={30} src="images/social/Yandex_Zen_logo_icon.png" alt="Yandex Zen Logo" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
