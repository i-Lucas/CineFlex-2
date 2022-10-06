import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Footer from "../../components/footer";
import Header from "../../components/header";
import Loader from "../../components/loader";
import Title from "../../components/title";
import useSeats from "../../hooks/api/seats";
import { Roboto } from "../../components/fonts";

import SomethingWentWrong from "../../components/error";

export default function Session() {

    const { id } = useParams();
    const [seats, setSeat] = React.useState({ movie: {}, list: [] });
    const { movie } = seats;

    const { loading, data, error } = useSeats.getSeats(id);

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

    function RenderSeats() {

        if (loading) return <Content><Loader /></Content>;
        if (error) return SomethingWentWrong(error);

        const { list } = seats;
        return list.map((data, index) => <SeatComponent key={index} props={data} />);
    };

    function SeatComponent({ props }) {

        const { id, name, isAvailable } = props;

        return (
            <SeatBox >
                <Roboto size="12px">
                    {name}
                </Roboto>
            </SeatBox>
        )
    };

    return (
        <Container>
            <Header />
            <Title content={"Selecione o(s) assento(s)"} />
            <Content>
                <SeatContainer>
                    <RenderSeats />
                </SeatContainer>
            </Content>
            <Footer data={movie} />
        </Container>
    )
};

const Container = styled.section`

    width: 100%;
    height: 100vh;
`;

const Content = styled.section`

    width: 100%;
    height: 65%;
`;

const SeatContainer = styled.section`

    width: 55%;
    height: 50%;
    margin: auto;
    overflow: auto;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;

const SeatBox = styled.section`

    width: 26px;
    height: 26px;
    margin: 1%;

    border-radius: 12px;
    border: 1px solid #808F9D;
    background-color: #C3CFD9;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;