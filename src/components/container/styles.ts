import { styled } from "styled-components";

export const ContainerStyled = styled.section`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

`

export const ContainerStyledWithSubtitle = styled.section`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    justify-content: space-between;

    .withSubtitle {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`

export const ExpandableContainerStyled = styled.section`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .brands {
        text-align: center;
    }
`