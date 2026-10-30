import styled from "styled-components";
import bg from "../../assets/Images/history-bg.png"

export const DivBgHistory = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    background: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        margin-top: 30px;
        max-width: 1180px;
        max-height: 35%;
        overflow: auto;

        text-align: justify;

        &::-webkit-scrollbar {
        width: 7px;
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: var(--color-detail);
            border-radius: 0 8px 8px 0;;
        }

        &::-webkit-scrollbar-track {
            background-color: grey;
            border-radius: 0 8px 8px 0;; 
        }

        p {
            font-size: 1.7rem;
            font-weight: 500;
            color: var(--color-black);

            @media (max-width: 1280px) {
                font-size: 1.5rem;
                margin-right: 30px;
                margin-left: 30px;
            }
            
            @media (max-width: 814px) {
                font-size: 1.4rem;
            }

            @media (max-width: 700px) {
                font-size: 1.3rem;
            }

            @media (max-width: 600px) {
                font-size: 11px;
            }

            @media (max-width: 489px) {
                font-size: 10px;
            }

            @media (max-width: 400px) {
                font-size: 9px;
            }
        }
    }
`