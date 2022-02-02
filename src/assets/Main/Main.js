import "./main.css";
import Caller from "./Caller/Caller";
import Content from "./Content/Content";
import Buttons from "./Buttons/Buttons";

const Main = () => {
  return (
    <div className="main">
      <Caller />
      <Content />
      <Buttons />
      <p>
        *See the Disclosures and Terms & Conditions' on the application page by
        selecting the 'Accept Now' button.
      </p>
    </div>
  );
};

export default Main;
