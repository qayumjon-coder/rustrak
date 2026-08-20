import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header";
import { languages, translations } from "./i18n";

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
      </Routes>
    </>
  );
}

export default App;
