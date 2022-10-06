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
    const navigate = useNavigate();

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
        const color = isAvailable ? "#C3CFD9" : "#FBE192";

        return (
            <SeatBox color={color}>
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
                <BookSeats>

                    <SubtitleContainer>
                        <OptionBox>
                            <SeatBox color={"#1AAE9E"} />
                            <Roboto size="0.8rem">Selecionado</Roboto>
                        </OptionBox>
                        <OptionBox>
                            <SeatBox color={"#C3CFD9"} />
                            <Roboto size="0.8rem">Disponível</Roboto>
                        </OptionBox>
                        <OptionBox>
                            <SeatBox color={"#FBE192"} />
                            <Roboto size="0.8rem">Indisponível</Roboto>
                        </OptionBox>
                    </SubtitleContainer>

                    <InputContainer>
                        <form action="">
                            <Roboto size="0.8rem">Nome do comprador</Roboto>
                            <Input type="text" placeholder="Digite seu nome ..." required />
                            <Roboto size="0.8rem">CPF do comprador</Roboto>
                            <Input type="text" placeholder="Digite seu CPF ..." required />
                            <Button>
                                <Roboto>Reservar</Roboto>
                            </Button>
                        </form>
                    </InputContainer>

                </BookSeats>
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

    @media screen and (max-width: 768px) {
        height: 85%;
    }
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
    background-color: ${props => props.color};

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;

const BookSeats = styled.section`

    width: 55%;
    height: 50%;
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;

const SubtitleContainer = styled.section`

    width: 70%;
    height: 20%;
    display: flex;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 30%;
    }
`;

const OptionBox = styled.section`

    width: calc(100% / 3);
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const InputContainer = styled.section`

    width: 95%;
    height: 70%;
    margin: 0 auto;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    form {
        width: 100%;
        height: 100%;
    }
`;

const Input = styled.input`

    width: 50%;
    height: 30%;
    margin: 1% 0 2% 0;
    padding-left: 5%;

    font-style: italic;
    color: #AFAFAF;

    @media screen and (max-width: 768px) {
        margin: 1% 0 5% 0;
        width: 100%;
        height: 25%;
    }
`;

const Button = styled.button`

    width: 20%;
    height: 20%;
    bottom: 5%;
    right: 0;
    
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: #E8833A;
    border: 2px solid black;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }

    @media screen and (max-width: 768px) {
        width: 25%;
        height: 15%;
        right: 1px;
        bottom: 5%;
    }
`;