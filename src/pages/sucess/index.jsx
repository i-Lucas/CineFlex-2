import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Title from "../../components/title";
import Header from "../../components/header";
import { Roboto } from "../../components/fonts";
import api from "../../services/api";

import {

    Container,
    Content,
    TitlesContainer,
    TitlesContent,
    TicketsContainer,
    Ticket,
    BuyerContainer,
    Button,
    BackgroundContainer

} from "./style";

export default function Sucess() {

    const { state } = useLocation();
    const navigate = useNavigate();
    const [data, setData] = React.useState({});

    React.useEffect(() => {

        if (state === null) navigate("/");

        else {
            const { name, cpf, movie, tickets } = state;
            const data = { name, cpf, movie, tickets };

            (async function () {
                await api.post(`/seats/book-many`,
                    { ids: data.tickets, name, cpf });
            })();

            setData(data);
        };

    }, [state]);

    if (data.movie) {

        const { title, img, date } = data.movie
        const { name, cpf } = data;

        return (
            <Container>
                <Header />
                <Title content={"Pedido feito com sucesso !"} />
                <Content>

                    <TitlesContainer>
                        <TitlesContent>
                            <br />
                            <Roboto bold size="1.5rem">Filme e sessão</Roboto>
                            <br />
                            <Roboto>{title}</Roboto>
                            <br />
                            <Roboto bold>{date}</Roboto>
                        </TitlesContent>

                        <TicketsContainer>
                            <RenderTickets tickets={data.tickets} />
                        </TicketsContainer>

                        <BuyerContainer>
                            <Roboto bold size="1.5rem">Comprador</Roboto>
                            <br />
                            <Roboto>Nome: {name}</Roboto>
                            <br />
                            <Roboto bold>CPF: {cpf}</Roboto>
                            <Button onClick={() => navigate("/")}>
                                <Roboto>Voltar para home</Roboto>
                            </Button>
                        </BuyerContainer>
                    </TitlesContainer>

                    <BackgroundContainer src={img} />

                </Content>
            </Container>
        )
    };
};

function RenderTickets({ tickets }) {

    return tickets.map(item =>
        <Ticket key={item.seat}>
            <Roboto>Poltrona</Roboto>
            <Roboto bold>{item.number}</Roboto>
        </Ticket>
    )
};