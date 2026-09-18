import { useTranslation } from "react-i18next";
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
const Repair = () => {
  const {
    t
  } = useTranslation();
  const liArr = [t("bolshaya_proizvodstvennaya_baz"), t("vmestitelnye_ceha_obespechivay"), t("professionalnye_mastera_specia"), t("polnyy_cikl_proizvodstva_vse_r"), t("opyt_17_let_dolgiy_srok_raboty"), t("garantiya_na_remont_obespechiv")];
  return <>
      <section className="pt-35">
        <div className="container">
          <Breadcrumb />
        </div>

        <div className="container">
          <div className="mb-30">
            <h2 className="text-[32px] font-medium mb-8">{t("remont_shtornyh_polupricepov_o")}</h2>

            <p className="text-lg mb-5">{t("logisticheskaya_sfera_opiraets")}</p>

            <div>
              <div className="flex items-center gap-5 justify-center">
                <img className="w-1/3 rounded-sm" src="/images/compare/first_car_2.jpg" alt="Comparing cars first image" />
                <img className="w-1/3 rounded-sm" src="/images/compare/first_car_1.jpg" alt="Comparing cars second image" />
              </div>

              <div className="flex items-center justify-center">
                <button className="py-2 px-6.25 bg-yellow uppercase font-medium rounded-sm hover:bg-yellow-hov transition ease duration-300 cursor-pointer mt-6.25">{t("rasschitat_stoimost_remonta")}</button>
              </div>
            </div>

            <h3 className="mt-5 mb-3 text-[22px] font-semibold">{t("nashi_uslugi")}</h3>

            <p className="text-lg">{t("kompaniya_rustrak_vypolnyaet_p")}</p>
            <p className="text-lg">
              <b>{t("vazhno")}</b>{t("remont_hodovoy_dvigatelya_zame")}</p>

            <div className="flex justify-center gap-5 w-full h-100 my-5">
              <div className="w-150">
                <ReactCompareSlider className=" rounded-sm" itemOne={<ReactCompareSliderImage src="/images/compare/slider/first.jfif" alt="Image one" />} itemTwo={<ReactCompareSliderImage src="/images/compare/slider/second.jfif" alt="Image two" />} />
              </div>

              <div className="w-75">
                <ReactCompareSlider className=" rounded-sm" itemOne={<ReactCompareSliderImage src="/images/compare/slider/second-first.jfif" alt="Image one" />} itemTwo={<ReactCompareSliderImage src="/images/compare/slider/second-second.jfif" alt="Image two" />} />
              </div>
            </div>

            <div>
              <h3 className="mt-5 mb-3 text-[22px] font-semibold">{t("preimushchestva_kompanii_rustr")}</h3>

              <ul className="flex flex-col">
                {liArr.map((item, i) => <li key={i} className="pb-2.5 text-lg">
                    <span className="romb"></span>
                    <p>{item}</p>
                  </li>)}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <img src="/images/proizvodstvo_3.jpg" alt="proizvodstvo_3 image" />

              <div className="flex">
                <img className="w-1/3" src="/images/proizvodstvo_1.png" alt="" />
                <img className="w-1/3" src="/images/proizvodstvo_4.jpg" alt="" />
                <img className="w-1/3" src="/images/proizvodstvo_2.png" alt="" />
              </div>
              <div className="flex items-center justify-center">
                <button className="mt-6.25 py-2 px-6.25 bg-yellow uppercase font-medium rounded-sm hover:bg-yellow-hov transition ease duration-300 cursor-pointer">{t("rasschitat_stoimost_remonta")}</button>
              </div>
            </div>

            <h3 className="mt-5 mb-3 text-[22px] font-semibold">{t("kachestvennyy_servis_dlya_polu")}</h3>

            <p className="text-lg">{t("remont_shtornyh_polupricepov_p")}</p>
          </div>
        </div>
      </section>
    </>;
};
export default Repair;