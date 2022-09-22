import './ButtonComponent.css';

interface ButtonProps {
    text: string,
    size: string
}

function ButtonComponent(props: ButtonProps) {
    return (
        <button className={"btn_"+props.size}>{props.text}</button>
    )
}

export default ButtonComponent;