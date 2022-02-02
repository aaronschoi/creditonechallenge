import "./button.css";

const Button = ({ text, color }) => {
    return (
        <button className={`button color-${color}`}>{text}</button>
    )
}

export default Button;