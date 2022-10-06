import styled from "styled-components";

export const HomeContainer = styled.div`

    width: 100%;
    height: 100vh;
`;

export const Content = styled.section`

    width: 100%;
    height: 90%;
    margin: 0 auto;
    overflow-x: auto;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const MovieContainer = styled.section`

    width: 20%;
    height: 80%;
    margin: 2%;
    transition: 1s;

    border-radius: 5px;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${props => props.src});
    box-shadow: 10px 10px 5px #aaaaaa;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }

    @media screen and (max-width: 768px) {
        width: 45%;
        height: 40%;
    }
`;