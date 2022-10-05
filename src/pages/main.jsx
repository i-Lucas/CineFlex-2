import React from "react";
import styled from "styled-components";

import useMovies from "../hooks/api/useMovies";

export default function Home () {

    const movies = useMovies();
    console.log(movies.data);

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