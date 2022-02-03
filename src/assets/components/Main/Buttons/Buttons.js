import Button from "./Button/Button";
import { useAppSelector } from "../../../../store/hooks/hooks";
import useChangeColor from "./useChangeColor";

const Buttons = () => {
  const { headerColor } = useAppSelector((store) => store);
  const { changeToWhite, changeToBlue } = useChangeColor();

  const onClickBannerColorHandler = () => {
    if (headerColor === "blue") {
      changeToWhite();
    }
    if (headerColor === "white") {
      changeToBlue();
    }
  };

  const onCLickLinkToCreditOneHandler = () => {
    window.open("https://www.creditonebank.com/");
  };

  return (
    <div className="buttons-container">
      <Button
        text="Accept Now"
        color="orange"
        callBack={onClickBannerColorHandler}
      />
      <Button
        text="No Thanks"
        color="gray"
        callBack={onCLickLinkToCreditOneHandler}
      />
      <p className="buttons-fineprint">A fee may apply.</p>
    </div>
  );
};

export default Buttons;
