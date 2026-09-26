import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CartProvider from "./components/CartContext"
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header";

import ServicePage from "./pages/Service/ServicePage";
import ContactSec from "./components/ContactSec";
import Footer from "./components/Footer";
import Cart from "./pages/MiniPages/Cart";
import Favorites from "./pages/MiniPages/Favorites";
import Contact from "./pages/Contact";
import Repair from "./pages/Repair";
import News from "./pages/News";

// Catalog pages
import CatalogPage from "./pages/Catalog/CatalogPage";
import CategoryPage from "./pages/Catalog/CategoryPage";
import ProductPage from "./pages/Catalog/ProductPage";

// About sub-pages
import Partners from "./pages/AboutPages/Partners";
import Production from "./pages/AboutPages/Production";
import Suppliers from "./pages/AboutPages/Suppliers";
import Reviews from "./pages/AboutPages/Reviews";
import Certificates from "./pages/AboutPages/Certificates";
import Vacancies from "./pages/AboutPages/Vacancies";
import Leasing from "./pages/AboutPages/Leasing";

// Media pages
import PhotoGallery from "./pages/MediaPages/PhotoGallery";
import VideoPage from "./pages/MediaPages/VideoPage";
import PromoPage from "./pages/MediaPages/PromoPage";
import InfoPage from "./pages/MediaPages/InfoPage";

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/news" element={<News />} />

        {/* Catalog */}
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:category" element={<CategoryPage />} />
        <Route path="/catalog/:category/:productId" element={<ProductPage />} />

        {/* About sub-pages */}
        <Route path="/partners" element={<Partners />} />
        <Route path="/production" element={<Production />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/cert" element={<Certificates />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/leasing" element={<Leasing />} />

        {/* Media */}
        <Route path="/photogallery" element={<PhotoGallery />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/promo" element={<PromoPage />} />
        <Route path="/info" element={<InfoPage />} />

      </Routes>

      <ContactSec />
      <Footer />
    </CartProvider>
  );
}

export default App;
