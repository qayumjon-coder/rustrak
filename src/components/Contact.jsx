import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, container, shortFadeUp } from "../utils/animation";

const ContactSec = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="pt-10 relative z-10">
      <div className="mb-9.5">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="text-[42px] font-semibold"
        >
          ОСТАЛИСЬ ВОПРОСЫ?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          viewport={{ once: true, margin: "-150px" }}
          className="text-lg"
        >
          Оставьте свои контактные данные, и мы перезвоним Вам в ближайшее время
        </motion.p>
      </div>
      <motion.form
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
      >
        <div className="flex items-end xl gap-5 flex-wrap sm:flex-nowrap lg:w-188 mb-4">
          <div className="flex flex-col w-full">
            <motion.label
              variants={shortFadeUp}
              htmlFor="abc"
              className="text-sm"
            >
              Ваше имя *
            </motion.label>
            <motion.input
              variants={shortFadeUp}
              className="py-2.75 px-3 rounded-sm border outline-0"
              type="text"
              placeholder="Ivan"
            />
          </div>
          <div className="flex flex-col w-full">
            <motion.label
              variants={shortFadeUp}
              htmlFor="abc"
              className="text-sm"
            >
              Телефон *
            </motion.label>
            <motion.input
              variants={shortFadeUp}
              className="py-2.75 px-3 rounded-sm border outline-0"
              type="tel"
              onMouseLeave={() => setIsHovered(false)}
              onMouseEnter={() => setIsHovered(true)}
              placeholder={isHovered ? "+7 (___) ___-__-__" : "+7"}
            />
          </div>

          <motion.button
            variants={shortFadeUp}
            className="py-3.25 px-7.5 self bg-yellow rounded-sm"
            type="submit"
          >
            Отправить
          </motion.button>
        </div>

        <motion.div
          variants={shortFadeUp}
          className="flex gap-1 text-light-gray text-sm flex-col sm:flex-row"
        >
          <p>Нажимая на кнопку отправить</p>
          <a
            href="#"
            className="text-indigo-700 underline opacity-50 hover:no-underline"
          >
            Вы соглашаетесь на обработку персональных данных
          </a>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default ContactSec;
