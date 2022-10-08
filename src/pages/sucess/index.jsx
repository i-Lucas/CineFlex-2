import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import Title from "../../components/title";
import Header from "../../components/header";
import { Roboto } from "../../components/fonts";

export default function Sucess() {

    const { state } = useLocation();
    const navigate = useNavigate();
    const [data, setData] = React.useState({});

    React.useEffect(() => {

        if (state === null) navigate("/");

        else {
            const { name, cpf, movie, tickets } = state;
            const data = { name, cpf, movie, tickets };
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

    return tickets.map((element, index) =>
        <Ticket key={index}>
            <Roboto>Poltrona</Roboto>
            <Roboto bold>{element}</Roboto>
        </Ticket>)
};

const Container = styled.section`

    width: 100%;
    height: 100vh;
`;

const Content = styled.section`

    width: 80%;
    height: 75%;
    margin: auto;
    display: flex;
    align-items: center;

    border-radius: 10px;
    background-color: #C3CFD9;
    box-shadow: 10px 10px 5px #aaaaaa;
`;

const TitlesContainer = styled.section`

    width: 54%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const TitlesContent = styled.section`

    width: 90%;
    height: 30;
    margin: 2% auto;
`;

const TicketsContainer = styled.section`

    width: 100%;
    height: 45%;

    overflow-x: auto;
    flex-wrap: wrap;
`;

const Ticket = styled.section`

    width: 90%;
    height: 35%;
    margin: 2% auto;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8);

    &:hover {
        cursor: pointer;
        transform: scale(1.01);
    }
`;

const BuyerContainer = styled.section`

    width: 90%;
    height: 20%;
    margin: 2% auto;
    position: relative;
`;

const Button = styled.button`

    width: 20%;
    height: 50%;
    
    right: 0;
    bottom: 5%;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    background-color: #E8833A;

    &:hover {
        cursor: pointer;
        transform: scale(1.01);
    }

    @media screen and (max-width: 768px) {
        width: 25%;
        height: 55%;
    }
`;

const BackgroundContainer = styled.section`

    width: 45%;
    height: 95%;
    transition: 1s;

    background-size: 90% 90%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${props => props.src});
    background-color: #FFFFFF;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        transform: scale(1.01);
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;