// libraries
import { useState } from "react";
import styled from "styled-components";

// variables 
import { availableSeatColor, availableSeatBorderColor, occupiedSeatColor, occupiedSeatBorderColor, selectedSeatColor, selectedSeatBorderColor } from "../styles/colorsAndHeights"

export default function Seat({ seat, selectedSeatsIds, setSelectedSeatsIds, selectedSeatsNumbers, setSelectedSeatsNumbers }) {

    const seatIsSelected = selectedSeatsIds.includes(seat.id)

    function selectSeat() {
        if(!seat.isAvailable) {
            alert("Este assento não está disponível")
            return;
        }
        if(!seatIsSelected) {
            setSelectedSeatsIds([...selectedSeatsIds, seat.id])
            setSelectedSeatsNumbers([...selectedSeatsNumbers, seat.name])
        } else {
            const updatedSelectedSeatsIds = [...selectedSeatsIds]
            const updatedSelectedSeatsNumbers = [...selectedSeatsNumbers]
            const seatToRemoveIndex = selectedSeatsIds.indexOf(seat.id)

            updatedSelectedSeatsIds.splice(seatToRemoveIndex,1)
            updatedSelectedSeatsNumbers.splice(seatToRemoveIndex,1)
            
            setSelectedSeatsIds(updatedSelectedSeatsIds)
            setSelectedSeatsNumbers(updatedSelectedSeatsNumbers)
        }
    }

    console.log(selectedSeatsIds)
    console.log(selectedSeatsNumbers)

    return (
        <StyledSeat
            seatIsAvailable={seat.isAvailable}
            seatIsSelected={seatIsSelected}
            onClick={selectSeat}
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