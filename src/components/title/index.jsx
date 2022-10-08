import React from "react";
import styled from "styled-components";
import { Roboto } from "../fonts";

export default function Title({ content, size }) {

    return (
        <Container>
            <Roboto special={true} size={size ? size : "1.6rem"}>
                {content}
            </Roboto>
        </Container>
    )
};

const Container = styled.section`

    width: 100%;
    height: 10%;

    display: flex;
    align-items: center;
    justify-content: center;
`;