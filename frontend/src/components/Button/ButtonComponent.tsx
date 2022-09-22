import './ButtonComponent.css';

interface ButtonProps {
    text: string,
    size: string,
    onClick?(): any
}

function ButtonComponent(props: ButtonProps) {
    return (
        <button className={"btn_"+props.size} {...props}>{props.text}</button>
    )
}

export default ButtonComponent;