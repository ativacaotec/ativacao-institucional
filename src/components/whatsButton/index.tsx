import { WhatsButtonStyled } from "./styles"
import whats from "../../assets/Icons/whatsapp.png"

export const WhatsButton = () => {
    return (
        <WhatsButtonStyled>
            <a href="https://api.whatsapp.com/send?phone=5531993390213&text=Ol%C3%A1,%20vim%20pelo%20site%20da%20Ativa%C3%A7%C3%A3o%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas.%20" target="_blank">
                <img src={whats} alt="Link para o contato via WhatsApp" />
            </a>
        </WhatsButtonStyled>
    )
}