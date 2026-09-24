import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumb";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Vacancies = () => {
  const { t } = useTranslation();

  const vacancyList = [
    {
      title: t("avtoelektrik"),
      content: `Обязанности:
— Диагностика и ремонт электрооборудования автомобилей;
— Техническое обслуживание спецтехники;
— Работа с электросхемами и блоками управления.

Требования:
— Опыт работы от 2 лет;
— Знание электросхем грузовых автомобилей;
— Ответственность и внимательность.

Условия:
— Официальное трудоустройство;
— Стабильная заработная плата;
— Дружный коллектив;
— Полная занятость, 5/2.

Телефон: 8 (831) 225-00-55`,
    },
  ];

  const [open, setOpen] = useState(null);
  return (
    <section className="pt-35 mb-20">
      <div className="container">
        <Breadcrumb />
        <h1 className="text-2xl font-semibold mb-8">{t("vakansii")}</h1>

        <div className="flex flex-col gap-3">
          {vacancyList.map((v, i) => (
            <div key={i} className="border border-gray-200 rounded">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition duration-200 cursor-pointer"
              >
                <span>{v.title}</span>
                {open === i ? (
                  <FiChevronUp size={20} className="text-gray-500" />
                ) : (
                  <FiChevronDown size={20} className="text-gray-500" />
                )}
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-gray-700 whitespace-pre-line leading-relaxed border-t border-gray-100">
                  {v.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Vacancies;
