import whatsIcon from "../../assets/Icons/whatsapp.png"
import emailIcon from "../../assets/Icons/email.png"
import { InfoStyled } from "./styles"

interface Contact {
    name: string
    telephone: string
    email: string
}

interface ComponentProps {
    contact: Contact
}

export const AreaContact = ({ contact }: ComponentProps) => {
    return(
        <InfoStyled>
            <h4>{contact.name}</h4>
            <div>
                <div>
                    <img src={whatsIcon} alt="Icone telefone" />
                    <p className="number">{contact.telephone}</p>
                </div>
                <div>
                    <img src={emailIcon} alt="Icone telefone" />
                    <p className="number">{contact.email}</p>
                </div>
            </div>
        </InfoStyled>
    )
}