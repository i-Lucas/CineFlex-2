import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Roboto } from "../../components/fonts";
import Title from "../../components/title";
import Header from "../../components/header";

export default function NotFound() {

    const navigate = useNavigate();
    const [count, setCount] = React.useState(10);

    React.useEffect(() => {

        setTimeout(() => setCount(count - 1), 1000);
        if (count === 0) return navigate("/");
    });

    return (

        <Container>
            <Header page="/" />
            <Content>
                <Title size="2rem" content="Sorry" /><br />
                <Roboto size="1.5rem" color="#000000">this page does not exist !</Roboto><br />
                <Roboto color="#000000">you will be redirected to the main page in</Roboto>
                <br />
                <Roboto color="#000000">{count}</Roboto>
            </Content>
        </Container>
    )
};

const Container = styled.section`
    width: 100%;
    height: 100vh;
`;

const Content = styled.section`

    width: 100%;
    height: 90%;

    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;