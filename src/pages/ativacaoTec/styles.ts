import styled from "styled-components";

export const TxtDiv = styled.div`
    max-width: 1180px;
    width: 100%;
    overflow-x: hidden;

    display: flex;
    gap: 20px;
    margin-top: 50px;
    margin-bottom: 25px;
    text-align: justify;
.
    p {
        font-size: 2rem;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        margin-left: 20px;
        margin-right: 20px;
    }
`

export const VideoDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;

    button {
        background-color: transparent;
        border: 3px solid var(--color-detail);
        padding: 15px 30px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 2.4rem;

        a {
            text-decoration: none;
            color: inherit;
        }
    }

    video {
        background-color: black;
        color: white;
        max-width: 900px;
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`