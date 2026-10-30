import styled from "styled-components";

export const CardStyled = styled.div`
    width: 480px;
    max-height: 518px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    .cardHeader {
        background-color: var(--color-black);
        position: relative;
        width: 100%;
        height: 111px;

        img {
            width: 141px;
            max-width: 121px;
            border-radius: 100px;
            border: 3px solid var(--color-detail);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -20%);
        }

    }

    .cardInfo {
        background-color: var(--color-bg);
        height: 416px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 37px;
    }

    .nameInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;

        p {
            font-size: 2rem;
        }
    }

    .cardFunctions {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        p {
            font-size: 1.5rem;
            text-align: center;
        }
    }

    .cardFooter {
        display: flex;
        flex-direction: column;
        gap: 11px;
        align-items: center;

        img {
            max-width: 30px;
        }
    }

    .whatsAppInfo {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .emailInfo {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    @media (max-width: 1280px) {
        width: 100%;
        max-width: 400px;
    }

    @media (max-width: 1023px) {
        width: 100%;
        max-width: 300px;
    }

    @media (max-width: 880px) {
        width: 100%;
        max-width: 250px;
    }
`