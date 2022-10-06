import React from "react";

import Loader from "../../components/loader";
import SomethingWentWrong from "../../components/error";

import { SeatBox, Content } from "./style";
import { Roboto } from "../../components/fonts";

export default function RenderSeats({ props }) {

    const { loading, error, seats, colors } = props;

    if (loading) return <Content><Loader /></Content>;
    if (error) return SomethingWentWrong(error);

    const [list, setList] = React.useState([]);

    return seats.list.map((data, index) =>

        <SeatComponent

            key={index}
            props={data}
            colors={colors}
            selected={list.includes(data.id)}
            set={id => setList([...list, id])}
            unset={id => setList(list.filter(item => item !== id))}
        />);
};

function SeatComponent({ props, set, unset, selected, colors }) {

    const { id, name, isAvailable: available } = props;
    const color = selected ? colors.selected : available ? colors.available : colors.unavailable;

    function checkAvailability(seat) {

        if (available) {

            if (selected) unset(seat);
            else set(seat);
        };
    };

    return (
        <SeatBox
            status={available}
            color={color}
            onClick={() => checkAvailability(id)} >
            <Roboto size="12px">
                {name}
            </Roboto>
        </SeatBox>
    )
};