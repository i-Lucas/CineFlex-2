import React from "react";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ props }) {

    const navigate = useNavigate();

    const { id, posterURL: img } = props;
    return <Container src={img} onClick={() => navigate(`/session/${id}`)} />
};