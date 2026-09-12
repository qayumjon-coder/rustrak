import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header";
import { languages, translations } from "./i18n";
import ServicePage from "./pages/Service/ServicePage";
import ContactSec from "./components/ContactSec";
import Footer from "./components/Footer";
import Cart from "./pages/MiniPages/Cart";
import Favorites from "./pages/MiniPages/Favorites";

function App() {
  const [language, setLanguage] = useState("ru");
  const t = translations[language];

  return (
    <>
      <Header
        t={t}
        language={language}
        setLanguage={setLanguage}
        languages={languages}
      />
      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/about" element={<About t={t} />} />
        <Route path="/service" element={<ServicePage t={t} />} />
        <Route path="/cart" element={<Cart t={t} />} />
        <Route path="/favorites" element={<Favorites t={t} />} />
        
      </Routes>

      <ContactSec/>
      <Footer/>
    </>
  );
}

export default App;
