import '../../assets/styles/MenuTopBar.css'
import LogoImage from '../../assets/images/logo-teste.svg';
import FundoBuscaImage from '../../assets/images/fundo-busca@2x.png';
import LupaImage from '../../assets/images/lupa.svg';

function MenuTopBar() {
    return(
        <header>
            <nav id="menu_top_bar">
                <img id="logo" src={LogoImage} alt="Logo da Empresa Impar" />
            </nav>

            <div id="header_busca">
                <img id="fundo_busca" src={FundoBuscaImage} alt="Pessoas sentadas a uma mesa conversando" />
                
                <div id="busca_content">
                    <input id="busca" type="text" placeholder='Digite aqui sua busca...'/>
                    <img id="lupa_busca" src={LupaImage} alt="Lupa para a barra de pesquisa" />
                </div>
            </div>
        </header>
    )
}

export default MenuTopBar;