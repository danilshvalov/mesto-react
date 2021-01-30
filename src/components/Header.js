import logo from "../images/header-logo.svg";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Места России"
      />
    </header>
  );
}

export default Header;
