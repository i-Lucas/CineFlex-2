import styled from "styled-components";

export const Container = styled.section`

    width: 100%;
    height: 100vh;
`;

export const Content = styled.section`

    width: 100%;
    height: 65%;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;
    overflow-x: auto;

    @media screen and (max-width: 768px) {
        display: inline-block;
    }
`;

export const SessionContainer = styled.section`

    width: 20%;
    height: 35%;
    margin: 2%;

    transition: 1s;
    border-radius: 5px;
    background-color: gray;
    box-shadow: 10px 10px 5px #aaaaaa;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    
    @media screen and (max-width: 768px) {
        width: 80%;
        height: 20%;
        margin: 5% auto;
    }
`;

export const WeekdayContainer = styled.section`

    width: 100%;
    height: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonsContainer = styled.section`

    width: 100%;
    height: 50%;

    display: flex;
    align-items: center;
    justify-content: space-around;
`;  

export const Button = styled.button`

    width: 30%;
    height: 50%;
    border: none;
    border-radius: 3px;
    background: #E8833A;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;