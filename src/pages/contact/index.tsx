import { ContactTab } from "../../components/contactTab"
import { Container } from "../../components/container"
import instagramIcon from "../../assets/Icons/instagram.png"
import facebookIcon from "../../assets/Icons/facebook.png"
import tecIcon from "../../assets/Icons/Ativo 2.png"
import { SectorsDiv } from "../sectors/styles"
import { BottomBarStyled } from "./styles"

export const Contact = () => {
    return (
        <>
            <Container>
                <h2 id="contact">Contato</h2>
                <SectorsDiv>
                    <ContactTab name="Facebook" img={facebookIcon} link="https://www.facebook.com/profile.php?id=61550712443655&locale=pt_BR" />
                    <ContactTab name="Instagram" img={instagramIcon} link="https://www.instagram.com/ativacaogroup/"/>
                    <ContactTab name="Ativação TEC" img={tecIcon} link="https://ativacaotec.com"/>
                </SectorsDiv>
            </Container>
            <BottomBarStyled>
                <p>R. Icaraí, <span className="number">538</span> - Caiçaras - Belo Horizonte - MG, <span className="number">30770-584</span> - Showroom</p>
            </BottomBarStyled>
        </>
    )
}

