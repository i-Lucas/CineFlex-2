import React from "react";

import {

    SubtitleContainer,
    OptionBox,
    SeatBox

} from "./style";

import { Roboto } from "../../components/fonts";

export default function RenderSubtitles({ colors }) {

    const { selected, available, unavailable } = colors;

    return (
        <SubtitleContainer>
            <OptionBox>
                <SeatBox color={selected} sub={true} />
                <Roboto size="0.8rem">Selecionado</Roboto>
            </OptionBox>
            <OptionBox>
                <SeatBox color={available} sub={true} />
                <Roboto size="0.8rem">Disponível</Roboto>
            </OptionBox>
            <OptionBox>
                <SeatBox color={unavailable} sub={true} />
                <Roboto size="0.8rem">Indisponível</Roboto>
            </OptionBox>
        </SubtitleContainer>
    )
};