// libraries
import { useState } from "react";
import styled from "styled-components";

// variables 
import { availableSeatColor, availableSeatBorderColor, occupiedSeatColor, occupiedSeatBorderColor, selectedSeatColor, selectedSeatBorderColor } from "../styles/colorsAndHeights"

export default function Seat({ seat }) {

    const [seatIsSelected, setSeatIsSelected] = useState(false)

    return (
        <StyledSeat
            seatIsAvailable={seat.isAvailable}
            seatIsSelected={seatIsSelected}
            onClick={() => setSeatIsSelected(true)}
        >
            <p>{seat.name}</p>
        </StyledSeat>
    );
}

const StyledSeat = styled.button`
    background: ${props => props.seatIsAvailable ? (props.seatIsSelected ? selectedSeatColor : availableSeatColor) : occupiedSeatColor};
    border: 1px solid ${props => props.seatIsAvailable ? (props.seatIsSelected ? selectedSeatBorderColor : availableSeatBorderColor) : occupiedSeatBorderColor};
    border-radius: 13px;
    width: 26px;
    height: 26px;
    margin: 0px 6px 6px 6px;

    &:hover {
        cursor: pointer;
    }

    > p {
        font-family: 'Roboto';
        font-size: 11px;
        text-align: center;
        color: #000000;
    }
`