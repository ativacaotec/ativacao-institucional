import { styled } from "styled-components";

export const BrandCardStyled = styled.div`
    max-width: 280px;
    max-height: 263px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-white);
    padding: 17px 36px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    
    figure {
        max-width: 206px;

        img {
            max-width: 100%;
        }
    }
`