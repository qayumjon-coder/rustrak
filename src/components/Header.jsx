import { useEffect, useState, useRef } from "react";
import NavbarLink from "./NavbarLink.jsx";
import {
  links,
  links2,
  links3,
  recommended_trucks,
  swiperCardTrck,
} from "../object.js";
import { useTranslation } from "react-i18next";
import { languages } from "../i18n.js";
import { motion } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import {
  fadeUp,
  slideLeft,
  slideRight,
  slideTop,
  shortFadeUp,
} from "../utils/animation.js";
import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import { CartContext } from "./CartContext.jsx";
import { FavorContext } from "./FavorContext.jsx";
import ModalZvonok from "./ModalZvonok.jsx";
const Header = () => {
  const { cart } = useContext(CartContext);
  const { favor } = useContext(FavorContext);

  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [dropInput, setDropInput] = useState(false);

  const handleSearchChange = (e) => {
    const q = e.target.value;
    setSearchQuery(q);
    if (!q.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }
    const lower = q.toLowerCase();

    const productResults = recommended_trucks
      .filter((item) => {
        const title = item.title?.[language] || item.title?.ru || "";
        return title.toLowerCase().includes(lower);
      })
      .slice(0, 5)
      .map((item) => ({
        title: item.title?.[language] || item.title?.ru,
        img: item.img,
        price: item.price,
        link: "/catalog",
      }));

    const catResults = swiperCardTrck
      .filter((item) => {
        const title = item.title?.[language] || item.title?.ru || "";
        return title.toLowerCase().includes(lower);
      })
      .slice(0, 3)
      .map((item) => ({
        title: item.title?.[language] || item.title?.ru,
        img: item.img,
        price: null,
        link: "/catalog",
      }));

    const allLinks = [...links, ...links2, ...links3];
    const pageResults = allLinks
      .filter((item) => {
        const title = item.content?.[language] || item.content?.ru || "";
        return title.toLowerCase().includes(lower);
      })
      .slice(0, 3)
      .map((item) => ({
        title: item.content?.[language] || item.content?.ru,
        img: null,
        price: null,
        link: item.linkVal,
      }));
    const combined = [...productResults, ...catResults, ...pageResults].slice(
      0,
      8,
    );
    setSearchResults(combined);
    setShowResults(true);
  };

  const handleResultClick = (link) => {
    navigate(link);
    setSearchQuery("");
    setShowResults(false);
  };

  const toggleDropSearch = () => {
    setDropInput(!dropInput);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    setIsNavOpen(false);
    setIsOpen(false);
    setIsListOpen(false);
    setIsAboutOpen(false);
  }, [location.pathname]);
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
    if (isNavOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
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
  const handleCloseList = () => {
    setIsListOpen(!isListOpen);
  };
  const handleOpenAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  return (
    <>
      <ModalZvonok isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <header className="fixed w-full top-0 left-0 z-100 bg-white">
        <div
          className={
            isHidden
              ? "absolute -top-30 w-full justify-between flex flex-col border-b-2 border-yellow/30 transition-all ease duration-200"
              : "top-0 justify-between flex flex-col border-b-2 border-yellow/30"
          }
        >
          <div className="container">
            <div className="flex justify-between pt-3.5 pb-1">
              <div className="flex items-center leading-3.5 text-sm">
                <motion.a
                  href="/"
                  variants={slideLeft}
                  initial={slideLeft.hidden}
                  whileInView={slideLeft.visible}
                  transition={{
                    delay: 0.2,
                  }}
                >
                  <img src="/logo/logo.svg" alt="rustrack brand logo" />
                </motion.a>
                <motion.p
                  variants={slideRight}
                  initial={slideRight.hidden}
                  whileInView={slideRight.visible}
                  transition={{
                    delay: 0.2,
                  }}
                  className="border-l-2! pl-5! ml-5! border-yellow hidden lg:block"
                >
                  {t("company")}
                </motion.p>
              </div>

              <div className="flex text-[15px] items-center">
                <div className="relative">
                  <div className="text-left flex-col items-end mr-15! leading-[110%] justify-center hidden md:flex">
                    <motion.button
                      initial={shortFadeUp.hidden}
                      whileInView={shortFadeUp.visible}
                      onClick={toggleMenu}
                      className="flex flex-end text-[16px] items-center cursor-pointer"
                    >
                      {t("workingHours")}
                      <ChevronDown
                        className={
                          isOpen
                            ? "text-amber-400 h-5 rotate-180 transition-all duration-200 ease"
                            : "text-amber-400 h-5 transition-all duration-200 ease"
                        }
                      />
                    </motion.button>
                    <motion.p
                      initial={shortFadeUp.hidden}
                      whileInView={shortFadeUp.visible}
                      className="text-light-gray"
                      transition={{
                        ease: "easeIn",
                        duration: 0.3,
                        delay: 0.1,
                      }}
                    >
                      {t("address")}
                    </motion.p>
                  </div>

                  {isOpen && (
                    <div className="absolute top-5 right-10 bg-white p-3.5! shadow-lg rounded-md shadow-black/10 text-sm">
                      <p className="mb-3!">{t("pn_pt_s_8_00_do_18_00")}</p>
                      <p>{t("sb_vs_vyhodnoy")}</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center">
                  <div className="text-dark-200 hidden md:flex flex-col items-end text-light-gray mr-5! leading-[110%]">
                    <motion.p
                      initial={shortFadeUp.hidden}
                      whileInView={shortFadeUp.visible}
                    >
                      {t("forRegions")} <a href="#">8 (800)-511-05-25</a>
                    </motion.p>
                    <motion.p
                      initial={shortFadeUp.hidden}
                      whileInView={shortFadeUp.visible}
                      transition={{
                        ease: "easeIn",
                        duration: 0.3,
                        delay: 0.1,
                      }}
                    >
                      {t("city")} <a href="#">8 (831) 225-00-55</a>
                    </motion.p>
                  </div>
                  <motion.button
                    variants={slideTop}
                    initial={slideTop.hidden}
                    whileInView={slideTop.visible}
                    transition={{
                      delay: 0.2,
                    }}
                    onClick={() => setIsModalOpen(true)}
                    className="cursor-pointer"
                  >
                    <i className="fa-solid fa-phone w-12! h-12 flex! items-center text-2xl justify-center rounded-full bg-yellow"></i>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="container">
            <div className="flex py-3 items-center justify-between relative">
              <div className="flex items-center">
                <motion.button
                  initial={fadeUp.hidden}
                  whileInView={fadeUp.visible}
                  onClick={toggleNavList}
                  className="cursor-pointer flex items-center px-4 text-lg py-2 gap-5 bg-yellow rounded-sm"
                >
                  {isNavOpen ? <X /> : <Menu />}
                  <p
                    className={`hidden md:block${isHidden ? "hidden" : "block"}`}
                  >
                    {t("catalog")}
                  </p>
                </motion.button>

                <img
                  src="/logo/logo.svg"
                  alt="rustrack brand logo"
                  className={`hidden sm:flex
                  ${isHidden ? "flex w-40 ml-4 transition-all ease duration-300 opacity-100" : "flex w-0 ml-4 transition-all ease duration-300 opacity-0"}`}
                />

                <nav className="ml-5 hidden lg:block">
                  <div className="flex items-center ">
                    <div className="hidden xl:flex">
                      <ul className={isHidden ? "hidden" : "flex"}>
                        <motion.li
                          initial={shortFadeUp.hidden}
                          whileInView={shortFadeUp.visible}
                          transition={{
                            ease: "easeIn",
                            duration: 0.3,
                            delay: 0.1,
                          }}
                        >
                          <button
                            onClick={toggleNavList}
                            className="flex items-center cursor-pointer"
                          >
                            {t("about")}
                            <ChevronDown
                              className={
                                isNavOpen
                                  ? "rotate-180 text-yellow"
                                  : "text-yellow"
                              }
                            />
                          </button>
                        </motion.li>
                        <motion.li
                          initial={shortFadeUp.hidden}
                          whileInView={shortFadeUp.visible}
                          transition={{
                            ease: "easeIn",
                            duration: 0.3,
                            delay: 0.2,
                          }}
                          className="ml-8"
                        >
                          <button
                            onClick={toggleNavList}
                            className="flex items-center cursor-pointer"
                          >
                            {t("media")} <ChevronDown className="text-yellow" />
                          </button>
                        </motion.li>
                      </ul>
                    </div>
                    <ul className="flex">
                      <motion.li
                        initial={shortFadeUp.hidden}
                        whileInView={shortFadeUp.visible}
                        transition={{
                          ease: "easeIn",
                          duration: 0.3,
                          delay: 0.3,
                        }}
                        className="ml-8"
                      >
                        <a href="/service">{t("service")}</a>
                      </motion.li>
                      <motion.li
                        initial={shortFadeUp.hidden}
                        whileInView={shortFadeUp.visible}
                        transition={{
                          ease: "easeIn",
                          duration: 0.3,
                          delay: 0.4,
                        }}
                        className="ml-8"
                      >
                        <a href="/repair">{t("repair")}</a>
                      </motion.li>
                      <motion.li
                        initial={shortFadeUp.hidden}
                        whileInView={shortFadeUp.visible}
                        transition={{
                          ease: "easeIn",
                          duration: 0.3,
                          delay: 0.5,
                        }}
                        className="ml-8"
                      >
                        <a href="/news">{t("news")}</a>
                      </motion.li>
                      <motion.li
                        initial={shortFadeUp.hidden}
                        whileInView={shortFadeUp.visible}
                        transition={{
                          ease: "easeIn",
                          duration: 0.3,
                          delay: 0.6,
                        }}
                        className="ml-8"
                      >
                        <a href="/contacts">{t("contacts")}</a>
                      </motion.li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="items-center hidden lg:flex relative"
                  ref={searchRef}
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => searchQuery && setShowResults(true)}
                    placeholder={t("search")}
                    className="py-1.5 w-full pl-4 pr-10 border border-yellow rounded-full outline-0 focus:shadow-[0_0_10px_#fec80b66]"
                  />
                  <Search
                    size={20}
                    strokeWidth={1.5}
                    className="-ml-8 pointer-events-none"
                  />
                  {showResults && searchResults.length > 0 && (
                    <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-xl rounded-lg border border-gray-100 z-200 max-h-80 overflow-y-auto">
                      {searchResults.map((res, i) => (
                        <button
                          key={i}
                          onClick={() => handleResultClick(res.link)}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-yellow/10 text-left border-b border-gray-50 last:border-0 transition"
                        >
                          {res.img && (
                            <img
                              src={res.img}
                              alt={res.title}
                              className="w-12 h-10 object-cover rounded shrink-0"
                            />
                          )}
                          <div>
                            <p className="text-sm font-medium text-gray-800 line-clamp-2">
                              {res.title}
                            </p>
                            {res.price && (
                              <p className="text-xs text-gray-400 mt-0.5">
                                {res.price}
                              </p>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  {showResults && searchQuery && searchResults.length === 0 && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg border border-gray-100 z-200 px-4 py-3 text-sm text-gray-500">
                      {t("nichego_ne_nayti") || "Ничего не найдено"}
                    </div>
                  )}
                </div>

                <div className="flex items-center">
                  <div
                    className={`flex items-center absolute left-0 bg-white w-full rounded-full p-3 transition-all ease-in-out duration-300 shadow-md shadow-black/10 ${dropInput ? "top-25" : "-top-100"} `}
                    ref={searchRef}
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onFocus={() => searchQuery && setShowResults(true)}
                      placeholder={t("search")}
                      className="py-1.5 w-full pl-4 pr-10 border border-yellow rounded-full outline-0 focus:shadow-[0_0_10px_#fec80b66]"
                    />
                    <Search
                      size={20}
                      strokeWidth={1.5}
                      className="-ml-8 pointer-events-none"
                    />
                    {showResults && searchResults.length > 0 && (
                      <div className="absolute top-full w-full left-0 mt-2 bg-white shadow-xl rounded-lg border border-gray-100 z-200 max-h-110 overflow-y-auto">
                        {searchResults.map((res, i) => (
                          <button
                            key={i}
                            onClick={() => handleResultClick(res.link)}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-yellow/10 cursor-pointer text-left border-b border-gray-50 last:border-0 transition"
                          >
                            {res.img && (
                              <img
                                src={res.img}
                                alt={res.title}
                                className="w-12 h-10 object-cover rounded shrink-0"
                              />
                            )}
                            <div>
                              <p className="text-sm font-medium text-gray-800 line-clamp-2">
                                {res.title}
                              </p>
                              {res.price && (
                                <p className="text-xs text-gray-400 mt-0.5">
                                  {res.price}
                                </p>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                    {showResults &&
                      searchQuery &&
                      searchResults.length === 0 && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg border border-gray-100 z-200 px-4 py-3 text-sm text-gray-500">
                          {t("nichego_ne_nayti") || "Ничего не найдено"}
                        </div>
                      )}
                  </div>
                  <motion.button
                    variants={shortFadeUp}
                    initial={shortFadeUp.hidden}
                    whileInView={shortFadeUp.visible}
                    onClick={toggleDropSearch}
                    className={`lg:hidden cursor-pointer p-1 rounded-full ${dropInput ? "text-yellow" : "text-black"}`}
                  >
                    <Search size={dropInput ? 35 : 30} strokeWidth={dropInput ? 2.5 : 1.2} className=" w-full transition-all ease-out duration-200" />
                  </motion.button>

                  <motion.a
                    variants={shortFadeUp}
                    initial={shortFadeUp.hidden}
                    whileInView={shortFadeUp.visible}
                    href="/cart"
                    className="relative"
                  >
                    <ShoppingCart
                      size={30}
                      strokeWidth={1.2}
                      className="ml-5"
                    />
                    {cart.length > 0 && (
                      <div className="absolute bg-yellow bottom-0 right-0 w-5 h-3 text-[10px] font-bold text-center px-1 py-px rounded-sm">
                        {cart.length}
                      </div>
                    )}
                  </motion.a>
                  <motion.a
                    variants={shortFadeUp}
                    initial={shortFadeUp.hidden}
                    whileInView={shortFadeUp.visible}
                    href="/favorites"
                    className="relative"
                  >
                    <Heart size={30} strokeWidth={1.2} className="ml-5" />
                    {favor.length > 0 && (
                      <div className="absolute bg-yellow bottom-0 right-0 w-5 h-3 text-[10px] font-bold text-center px-1 py-px rounded-sm">
                        {favor.length}
                      </div>
                    )}
                  </motion.a>
                </div>

                <motion.label
                  variants={shortFadeUp}
                  initial={shortFadeUp.hidden}
                  whileInView={shortFadeUp.visible}
                  transition={{
                    delay: 0.2,
                  }}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  <select
                    value={language}
                    onChange={(event) =>
                      i18n.changeLanguage(event.target.value)
                    }
                    className="rounded-md border border-yellow cursor-pointer bg-white px-2 py-1 outline-none"
                  >
                    {languages.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </motion.label>

                <motion.button
                  variants={slideTop}
                  initial={slideTop.hidden}
                  whileInView={slideTop.visible}
                  onClick={() => setIsModalOpen(true)}
                  transition={{
                    delay: 0.2,
                  }}
                  className="hidden sm:flex cursor-pointer"
                >
                  <i
                    className={
                      isHidden
                        ? "fa-solid fa-phone flex! w-12! h-12 items-center ml-4 text-2xl justify-center rounded-full bg-yellow"
                        : "fa-solid fa-phone hidden! w-12! h-12 items-center ml-4 text-2xl justify-center rounded-full bg-yellow"
                    }
                  ></i>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            !isNavOpen
              ? "hidden bg-light-gray/10 absolute w-full"
              : "open-nav bg-gray-50 absolute w-full z-100 h-screen overflow-y-auto"
          }
        >
          <div className="container">
            <div className="grid auto-rows-auto grid-cols-1 md:grid-cols-3 py-4">
              <div>
                <h2 className="hidden md:block text-2xl font-bold mb-4">
                  {t("categories")}
                </h2>
                <button
                  onClick={handleCloseList}
                  className="flex items-center gap-2 md:hidden cursor-pointer text-2xl font-bold mb-4"
                >
                  {t("categories")} <ChevronDown className="text-yellow" />
                </button>

                <ul
                  className={`overflow-hidden transition-all ease-in duration-300 md:h-auto ${isListOpen ? "h-130" : "h-0"}`}
                >
                  {links.map((link) => (
                    <NavbarLink
                      liSelector={
                        "mb-4 hover:text-yellow transition ease duration-200"
                      }
                      key={link.id}
                      link={link.linkVal}
                      text={
                        link.content?.[language] ||
                        link.content?.ru ||
                        link.content
                      }
                    />
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="hidden md:block text-2xl font-bold mb-4">
                  {t("about")}
                </h2>
                <button
                  onClick={handleOpenAbout}
                  className="flex items-center gap-2 cursor-pointer text-2xl md:hidden font-bold mb-4"
                >
                  {t("about")} <ChevronDown className="text-yellow" />
                </button>

                <ul
                  className={`overflow-hidden transition-all ease-in duration-300 md:h-auto ${isAboutOpen ? "h-95" : "h-0"}`}
                >
                  {links2.map((link) => (
                    <NavbarLink
                      liSelector={
                        "mb-4 hover:text-yellow transition ease duration-200"
                      }
                      key={link.id}
                      link={link.linkVal}
                      text={
                        link.content?.[language] ||
                        link.content?.ru ||
                        link.content
                      }
                    />
                  ))}
                </ul>
              </div>

              <div className="flex justify-between flex-wrap">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold mb-4">{t("media")}</h2>

                  <ul>
                    {links3.map((link) => (
                      <NavbarLink
                        liSelector={
                          "mb-4 hover:text-yellow transition ease duration-200"
                        }
                        key={link.id}
                        link={link.linkVal}
                        text={
                          link.content?.[language] ||
                          link.content?.ru ||
                          link.content
                        }
                      />
                    ))}
                  </ul>
                </div>
                <div className="pb-30">
                  <div className="flex gap-5 sm:block">
                    <ul>
                      <NavbarLink
                        liSelector={"mb-7"}
                        selector={`text-2xl font-bold mb-[34px]`}
                        link="/service"
                        text={t("service")}
                      />
                      <NavbarLink
                        liSelector={"mb-7"}
                        selector={`text-2xl font-bold mb-[34px]`}
                        link="/repair"
                        text={t("repair")}
                      />
                    </ul>

                    <ul>
                      <NavbarLink
                        liSelector={"mb-7"}
                        selector={`text-2xl font-bold mb-[34px]`}
                        link="/news"
                        text={t("news")}
                      />
                      <NavbarLink
                        liSelector={"mb-7"}
                        selector={`text-2xl font-bold mb-[34px]`}
                        link="/contacts"
                        text={t("contacts")}
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
