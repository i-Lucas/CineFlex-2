import React from "react";
import styled from "styled-components";
import { Roboto } from "../fonts";

export default function Header() {

    return (
        <Container>
            <Roboto color={"#E8833A"} size={"2rem"}>CINEFLEX</Roboto>
        </Container>
    )
};

const Container = styled.header`

    width: 100%;
    height: 10%;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
`;