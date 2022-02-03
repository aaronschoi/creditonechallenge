import { useAppSelector } from "../../../../store/hooks/hooks";
import logoBlue from "../../../images/logo.svg";
import logoWhite from "../../../images/logo_white.svg";

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
