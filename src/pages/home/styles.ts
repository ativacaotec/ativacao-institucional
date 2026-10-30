import { styled } from "styled-components"
import bg from "../../assets/Images/inicio-bg.png"

export const DivBg = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    background: url(${bg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;

    > div {
    
    margin-top: 242px;
    width: 90%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 90px;

    figure {
        max-width: 585px;
        width: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;

        }

        @media (max-width: 1023px) {
            max-width: 400px;
        }

        @media (max-width: 616px) {
            margin-top: 100px;
            max-width: 300px;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 250px;
        margin-bottom: 100px;

        h3 {
            font-size: 2.8rem;
            font-weight: 600;
            text-align: center;

            @media (max-width: 616px) {
            font-size: 2.2rem;
        }
        }

        a {
            text-decoration: none;
            color: var(--color-black);
            background-color: var(--color-detail);
            padding: 25px 100px;
            border-radius: 50px;
            font-size: 2.2rem;
            font-weight: 700;
            cursor: pointer;
            margin-bottom: 10px;

            @media (max-width: 616px) {
            font-size: 1.8rem;
            padding: 15px 80px;
        }
        }

    }
    }

    
`