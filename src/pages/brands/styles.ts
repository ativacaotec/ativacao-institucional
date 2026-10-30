import { styled } from "styled-components";

export const DivBrandCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    max-width: 1180px;
    gap: 20px;
    margin-top: 50px;

    @media (max-width: 880px) {
        flex-direction: column;
    }
`