import { Link } from "react-router-dom";

const NavbarLink = ({ link, text, selector, liSelector }) => {
  return (
    <li className={liSelector}>
      <Link className={selector} to={link}>
        {text}
      </Link>
    </li>
  );
};

export default NavbarLink;
