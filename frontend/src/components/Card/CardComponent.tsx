import { useEffect, useState } from 'react';
import ModalComponent from '../Modal/ModalComponent';
import './CardComponent.css'
import IconeDeletar from '../../assets/images/Icon-trash.svg'

interface CardProps {
    Text: string,

}

function CardComponent(props: CardProps) {
    const [deletar, setDeletar] = useState(false);

    const handleDeletar = () => {
        setDeletar(!deletar)
    }

    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            if(event.keyCode === 27) {
                setDeletar(false) 
            } 
        })
      }, []); 

    return(
        <div className="card_content">

            <hr className='card_linha'/>
            <p className='card_text'>{props.Text}</p>
            <div className='card_buttons'>
                <button onClick={handleDeletar}>Excluir</button>
                <button>Editar</button>
            </div>

            {deletar && 
            <ModalComponent 
                title='Excluir' 
                text='Tem certeza que deseja deletar?'
                image={IconeDeletar}
            />}
        </div>
    )
}

export default CardComponent;