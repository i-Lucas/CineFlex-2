import React from "react";
import styled from "styled-components";
import { Roboto } from "../fonts";

export default function SomethingWentWrong(message) {

    return (
        <Container>
            <Roboto>
                {message}
            </Roboto>
        </Container>
    )
};

const Container = styled.section`

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;