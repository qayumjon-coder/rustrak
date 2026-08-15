import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header>
      <div className="flex justufy-between flex-col border-b-2 border-amber-300">
        <div className="container">
          <div className="flex justify-between  pt-3.5! pb-2!">
            <div className="flex items-center">
              <img src="/logo/logo.svg" alt="rustrack brand logo" />
              <p className="border-l-2! pl-5! ml-5!">производство и продажа <br /> автоспецтехники</p>
            </div>

            <div className="flex gap-5">
              <div className="flex text-left! flex-col!">
                <button className="flex flex-end">
                  Время работы <ChevronDown className="text-amber-400" />
                </button>
                <p>г. Нижний Новгород ул. Торфяная, 35</p>
              </div>

              <div className="flex items-center">
                <div className="text-dark-200">
                  <p>
                    Для регионов: <a href="#">8 (800)-511-05-25</a>
                  </p>
                  <p>
                    Нижний Новгород: <a href="#">8 (831) 225-00-55</a>
                  </p>
                </div>
                <i className="fa-solid fa-phone"></i>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className=""></div>
      </div>
    </header>
  );
};

export default Header;
