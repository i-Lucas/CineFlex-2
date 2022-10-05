import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export default function Sessions() {

    const location = useLocation();
    console.log(location);

    return <Container />
};

const Container = styled.section`

    width: 100%;
    height: 100vh;
    background-color: tomato;
`;