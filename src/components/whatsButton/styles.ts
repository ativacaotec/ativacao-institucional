import { styled } from "styled-components";

export const WhatsButtonStyled = styled.div`
    position: fixed;
    bottom: 30px;
    right: 20px;
    background-color: #25d366;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    a {
        display: block;
        width: 40px;
        height: 40px;
    }

    img {
        width: 100%;
        height: auto;
    }
`