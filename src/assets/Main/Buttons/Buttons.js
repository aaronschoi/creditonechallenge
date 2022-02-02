import "./buttons.css";
import Button from "./Button/Button"

const Buttons = () => {
    return (
        <div className="buttons-container">
            <Button text="Accept Now" color="orange" />
            <Button text="No Thanks" color="gray" />
            <p className="buttons-fineprint">A fee may apply.</p>
        </div>
    )
}

export default Buttons;