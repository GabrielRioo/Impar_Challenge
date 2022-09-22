import './LandingPage.css'
import CardComponent from '../../components/Card/CardComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';

function LandingPage() {
    return(
        <main id="main_content">
            <div id='new_card_content'>
                <h1>Resultado de busca</h1>
                <ButtonComponent text="Novo Card" size="medium"/>
            </div>

            <CardComponent />

            {/* se clicar no botao novo card... */}

        </main>
    )
}

export default LandingPage;