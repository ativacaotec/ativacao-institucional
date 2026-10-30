import { HeaderStyled } from "./styles"
import logoWhite from "../../assets/Logo/logo-white.png"
import { Link } from "react-scroll"
import menu from "../../assets/Icons/menu.png"
import { useState } from "react"


export const Header = () => {

    const [openMenu, setIsOpenMenu] = useState(false)

    const handleClick = () => {
        setIsOpenMenu(!openMenu)
    }

    return (
        <HeaderStyled $openMenu={openMenu}>
            <div>
                <img src={logoWhite} alt="Ativação logo" />
            </div>
            <img src={menu} alt="Icone do menu" className="burguer" onClick={handleClick}/>
            <ul>
                <li>Início</li>
                <li>
                    <Link
                    to="area" spy={true} smooth={true} offset={-60} duration={600}
                    >Área de atuação</Link>
                </li>
                <li>
                    <Link
                    to="sectors" spy={true} smooth={true} offset={-60} duration={700}
                    >Setores</Link>
                </li>
                <li>
                    <Link
                    to="tec" spy={true} smooth={true} offset={-60} duration={800}
                    >Ativação TEC</Link>
                </li>
                <li>
                    <Link
                    to="history" spy={true} smooth={true} offset={-60} duration={900}
                    >História</Link>
                </li>
                <li>
                    <Link
                    to="brands" spy={true} smooth={true} offset={-60} duration={1000}
                    >Marcas</Link>
                </li>
                <li>
                    <Link
                    to="contact" spy={true} smooth={true} offset={-60} duration={1100}
                    >Contato</Link>
                </li>
            </ul>
        </HeaderStyled>
    )
}
