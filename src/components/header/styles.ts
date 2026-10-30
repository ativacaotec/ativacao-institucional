import styled from "styled-components";

export const HeaderStyled = styled.header<{ $openMenu? : boolean}>`
    width: 100vw;
    height: 100px;
    background-color: rgba(0,0,0, 0.7);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0 40px 0;
    position: absolute;
    top: 0;

    @media (max-width: 800px) {
        gap: 20px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 188px;
        margin-left: 50px;

        img {
            width: 100%;
            max-width: 200px;
            z-index: 1;

            @media (max-width: 360px) {
                max-width: 150px;
            }
        }
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        color: var(--color-white);
        list-style: none;
        margin-right: 50px;

        @media (max-width: 1023px) {
            position: absolute;
            flex-direction: column;
            right: -50px;
            top: 100px;
            background-color: rgba(0,0,0, 0.9);
            padding: 20px 10px 20px 10px;
            display: ${props => props.$openMenu ? "flex" : "none"};
            z-index: 2;
        }

        
        li {
            cursor: pointer;
            font-size: 2.4rem;
            font-weight: 500;
            border-bottom: 3px solid transparent;
            padding-bottom: 5px;

            @media (max-width: 1220px) {
                font-size: 1.6rem;
            }
        }

        li:hover {
            border-bottom: 3px solid var(--color-detail);
            border-radius: 5px;
        }
    }

    .burguer {
        margin-right: 40px;
        display: none;
        width: 40px;

        @media (max-width: 1023px) {
            display: flex;
        }
    }


`