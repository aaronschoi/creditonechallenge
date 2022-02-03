import { useAppSelector } from "../../../store/hooks/hooks";
import "./logo.css";
import logoBlue from "./logo.svg";
import logoWhite from "./logo_white.svg";

const Logo = () => {
  const { headerColor } = useAppSelector((store) => store);

  return (
    <img
      className="logo"
      src={headerColor === "blue" ? logoWhite : logoBlue}
      alt="Credit One"
    />
  );
};

export default Logo;
