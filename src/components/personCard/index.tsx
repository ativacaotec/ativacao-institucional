import { CardStyled } from "./styles"
import whatsappIcon from "../../assets/Icons/whatsapp.png"
import emailIcon from "../../assets/Icons/email.png"

export interface Person {
    id: string
    name: string,
    role: string,
    functions: string[],
    telephone: string,
    email: string,
    img: {
        url: string
    },
    sector: string
}

interface CardProps {
    person: Person
}

export const Card = ({ person }: CardProps) => {
    return(
        <CardStyled>
            <div className="cardHeader">
                <img src={person.img.url} alt={person.name} />
            </div>
            <div className="cardInfo">
                <div className="nameInfo">
                    <h4>{person.name}</h4>
                    <p>{person.role}</p>
                </div>
                <div className="cardFunctions">
                    {
                        person.functions.map((functions, i) => {
                            return <p key={i}>{functions}</p>
                        })
                    }
                </div>
                <div className="cardFooter">
                    <div className="whatsAppInfo">
                        <img src={whatsappIcon} alt="Icone do WhatsApp" />
                        <p className="number">{person.telephone}</p>
                    </div>
                    <div className="emailInfo">
                        <img src={emailIcon} alt="Icone do Email" />
                        <p>{person.email}</p>
                    </div>
                </div>
            </div>
        </CardStyled>
    )
}