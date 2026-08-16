import { ChevronDown, Heart, Menu, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className="flex justufy-between flex-col border-b-2 border-yellow/30">
        <div className="container">
          <div className="flex justify-between pt-3.5 pb-1">
            <div className="flex items-center leading-3.5 text-sm">
              <img src="/logo/logo.svg" alt="rustrack brand logo" />
              <p className="border-l-2! pl-5! ml-5! border-yellow">
                производство и продажа <br /> автоспецтехники
              </p>
            </div>

            <div className="flex text-[15px] items-center">
              <div className="relative">
                <div className="flex text-left flex-col items-end mr-15! leading-[110%] justify-center">
                  <button
                    onClick={toggleMenu}
                    className="flex flex-end text-[16px] items-center cursor-pointer"
                  >
                    Время работы{" "}
                    <ChevronDown
                      className={
                        isOpen
                          ? "text-amber-400 h-5 rotate-180 transition-all duration-200 ease"
                          : "text-amber-400 h-5 transition-all duration-200 ease"
                      }
                    />
                  </button>
                  <p className="text-light-gray">
                    г. Нижний Новгород ул. Торфяная, 35
                  </p>
                </div>

                {isOpen && (
                  <div
                    className={
                      "absolute top-5 right-10 bg-white p-3.5! shadow-lg rounded-md shadow-black/10 text-sm"
                    }
                  >
                    <p className="mb-3!">Пн-пт: с 8:00 до 18:00</p>
                    <p>Сб-вс: Выходной</p>
                  </div>
                )}
              </div>

              <div className="flex items-center">
                <div className="text-dark-200 flex flex-col items-end text-light-gray mr-5! leading-[110%]">
                  <p>
                    Для регионов: <a href="#">8 (800)-511-05-25</a>
                  </p>
                  <p>
                    Нижний Новгород: <a href="#">8 (831) 225-00-55</a>
                  </p>
                </div>
                <i className="fa-solid fa-phone w-12! h-12 flex! items-center text-2xl justify-center rounded-full bg-yellow"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="container">
          <div className="flex py-3 items-center justify-between">
            <div className="flex items-center">
              <button className="cursor-pointer flex items-center px-4 text-lg py-1.5 gap-5 bg-yellow rounded-sm">
                <Menu />
                Каталог
              </button>

              <nav className="ml-10">
                <ul className="flex items-center">
                  <li>
                    <a className="flex items-center" href="#">
                      О нас <ChevronDown className="text-yellow"/>
                    </a>
                  </li>
                  <li className="ml-8">
                    <a className="flex items-center" href="#">
                      Медиа <ChevronDown className="text-yellow"/>
                    </a>
                  </li>
                  <li className="ml-8">
                    <a href="#">Сервис</a>
                  </li>
                  <li className="ml-8">
                    <a href="#">Ремонт</a>
                  </li>
                  <li className="ml-8">
                    <a href="#">Новости</a>
                  </li>
                  <li className="ml-8">
                    <a href="#">Контакты</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center">
              <form className="flex items-center">
                <input
                  type="text"
                  className="py-1.5 w-78 pl-4 pr-10 border border-yellow rounded-full outline-0 focus:shadow-[0_0_10px_#fec80b66]"
                />
                <button type="submit" className="cursor-pointer">
                  <Search size={20} strokeWidth={1.5} className="-ml-8" />
                </button>
              </form>

              <div className="flex items-center">
                <a href="#"><ShoppingCart size={30} strokeWidth={1.2} className="ml-5" /></a>
                <a href="#"><Heart size={30} strokeWidth={1.2} className="ml-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div>
            <div>
              <h2>Title</h2>

              <ul>
                <li><a href="#">Шторные автомобили</a></li>
                <li><a href="#">Краны-манипуляторы</a></li>
                <li><a href="#">Автотопливозаправщики</a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
              </ul>
            </div>


{/* 
Шторные автомобили
Краны-манипуляторы
Автотопливозаправщики
Автогидроподъёмники
Автоцистерны
Автоэвакуаторы
Бортовые автомобили
Изотермические фургоны
Контейнеровозы
Крюковые погрузчики
Самосвалы
Автомобили ДОПОГ категория EXII */}

            
            <div>
              <h2>Title</h2>

              <ul>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
              </ul>
            </div>
            <div>
              <h2>Title</h2>

              <ul>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
