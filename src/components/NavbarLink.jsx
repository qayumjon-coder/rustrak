const NavbarLink = ({link, text, selector, liSelector}) => {
  return (
    <li className={liSelector}>
      <a className={selector} href={link}>{text}</a>
    </li>
  );
};

export default NavbarLink;
