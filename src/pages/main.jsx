import React from "react";
import styled from "styled-components";

// import useMovies from "../hooks/api/movies";
// import useSessions from "../hooks/api/sessions";
// import useSeats from "../hooks/api/seats";

import Header from "../components/header";
import Footer from "../components/footer";

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

    // console.log(reserve.data);

    return (
        <HomeContainer>
            <Header />
            <Content />
            <Footer data={{ image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg", name: "Lucas", date: "Quinta-Feira 15:00" }} />
        </HomeContainer>
    )
};

const HomeContainer = styled.div`

    width: 100%;
    height: 100vh;
    background-color: lightblue;
`;

const Content = styled.section`

    width: 100%;
    height: 75%;
    background-color: tomato;
`;