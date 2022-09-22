import './CreateCard.css'
import IconeCriar from '../../assets/images/icone_criar.svg';
import ButtonComponent from '../../components/Button/ButtonComponent';



function CreateCard() {
    const handleSubmit = (event: any) => {
        event.preventDefault();
    }
    
    const handleUploadFile = () => {
        document.getElementById('file_input')?.click();
    }
    
    window.addEventListener('load', handleUploadFile)

    return (
        <section id="create_card">
            <div id="create_card_content">
                <div id="create_card_header">
                    <img src={IconeCriar} alt="icone de perfil" />
                    <h1>Criar card</h1>
                </div>


                <form id="create_card_form" onSubmit={handleSubmit}>
                    <hr />

                    <label htmlFor="titulo">Digite um nome para o card</label>
                    <input type="text" placeholder='Digite o título' name='titulo' id='titulo' />

                    <label>Inclua uma imagem para aparecer no card</label>
                    <input id="file_input" type="file" style={{ display: 'none' }} />
                    <div>
                        {/* <ButtonComponent id=""size="medium" text="Criar card" /> */}
                        <button id="upload_file" className='btn_medium' onClick={handleUploadFile}></button>
                    </div>

                    <hr />
                    <ButtonComponent size="medium" text="Criar card" />
                </form>
            </div>
        </section>
    )
}

export default CreateCard;