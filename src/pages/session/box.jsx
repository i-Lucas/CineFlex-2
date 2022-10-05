import React from "react";

import {

    SessionContainer,
    ButtonsContainer,
    WeekdayContainer,
    Button

} from "./style";

import { Roboto } from "../../components/fonts";

export default function BuildSessionBox({ props }) {

    const { weekday, date, id, showtimes } = props;

    function RenderButtons() {

        return showtimes.map(({ id, name }) =>
            <Button key={id}>
                <Roboto>{name}</Roboto>
            </Button>);
    };

    return (
        <SessionContainer>
            <WeekdayContainer>
                <Roboto>{weekday} {date}</Roboto>
            </WeekdayContainer>
            <ButtonsContainer>
                <RenderButtons />
            </ButtonsContainer>
        </SessionContainer>
    )
};