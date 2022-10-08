import React from "react";
import { Roboto } from "../fonts";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Header({ page }) {

    const navigate = useNavigate();
    const sucess = window.location.pathname === "/sucess" || window.location.pathname === "/"

    function RenderButton() {

        if (!sucess) return (
            <Icon>
                <ion-icon
                    name="arrow-back-circle"
                    onClick={() => page !== null && navigate(page)} />
            </Icon>
        )
    };

    return (
        <Container>
            <Roboto color={"#E8833A"} size={"2rem"}>CINEFLEX</Roboto>
            <RenderButton />
        </Container>
    )
};

const Container = styled.header`

    width: 100%;
    height: 10%;

    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
`;

const Icon = styled.div`

    position: absolute;
    top: 30%;
    left: 5%;

    ion-icon {
        cursor: pointer;
        font-size: 25px;
    }
`;