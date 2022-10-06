import React from "react";
import styled from "styled-components";
import { Roboto } from "../fonts";

export default function Title({ content }) {

    return (
        <Container>
            <Roboto size="2rem">
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