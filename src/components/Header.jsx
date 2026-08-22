import { useEffect, useState } from "react";
import { ChevronDown, Heart, Menu, Search, ShoppingCart, X } from "lucide-react";
import NavbarLink from "./NavbarLink.jsx";
import { links, links2, links3 } from "../object.js";

const Header = ({ t, language, setLanguage, languages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if(isNavOpen){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };

  }, [isNavOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleNavList = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="fixed w-full top-0 left-0 z-100 bg-white">
      <div className={isHidden ? "absolute -top-full w-full justufy-between flex-col border-b-2 border-yellow/30 transition-all ease duration-200" : "top-0 justufy-between flex-col border-b-2 border-yellow/30"}>
        <div className="container">
          <div className="flex justify-between pt-3.5 pb-1">
            <div className="flex items-center leading-3.5 text-sm">
              <img src="/logo/logo.svg" alt="rustrack brand logo" />
              <p className="border-l-2! pl-5! ml-5! border-yellow">
                {t.company}
              </p>
            </div>

            <div className="flex text-[15px] items-center">
              <div className="relative">
                <div className="flex text-left flex-col items-end mr-15! leading-[110%] justify-center">
                  <button
                    onClick={toggleMenu}
                    className="flex flex-end text-[16px] items-center cursor-pointer"
                  >
                    {t.workingHours}{" "}
                    <ChevronDown
                      className={
                        isOpen
                          ? "text-amber-400 h-5 rotate-180 transition-all duration-200 ease"
                          : "text-amber-400 h-5 transition-all duration-200 ease"
                      }
                    />
                  </button>
                  <p className="text-light-gray">{t.address}</p>
                </div>

                {isOpen && (
                  <div className="absolute top-5 right-10 bg-white p-3.5! shadow-lg rounded-md shadow-black/10 text-sm">
                    <p className="mb-3!">Пн-пт: с 8:00 до 18:00</p>
                    <p>Сб-вс: Выходной</p>
                  </div>
                )}
              </div>

              <div className="flex items-center">
                <div className="text-dark-200 flex flex-col items-end text-light-gray mr-5! leading-[110%]">
                  <p>
                    {t.forRegions} <a href="#">8 (800)-511-05-25</a>
                  </p>
                  <p>
                    {t.city} <a href="#">8 (831) 225-00-55</a>
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
              <button onClick={toggleNavList} className="cursor-pointer flex items-center px-4 text-lg py-1.5 gap-5 bg-yellow rounded-sm">
                {isNavOpen ? <X /> : <Menu />}
                <p className={isHidden ? "hidden" : "block"}>{t.catalog}</p>
              </button>

              <img src="/logo/logo.svg" alt="rustrack brand logo" className={isHidden ? "flex ml-4" : "hidden mb-4"} />

              <nav className="ml-5">
                <ul className="flex items-center">
                  <div className={isHidden ? "hidden" : "flex"}>
                    <li>
                    <button onClick={toggleNavList} className="flex items-center cursor-pointer">
                      {t.about} <ChevronDown className={ isNavOpen ? "rotate-180 text-yellow" : "text-yellow"} />
                    </button>
                  </li>
                  <li className="ml-8">
                    <button onClick={toggleNavList} className="flex items-center cursor-pointer">
                      {t.media} <ChevronDown className="text-yellow" />
                    </button>
                  </li>
                  </div>
                  <li className="ml-8">
                    <a href="#">{t.service}</a>
                  </li>
                  <li className="ml-8">
                    <a href="#">{t.repair}</a>
                  </li>
                  <li className="ml-8">
                    <a href="#">{t.news}</a>
                  </li>
                  <li className="ml-8">
                    <a href="#">{t.contacts}</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder={t.search}
                  className="py-1.5 w-full pl-4 pr-10 border border-yellow rounded-full outline-0 focus:shadow-[0_0_10px_#fec80b66]"
                />
                <button type="submit" className="cursor-pointer">
                  <Search size={20} strokeWidth={1.5} className="-ml-8" />
                </button>
              </form>

              <div className="flex items-center">
                <a href="#">
                  <ShoppingCart size={30} strokeWidth={1.2} className="ml-5" />
                </a>
                <a href="#">
                  <Heart size={30} strokeWidth={1.2} className="ml-5" />
                </a>
              </div>

              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <select
                  value={language}
                  onChange={(event) => setLanguage(event.target.value)}
                  className="rounded-md border border-yellow bg-white px-2 py-1 outline-none"
                >
                  {languages.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <i className={isHidden ? "fa-solid fa-phone flex! w-12! h-12 items-center ml-4 text-2xl justify-center rounded-full bg-yellow" : "fa-solid fa-phone hidden! w-12! h-12 items-center ml-4 text-2xl justify-center rounded-full bg-yellow"}></i>
            </div>
          </div>
        </div>
      </div>

      <div className={!isNavOpen ? "hidden bg-light-gray/10 absolute w-full" : "open-nav bg-gray-50 absolute w-full z-100 h-screen"}>
        <div className="container">
          <div className="grid grid-cols-3 py-4">
            <div>
              <h2 className="text-2xl font-bold mb-4">{t.categories}</h2>

              <ul>
                {links.map((link) => (
                  <NavbarLink
                    liSelector={"mb-4"}
                    key={link.id}
                    link={link.linkVal}
                    text={link.content}
                  />
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">{t.about}</h2>

              <ul>
                {links2.map((link) => (
                  <NavbarLink
                    liSelector={"mb-4"}
                    key={link.id}
                    link={link.linkVal}
                    text={link.content}
                  />
                ))}
              </ul>
            </div>

            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4">{t.media}</h2>

                <ul>
                  {links3.map((link) => (
                    <NavbarLink
                      liSelector={"mb-4"}
                      key={link.id}
                      link={link.linkVal}
                      text={link.content}
                    />
                  ))}
                </ul>
              </div>
              <div>
                <ul>
                  <NavbarLink
                    liSelector={"mb-7"}
                    selector={`text-2xl font-bold mb-[34px]`}
                    link="#"
                    text={t.service}
                  />
                  <NavbarLink
                    liSelector={"mb-7"}
                    selector={`text-2xl font-bold mb-[34px]`}
                    link="#"
                    text={t.repair}
                  />
                  <NavbarLink
                    liSelector={"mb-7"}
                    selector={`text-2xl font-bold mb-[34px]`}
                    link="#"
                    text={t.news}
                  />
                  <NavbarLink
                    liSelector={"mb-7"}
                    selector={`text-2xl font-bold mb-[34px]`}
                    link="#"
                    text={t.contacts}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
