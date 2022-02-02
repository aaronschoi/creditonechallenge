const Button = ({ text, color }) => {
    return (
        <button className={`color-${color}`}>{text}</button>
    )
}

export default Button;