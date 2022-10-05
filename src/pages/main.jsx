import React from "react";
import styled from "styled-components";

// import useMovies from "../hooks/api/movies";
// import useSessions from "../hooks/api/sessions";
// import useSeats from "../hooks/api/seats";

export default function Home() {

    // const movies = useMovies();
    // console.log(movies.data);

    // const session = useSessions(1);
    // console.log(session.data);

    // const seats = useSeats.getSeats(5);
    // console.log(seats.data);

    // const reserve = useSeats.bookSeats({
    //     ids: [0],
    //     name: "Fulano",
    //     cpf: "12345678900"
    // });

    console.log(reserve.data);

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