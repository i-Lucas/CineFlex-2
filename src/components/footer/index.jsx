import React from "react";
import { Roboto } from "../fonts";

import {

    Container,
    ImageContainer,
    Space,
    MovieDataContainer

} from "./style";

export default function Footer({ data }) {

    const { image, name, date } = data;
    
    return (
        <Container>
            <ImageContainer src={image} />
            <MovieDataContainer>
                <Roboto>{name}</Roboto>
                <Space />
                <Roboto>{date}</Roboto>
            </MovieDataContainer>
        </Container>
    )
};