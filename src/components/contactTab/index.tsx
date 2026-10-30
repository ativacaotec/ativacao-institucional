import { ContactTabStyled } from "./styles"

interface ComponentProps {
    img: string
    name: string
    link: string
}

export const ContactTab = ({ img, name, link }: ComponentProps) => {

    const handleClick = () => {
        window.open(link, "_blank")
    }

    return (
        <ContactTabStyled onClick={handleClick}>
            <div className="contactName">
                <img className="icon" src={img} alt={name} />
                <h3>{name}</h3>
            </div>
        </ContactTabStyled>
    )
}