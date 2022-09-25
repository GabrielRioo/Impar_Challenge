import './ButtonComponent.css';

interface ButtonProps {
    text: string,
    size: string,
    color?: string,
    'background-color'?: string,
    'border-color'?: string,
    onClick?(): any,
}

function ButtonComponent(props: ButtonProps) {
    return (
        <button 
            className={"btn_"+props.size} 
            style={{
                color: props.color, 
                background: props['background-color'], 
                borderColor: props['border-color']
            }}
            {...props}
        >
            {props.text}
        </button>
    )
}

export default ButtonComponent;