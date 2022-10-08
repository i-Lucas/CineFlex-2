import React from "react";
import { useNavigate } from "react-router-dom";

import { Roboto } from "../../components/fonts";
import { InputContainer, Input, Button } from "./style";

export default function RenderInputs({ props }) {

    const navigate = useNavigate();
    const [data, setData] = React.useState({ name: "", cpf: "" });

    function handleSubmit(e) {

        e.preventDefault();
        if (props.seats.length === 0) return alert("Você deve escolher no mínimo um lugar");
        if (data.cpf.length < 11) return alert("CPF inválido");
        if (data.name.length < 3) return alert("Nome inválido");

        const send = {

            name: data.name,
            cpf: data.cpf,
            movie: props.movie,
            tickets: props.seats
        };

        navigate("/sucess", { state: send });
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
                    minLength={3}
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