import React from "react";
import { Roboto } from "../fonts";

import {

    Container,
    ImageContainer,
    Space,
    MovieDataContainer

} from "./style";

export default function Footer({ data }) {

    const { img, title, date } = data;
    
    return (
        <Container>
            <ImageContainer src={img} />
            <MovieDataContainer>
                <Roboto>{title}</Roboto>
                <Space />
                <Roboto>{date}</Roboto>
            </MovieDataContainer>
        </Container>
    )
};