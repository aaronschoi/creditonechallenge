const Button = ({ text, color, callBack }) => {
    return (
        <button className={`button color-${color}`} onClick={callBack}>{text}</button>
    )
}

export default Button;