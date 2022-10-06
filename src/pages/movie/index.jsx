import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Loader from "../../components/loader";
import Title from "../../components/title";
import { Roboto } from "../../components/fonts";

import SomethingWentWrong from "../../components/error";
import useSession from "../../hooks/api/sessions";

import {

    Container,
    Content,
    SessionContainer,
    ButtonsContainer,
    WeekdayContainer,
    Button

} from "./style";

export default function Movie() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [session, setSession] = React.useState({ movie: {}, sessions: [] });
    const { loading, data, error } = useSession(id);
    const { movie } = session;

    React.useEffect(() => {

        if (isNaN(id)) navigate("/");

        if (!loading) {

            const movie = {

                id: data.id,
                title: data.title,
                img: data.posterURL
            };

            setSession({ movie, sessions: [...data.days] });
        };

    }, [loading]);

    function MovieTimes() {

        if (loading) return <Content><Loader /></Content>;
        if (error) return SomethingWentWrong(error);

        const { sessions } = session;
        return sessions.map((element, index) => <TimeBox key={index} props={element} />);
    };

    return (
        <Container>
            <Header />
            <Title content={"Selecione o horário"} />
            <Content>
                <MovieTimes />
            </Content>
            <Footer data={{ img: movie.img, title: movie.title, date: "" }} />
        </Container>
    )
};

function TimeBox({ props }) {

    const navigate = useNavigate();
    const { weekday, date, showtimes } = props;

    function RenderButtons() {

        return showtimes.map(({ id, name: hour }) =>

            <Button key={id} onClick={() => navigate(`/session/${id}`)}>
                <Roboto>{hour}</Roboto>
            </Button>);
    };

    return (
        <SessionContainer>
            <WeekdayContainer>
                <Roboto>{weekday} {date}</Roboto>
            </WeekdayContainer>
            <ButtonsContainer>
                <RenderButtons />
            </ButtonsContainer>
        </SessionContainer>
    )
};