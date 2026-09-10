// components/Breadcrumb.jsx
import { Link, useLocation } from "react-router-dom";

const routeNames = {
  "": "Главная",
  "about": "О нас",
  "catalog": "Каталог",
  "media": "Медиа",
  "service": "Сервис",
  "repair": "Ремонт",
  "news": "Новости",
  "contacts": "Контакты",
  "cart": "Корзина"
};

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-light-gray py-3 pb-2.5 mb-6">
      <Link to="/" className="hover:text-yellow-500">Главная</Link>
      {pathnames.map((segment, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;
        const label = routeNames[segment] || segment;

        return (
          <span key={to}>
            {" "}/{" "}
            {isLast ? (
              <span className="text-gray-700">{label}</span>
            ) : (
              <Link to={to} className="hover:text-yellow-500">{label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}