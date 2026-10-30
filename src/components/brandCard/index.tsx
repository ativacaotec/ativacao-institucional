import { BrandCardStyled } from "./styles"

interface BrandCardProps {
    name: string
    img: string
}

export const BrandCard = ({ name, img }: BrandCardProps) => {
    return(
        <BrandCardStyled>
            <figure>
                <img src={img} alt={`${name} logo`} />
            </figure>
            <h3>{name}</h3>
        </BrandCardStyled>
    )
}