import "./logo.css";
import logoBlue from "./logo.svg";
import logoWhite from "./logo_white.svg";

const Logo = ({ blue = true }) => (
  <img className="logo" src={blue ? logoWhite : logoBlue} alt="Credit One" />
);

export default Logo;
