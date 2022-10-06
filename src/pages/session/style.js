import styled from "styled-components";

export const Container = styled.section`

    width: 100%;
    height: 100vh;
`;

export const Content = styled.section`

    width: 100%;
    height: 65%;

    @media screen and (max-width: 768px) {
        height: 85%;
    }
`;

export const SeatContainer = styled.section`

    width: 55%;
    height: 50%;
    margin: auto;
    overflow: auto;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;

export const SeatBox = styled.section`

    width: 26px;
    height: 26px;
    margin: 1%;

    border-radius: 12px;
    border: 1px solid #808F9D;
    background-color: ${props => props.color};

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: ${props => props.sub ? "default" : props.status ? "pointer" : "not-allowed"};
        transform: scale(1.05);
    }
`;

export const BookSeats = styled.section`

    width: 55%;
    height: 50%;
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;

export const SubtitleContainer = styled.section`

    width: 70%;
    height: 20%;
    display: flex;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 30%;
    }
`;

export const OptionBox = styled.section`

    width: calc(100% / 3);
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;