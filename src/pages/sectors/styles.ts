import { styled } from "styled-components";

export const SectorsDiv = styled.div`
    width: 100%;
    max-width: 1180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1280px) {
        max-width: 900px;
    }

    @media (max-width: 1023px) {
        max-width: 800px;
    }

    @media (max-width: 880px) {
        max-width: 400px;
    }

    @media (max-width: 500px) {
        max-width: 330px;
    }
`