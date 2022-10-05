import React from "react";
import styled from "styled-components";

export default function Home () {

    return (
        <HomeContainer>
            <h1>Hello World</h1>
        </HomeContainer>
    )
};

const HomeContainer = styled.div`

    width: 100%;
    height: 100vh;
    background-color: lightblue;
`;