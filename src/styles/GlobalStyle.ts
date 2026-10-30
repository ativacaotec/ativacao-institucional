import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{

        --color-bg: #E4E4E4;
        --color-white: #FFFFFF;
        --color-black: #000000;
        --color-detail: #2CF769;

        font-size: 60%;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }
    
    body,html{
        margin: 0;
        padding: 0;
        height: 100%;
    }

    body {
        background: var(--color-bg);
        color: var(--color-black);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    body, input, button, textarea {
        font-family: 'Raleway', sans-serif;
        font-size: 1.6rem;
    }

    .number {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    h1 {
        font-weight: 600;
        font-size: 4rem;
    }

    h2 {
        font-weight: 700;
        font-size: 6.3rem;
        letter-spacing: 0.1rem;
        border-bottom: 3px solid var(--color-detail);
        border-radius: 5px;
        padding-bottom: 5px;
        margin-top: 60px;

        @media (max-width: 1023px) {
        font-size: 5rem;
        }

        @media (max-width: 500px) {
        font-size: 3rem;
        }
    }

    h3 {
        font-weight: 500;
        font-size: 2.4rem;
    }

    h4 {
        font-weight: 500;
        font-size: 2.2rem;
    }

    p {
        font-weight: 400;
        font-size: 1.2rem;
    }

    small {
        font-weight: 500;
        font-size: 1.7rem;
    }

    button {
        cursor: pointer;
    }

`