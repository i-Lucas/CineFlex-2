import styled from "styled-components";

export const Container = styled.section`

    width: 100%;
    height: 100vh;
`;

export const Content = styled.section`

    width: 80%;
    height: 75%;
    margin: auto;
    display: flex;
    align-items: center;

    border-radius: 10px;
    background-color: #C3CFD9;
    box-shadow: 10px 10px 5px #aaaaaa;
`;

export const TitlesContainer = styled.section`

    width: 54%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const TitlesContent = styled.section`

    width: 90%;
    height: 30;
    margin: 2% auto;
`;

export const TicketsContainer = styled.section`

    width: 100%;
    height: 45%;

    overflow-x: auto;
    flex-wrap: wrap;
`;

export const Ticket = styled.section`

    width: 90%;
    height: 35%;
    margin: 2% auto;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8);

    &:hover {
        cursor: pointer;
        transform: scale(1.01);
    }
`;

export const BuyerContainer = styled.section`

    width: 90%;
    height: 20%;
    margin: 2% auto;
    position: relative;
`;

export const Button = styled.button`

    width: 20%;
    height: 50%;
    
    right: 0;
    bottom: 5%;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    background-color: #E8833A;

    &:hover {
        cursor: pointer;
        transform: scale(1.01);
    }

    @media screen and (max-width: 768px) {
        width: 25%;
        height: 55%;
    }
`;

export const BackgroundContainer = styled.section`

    width: 45%;
    height: 95%;
    transition: 1s;

    background-size: 90% 90%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${props => props.src});
    background-color: #FFFFFF;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        transform: scale(1.01);
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;