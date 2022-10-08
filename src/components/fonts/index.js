import styled from "styled-components";

export const Roboto = styled.h1`

    font-family: 'Recursive';
    color: ${props => props.color};
    font-size: ${props => props.size};
    font-weight: ${props => props.bold ? "bold" : "normal"};

    @media screen and (max-width: 768px) {
        font-size: ${props => props.special ? "1.6rem" : props.size};
    }
`;