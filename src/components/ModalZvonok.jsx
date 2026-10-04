import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

const ModalZvonok = ({ isModalOpen, setIsModalOpen }) => {
<<<<<<< HEAD
  const { t } = useTranslation();
=======
    const { t } = useTranslation();
>>>>>>> 0c2eab550a5641e4825d41c7236059fb5acf8ba1

  return (
    <>
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-101 cursor-pointer bg-black/60 w-full h-screen flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white relative cursor-auto py-10 px-10 rounded-lg z-102"
          >
            <button
              className="absolute top-3 right-3 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={30} />
            </button>
            <div className="mb-10 text-center">
              <h2 className="text-[32px] font-medium">{t("zakazat_zvonok_title")}</h2>
              <p>{t("modal_manager_text")}</p>
            </div>

            <form action="#">
              <div className="flex flex-col mb-3">
                <label className="flex flex-col mb-3" htmlFor="name">
                  {t("vashe_imya_star")}
                  <input
                    type="text"
                    id="name"
                    className="py-2.5 pl-3 pr-5 border-2 rounded-sm border-light-gray/50"
                    placeholder="Ivan"
                    required
                  />
                </label>

                <label className="flex flex-col mb-3" htmlFor="phone">
                  {t("telefon_star")}
                  <input
                    type="tel"
                    id="phone"
                    className="py-2.5 pl-3 pr-5 border-2 rounded-sm border-light-gray/50"
                    placeholder="+7"
                    required
                  />
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  className="accent-black w-7 h-7"
                  type="checkbox"
                  name="personal data analysis checkbox"
                  id="personal_data_analysis"
                />
                <label htmlFor="personal_data_analysis" className="text-sm">
                  {t("ya_soglasen")}{" "}
                  <a
                    href="https://rtrf.ru/upload/privacy_policy.pdf"
                    className="text-blue-700"
                  >
                    {t("na_obrabotku_pers_dannyh")}
                  </a>
                </label>
              </div>

              <button className="cursor-pointer w-full px-10 py-3.25 bg-yellow mt-10 rounded-sm">
                {t("ostavit_zayavku")}
              </button>
            </form>
            <div className="text-[12px] text-center mt-5">
              <p>{t("dlya_regionov_phone")}</p>
              <p>{t("nizhniy_novgorod_phone")}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalZvonok;
