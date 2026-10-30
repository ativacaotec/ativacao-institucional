import { ReactNode } from "react"
import { ContainerStyled, ContainerStyledWithSubtitle } from "./styles"

interface ContainerProps {
    children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}

export const ContainerWithSubtitle = ({ children }: ContainerProps) => {
    return (
        <ContainerStyledWithSubtitle>
            {children}
        </ContainerStyledWithSubtitle>
    )
}