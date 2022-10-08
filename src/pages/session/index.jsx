import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import Footer from "../../components/footer";
import Header from "../../components/header";
import Title from "../../components/title";
import useSeats from "../../hooks/api/seats";

import RenderSeats from "./seats";
import RenderInputs from "./input";
import RenderSubtitles from "./subtitles";

import {

    Container,
    Content, SeatContainer,
    BookSeats

} from "./style";

export default function Session() {
    
    const { id } = useParams();
    const navigate = useNavigate();

    const [seats, setSeat] = React.useState({ movie: {}, list: [] });
    const { movie } = seats;

    const { loading, data, error } = useSeats.getSeats(id);
    const [list, setList] = React.useState([]);

    React.useEffect(() => {

        if (isNaN(id)) navigate("/");

        if (!loading) {

            const movie = {

                date: `${data.day.weekday} ${data.day.date}`,
                img: data.movie.posterURL,
                title: data.movie.title
            };

            setSeat({ movie, list: [...data.seats] });
        };

    }, [loading]);

    const colors = {
        selected: "#1AAE9E",
        available: "#C3CFD9",
        unavailable: "#FBE192"
    };

    const { state } = useLocation();
    const { movie: movieID } = state;

    return (
        <Container>
            <Header page={`/movie/${movieID}`} />
            <Title content={"Selecione o(s) assento(s)"} />

            <Content>
                <SeatContainer>
                    <RenderSeats props={{ loading, error, seats, colors, list, setList }} />
                </SeatContainer>
                <BookSeats>
                    <RenderSubtitles colors={colors} />
                    <RenderInputs props={{ movie, seats: list }} />
                </BookSeats>
            </Content>

            <Footer data={movie} />
        </Container>
    )
};