import ButtonComponent from '../Button/ButtonComponent';
import './ModalComponent.css';


interface ModalProps {
    title: string,
    text: string,
    image?: string,

}

function ModalComponent(props: ModalProps) {
    return(
        <div id="modal_content">
            <div className='modal'>
                <div className='background_image'>
                    <img src={props.image} alt={props.title} />
                </div>
                <h1 className='title_exluir'>{props.title}</h1>
                <p>{props.text}</p>

                <hr />

                <div id="modal_button">
                    <ButtonComponent 
                        text="Excluir" 
                        size='medium' 
                        color='#FFFFFF'
                        background-color='#DB2525'/>
                    <ButtonComponent 
                        text="Cancelar" 
                        size='medium_outset' 
                        color="#DB2525"
                        border-color='#DB2525'
                        />
                </div>
            </div>
        </div>
    )
}

export default ModalComponent;