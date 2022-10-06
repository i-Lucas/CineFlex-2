import React from "react";
import styled from "styled-components";
import { Roboto } from "../../components/fonts";

export default function RenderInputs() {

    const [data, setData] = React.useState({ name: "", cpf: "" });

    function handleSubmit(e) {

        e.preventDefault();
        alert("Hello!");
    };

    function format(element, value) {

        if (element === "cpf") {

            const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/
            const cpf = new String(value).replace(/[^\d]/g, "");
            setData({ ...data, cpf: cpf.replace(mask, "$1.$2.$3-$4") });

        } else {

            const name = new String(value).replace(/[0-9]/, "");
            setData({ ...data, name });
        };
    };

    return (
        <InputContainer>
            <form onSubmit={handleSubmit}>

                <Roboto size="0.8rem">Nome do comprador</Roboto>
                <Input
                    required
                    type="text"
                    minLength={5}
                    maxLength={15}
                    value={data.name}
                    onChange={(e) => format("name", e.target.value)}
                />

                <Roboto size="0.8rem">CPF do comprador</Roboto>
                <Input
                    required
                    type="text"
                    minLength={11}
                    maxLength={11}
                    value={data.cpf}
                    onChange={(e) => format("cpf", e.target.value)}
                />

                <Button>
                    <Roboto>Reservar</Roboto>
                </Button>

            </form>
        </InputContainer>
    )
};

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
    color: #000000;

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