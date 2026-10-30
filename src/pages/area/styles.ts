import { styled } from "styled-components";
import arrow from "../../assets/Icons/down-arrow.png"

export const DivMap = styled.div`
    max-width: 523px;
    width: 100%;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin-left: 40px;
    overflow-x: hidden;

    .container {
        width: 100%;
        max-width: 523px;
    }

    .select-box {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
    }

    .selected {
        background-color: transparent;
        border-radius: 8px;
        margin-bottom: 8px;
        border: 1px solid var(--color-black);

    }

    /* .selected::after {
        content: "";
        background-image: url(${arrow});
        background-size: contain;
        background-repeat: no-repeat;

        position: absolute;
        height: 100%;
        width: 32px;
        right: 1000px;
        top: 1210px;
        transition: all 0.5s;
    } */

    .select-box .options-container {
        background-color: var(--color-white);
        color: var(--color-black);
        max-height: 0;
        width: 100%;
        opacity: 0;
        transition: all 0.5s;
        border-radius: 10px;
        overflow: hidden;
    }

    .select-box .options-container.active {
        max-height: 240px;
        opacity: 1;
        overflow-y: scroll;
    }

    .select-box .options-container.active +.selected::after {
        transform: rotateX(190deg);
        top: -6px;
    }

    .select-box .options-container::-webkit-scrollbar {
        width: 8px;
        background-color: var(--color-detail);
        border-radius: 0 8px 8px 0;
    }

    .select-box .options-container::-webkit-thumb {
        background-color: grey;
        border-radius: 0 8px 8px 0;
    }


    .select-box .option, .selected {
        padding: 12px 24px;
        cursor: pointer;
    }

    .select-box label {
        cursor: pointer;
    }

    .select-box .option:hover {
        background-color: var(--color-detail);
    }

    .select-box .option .radio {
        display: none;
    }

    @media (max-width: 1023px) {
        flex-direction: column;
        align-items: center;
        gap: 100px;
    }

    @media (max-width: 600px) {
        margin-left: 0px;
        width: 90%;
    }

`

export const DivBox = styled.div`

    max-width: 1180px;
    width: 100%;
    min-height: 791px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 933px){
        flex-direction: column-reverse;
        align-items: center;
    }

`

export const DivContactInfo = styled.div`
    padding: 40px;
    max-width: 523px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border: 1px solid var(--color-black);
    border-radius: 10px;
`

export const MapFigure = styled.figure`

    width: 630px;
    position: relative;

    @media (max-width: 933px) {
        display: none;
    }

`

export const MapFigureMobile = styled.figure`

    max-width: 630px;
    width: 100%;
    position: relative;

    @media (min-width: 934px) {
        display: none;
    }

    @media (max-width: 630px) {
        width: 90%;
    }

    @media (max-width: 599px) {
        display: none;
    }

    .map {
        width: 100%;
    }

`

export const MapFigureMobileSmall = styled.figure`

    min-width: 310px;
    width: 85%;
    position: relative;

    @media (max-width: 489px) {
        display: none;
    }

    @media (min-width: 600px) {
        display: none;
    }

    .map {
        width: 100%;
    }

    img{
        &:not(:first-child) {
            max-width: 30px;
        }
    }

`

export const MapFigureMobileExtraSmall400 = styled.figure`

    min-width: 310px;
    width: 85%;
    position: relative;

    @media (min-width: 490px) {
        display: none;
    }

    @media (max-width: 409px) {
        display: none;
    }

    .map {
        width: 100%;
    }

    img{
        &:not(:first-child) {
            max-width: 23px;
        }
    }

`

export const MapFigureMobileExtraSmall = styled.figure`

    min-width: 310px;
    width: 85%;
    position: relative;

    @media (min-width: 410px) {
        display: none;
    }


    .map {
        width: 100%;
    }

    img{
        &:not(:first-child) {
            max-width: 23px;
        }
    }

`

export const MapImg = styled.img`
        width: 630px;
        object-fit: cover;
`