import styled from "styled-components";

export const ContactTabStyled = styled.div<{ $isActive? : boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    border: 2px solid transparent;
    border-radius: ${props => props.$isActive ? "20px 20px 0 0" : "20px"};
    transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
    cursor: pointer;
    background-color: var(--color-white);
    margin-top: 60px;

    &:hover {
        border: ${props => props.$isActive ? "2px solid transparent" : "2px solid var(--color-black)"};
    }

    .contactName {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        margin: 0 auto;
        width: 250px;
        max-width: 500px;
        
        .icon {
            max-width: 45px;
        }

    }

    a {
        text-decoration: none;
        color: inherit;
    }

`