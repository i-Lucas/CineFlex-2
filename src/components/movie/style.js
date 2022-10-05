import styled from "styled-components";

export const Container = styled.section`

    width: 20%;
    height: 80%;
    margin: 2%;
    
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