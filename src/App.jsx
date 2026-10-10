import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const PageTitle = lazy(() => import("./components/PageTitle"));
const CartProvider = lazy(() => import("./components/CartContext"));
const FavorProvider = lazy(() => import("./components/FavorContext"));
import Header from "./components/Header";
import ContactSec from "./components/ContactSec";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import BackToTop from "./components/BackToTop";
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const ServicePage = lazy(() => import("./pages/Service/ServicePage"));
const Cart = lazy(() => import("./pages/MiniPages/Cart"));
const Favorites = lazy(() => import("./pages/MiniPages/Favorites"));
const Contact = lazy(() => import("./pages/Contact"));
const Repair = lazy(() => import("./pages/Repair"));
const News = lazy(() => import("./pages/News"));
const NewsDetailPage = lazy(() => import("./pages/NewsDetailPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Catalog pages
const CatalogPage = lazy(() => import("./pages/Catalog/CatalogPage"));
const CategoryPage = lazy(() => import("./pages/Catalog/CategoryPage"));
const ProductPage = lazy(() => import("./pages/Catalog/ProductPage"));

// About sub-pages
const Partners = lazy(() => import("./pages/AboutPages/Partners"));
const Production = lazy(() => import("./pages/AboutPages/Production"));
const Suppliers = lazy(() => import("./pages/AboutPages/Suppliers"));
const Reviews = lazy(() => import("./pages/AboutPages/Reviews"));
const Certificates = lazy(() => import("./pages/AboutPages/Certificates"));
const Vacancies = lazy(() => import("./pages/AboutPages/Vacancies"));
const Leasing = lazy(() => import("./pages/AboutPages/Leasing"));

// Media pages
const PhotoGallery = lazy(() => import("./pages/MediaPages/PhotoGallery"));
const VideoPage = lazy(() => import("./pages/MediaPages/VideoPage"));
const PromoPage = lazy(() => import("./pages/MediaPages/PromoPage"));
const InfoPage = lazy(() => import("./pages/MediaPages/InfoPage"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <CartProvider>
        <FavorProvider>
          <Header />
          <PageTitle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/repair" element={<Repair />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />

            {/* Catalog */}
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:category" element={<CategoryPage />} />
            <Route
              path="/catalog/:category/:productId"
              element={<ProductPage />}
            />

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

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BackToTop />
          <ContactSec />
          <Footer />
        </FavorProvider>
      </CartProvider>
    </Suspense>
  );
}

export default App;
