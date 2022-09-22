import './CardComponent.css'

function CardComponent() {
    return(
        <div className="card_content">

            <hr className='card_linha'/>
            <p className='card_text'>Lorem ipsum dolor sit amet consectetur</p>
            <div className='card_buttons'>
                <button>Excluir</button>
                <button>Editar</button>
            </div>
        </div>
    )
}

export default CardComponent;