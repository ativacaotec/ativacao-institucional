import styled from "styled-components";

export const TabStyled = styled.div<{ $isActive? : boolean}>`
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

    .sectorName {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 290px;
        
        .icon {
            max-width: 45px;
        }

        .arrow {
            max-width: 32px;
        }
    }

`

export const PersonsStyled = styled.div<{ $isActive? : boolean}>`
    background-color: var(--color-white);
    max-width: 1180px;
    width: 100%;
    max-height: 600px;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    gap: 76px;
    justify-content: center;
    padding: 50px 0 50px 0;
    border-radius: 0 0 20px 20px;
    display: ${props => props.$isActive ? "flex" : "none"};
    max-height: ${props => props.$isActive ? '600px' : '0'};
    transition: opacity 0.9s ease-in-out, max-height 0.9s ease-in-out;
    

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
`