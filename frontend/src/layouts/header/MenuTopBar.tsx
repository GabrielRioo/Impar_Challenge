import '../../assets/styles/MenuTopBar.css'
import LogoImage from '../../assets/images/logo-teste.svg';

function MenuTopBar() {
    return(
        <header>
            <nav id="menu_top_bar">
                <img src={LogoImage} alt="Logo da Empresa Impar" id="logo"/>
            </nav>
        </header>
    )
}

export default MenuTopBar;