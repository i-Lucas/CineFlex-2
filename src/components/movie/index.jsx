import React from "react";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ props }) {

    const navigate = useNavigate();

    const { id, title, posterURL, overview, releaseDate } = props;
    const state = { id, title, posterURL, overview, releaseDate };

    return <Container src={posterURL} onClick={() => navigate(`/sessoes:${id}`, { state })} />
};