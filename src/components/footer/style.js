import styled from "styled-components";

export const Container = styled.header`

    width: 100%;
    height: 15%;

    display: flex;
    align-items: center;
    background-color: #C3CFD9;
    justify-content: space-around;
`;

export const ImageContainer = styled.section`

    width: 10%;
    height: 90%;
    
    border-radius: 2px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    background-size: 90% 90%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${props => props.src});

    @media screen and (max-width: 768px) {
        width: 30%;
    }
`;

export const Space = styled.div`

    margin-top: 2%;
    @media screen and (max-width: 768px) {
        margin-top: 10%;
    }
`;

export const MovieDataContainer = styled.section`

    width: 80%;
    height: 80%;
    
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 60%;
    }
`;