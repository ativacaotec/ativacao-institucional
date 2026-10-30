import { styled } from "styled-components";

export const InfoStyled = styled.div`
    max-width: 523px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    img {
        max-width: 20px;
        width: 100%;
    }

    > div{
        display: flex;
        gap:30px;
        
        @media (max-width: 1111px) {
            flex-direction: column;
        }

        div {
            display: flex;
            align-items: center;
            gap: 9px;
        }
    }
`