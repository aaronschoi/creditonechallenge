import "./header.css";
import Logo from "./Logo/Logo";

const Header = ({ blue = true }) => {
  return (
    <header className={blue ? "header-blue" : "header-white"}>
      <Logo blue={blue} />
    </header>
  );
};

export default Header;
