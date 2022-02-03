import { useAppSelector } from "../../store/hooks/hooks";
import "./header.css";
import Logo from "./Logo/Logo";

const Header = () => {
  const { headerColor } = useAppSelector((store) => store);

  return (
    <header className={`header-${headerColor}`}>
      <Logo />
    </header>
  );
};

export default Header;
