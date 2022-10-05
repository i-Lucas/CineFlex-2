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
