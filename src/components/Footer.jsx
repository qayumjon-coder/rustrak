import { motion } from "motion/react";
import { container, containerSec, fadeUp, shortFadeUp } from "../utils/animation";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="flex justify-between">
        <motion.div variants={container} initial='hidden' whileInView='visible' viewport={{ once: true, margin: "-150px" }} className="mb-7.5">
          <motion.span variants={fadeUp} className="inline-block mb-2">
            Тел/факс:
            <a className="ml-1" href="tel:8312250055">8 (831) 225-00-55</a>
          </motion.span><br />
          <motion.span variants={fadeUp} className="inline-block mb-2">
            Email:
            <a className="ml-1" href="mailto:info@rtrf.ru">info@rtrf.ru</a>
          </motion.span>

          <motion.address variants={fadeUp} className="mb-4">г. Нижний Новгород ул. Торфяная, 35</motion.address>

          <motion.button variants={fadeUp} className="py-3.25 px-7.5 bg-yellow text-black rounded-sm cursor-pointer hover:bg-yellow-hov transition ease duration-200">Заказать звонок</motion.button>
          <motion.img variants={fadeUp} className="mt-6.25" width={200} src="/images/qr-code.svg" alt="QR Code image" />
        </motion.div>
        <div className="flex mb-10 gap-20 text-sm text-light-gray font-semibold">
          <div>
            <motion.h2 variants={fadeUp} initial='hidden' whileInView='visible' viewport={{ once: true, margin: "-150px" }} className="text-base mb-8 text-white">О нас</motion.h2>

            <ul className="flex gap-20">
              <motion.div variants={containerSec} initial='hidden' whileInView='visible' viewport={{ once: true, margin: "-150px" }} className="flex flex-col gap-3 mr-20 text-light-gray">
                <motion.li variants={shortFadeUp}>
                  <a href="#">О компании ООО «Рустрак»</a>
                </motion.li>
                <motion.li variants={shortFadeUp}>
                  <a href="#">Новости</a>
                </motion.li>
                <motion.li variants={shortFadeUp}>
                  <a href="#">Наши партнёры</a>
                </motion.li>
                <motion.li variants={shortFadeUp}>
                  <a href="#">Производство</a>
                </motion.li>
                <motion.li variants={shortFadeUp}>
                  <a href="#">Поставщикам и партнёрам</a>
                </motion.li>
                <motion.li variants={shortFadeUp}>
                  <a href="#">Отзывы</a>
                </motion.li>
                <motion.li variants={shortFadeUp}>
                  <a href="#">Сертификаты</a>
                </motion.li>
              </motion.div>

              <motion.div variants={containerSec} initial='hidden' whileInView='visible' viewport={{ once: true, margin: "-150px" }} className="flex flex-col gap-3 mr-20 ">
                <motion.li variants={shortFadeUp}>
                  <a href="#">Вакансии</a>
                </motion.li>
                <motion.li variants={shortFadeUp}>
                  <a href="#">Кредит и лизинг</a>
                </motion.li>
                <motion.li variants={shortFadeUp}>
                  <a href="#">Сервис</a>
                </motion.li>
                <motion.li variants={shortFadeUp}>
                  <a href="#">Ремонт</a>
                </motion.li>
                <motion.li variants={shortFadeUp}>
                  <a href="#">Контакты</a>
                </motion.li>
                <motion.li variants={shortFadeUp}>
                  <a href="#">Полезные статьи</a>
                </motion.li>
              </motion.div>
            </ul>
          </div>
          <div >
            <motion.h2 variants={fadeUp} initial='hidden' whileInView='visible' viewport={{ once: true, margin: "-150px" }} className="text-base mb-8 text-white">Медиа</motion.h2>

            <motion.ul variants={containerSec} initial='hidden' whileInView='visible' viewport={{ once: true, margin: "-150px" }} className="flex flex-col gap-3">
              <motion.li variants={shortFadeUp}>
                <a href="#">Фотогалерея</a>
              </motion.li>
              <motion.li variants={shortFadeUp}>
                <a href="#">Видео</a>
              </motion.li>
              <motion.li variants={shortFadeUp}>
                <a href="#">Рекламные материалы</a>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
      <div className="flex">
        <motion.p variants={fadeUp} initial='hidden' whileInView='visible' viewport={{ once: true}} className="text-sm mr-60 text-light-gray opacity-40 font-medium">
          2009 - 2026 © Rus - Trucks Информация на сайте не является <br /> публичной
          офертой, определяемой согласно статье 435 Гражданского <br /> кодекса РФ и
          носит исключительно информационный характер.
        </motion.p>

        <motion.div variants={container} initial='hidden' whileInView='visible' viewport={{ once: true}}  className="flex gap-5">
          <motion.a variants={shortFadeUp} href="#"><img width={30} src="images/social/max-messenger-sign-logo.svg" alt="Max messenger" /></motion.a>
          <motion.a variants={shortFadeUp} href="#"><img width={30} src="images/social/telegram.svg" alt="Telegram logo" /></motion.a>
          <motion.a variants={shortFadeUp} href="#"><img width={30} src="images/social/VK_com-logo.svg" alt="Vkontakte logo" /></motion.a>
          <motion.a variants={shortFadeUp} href="#"><img width={30} src="images/social/Rutube_icon.png" alt="Rutube logo" /></motion.a>
          <motion.a variants={shortFadeUp} href="#"><img className="w-10" src="images/social/YouTube_full-color_icon.png" alt="Youtube Logo" /></motion.a>
          <motion.a variants={shortFadeUp} href="#"><img width={30} src="images/social/Yandex_Zen_logo_icon.png" alt="Yandex Zen Logo" /></motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
