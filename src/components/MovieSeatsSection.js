// libraries
import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

// variables 
import { headerHeight, cineFlexSimpleTextColor, cineFlexHeight, mvSecFooterHeight, mvSecFooterColor, selectedSeatColor, selectedSeatBorderColor, availableSeatColor, availableSeatBorderColor, occupiedSeatColor, occupiedSeatBorderColor } from "../styles/colorsAndHeights"

// components
import Loader from "./Loader";
import Seat from "./Seat";

export default function MovieSeatsSection() {

    const { idSessao } = useParams()
    const [movieInfo, setSeatsInfo] = useState([])

    const seatStatesInfo = [
        { backColor: selectedSeatColor, borderColor: selectedSeatBorderColor, text: "Selecionado" },
        { backColor: availableSeatColor, borderColor: availableSeatBorderColor, text: "Disponível" },
        { backColor: occupiedSeatColor, borderColor: occupiedSeatBorderColor, text: "Indisponível" },
    ]

    const seatsInfoUrl = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`

    let moviesArrived = false;

    useEffect(() => {
        axios.get(seatsInfoUrl)
            .then(res => {
                setSeatsInfo(res.data)
                console.log(res.data.seats);
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    if (movieInfo.seats !== undefined) {
        moviesArrived = true;
    } else {
        moviesArrived = false;
    }

    return (
        <>
            {moviesArrived ? (
                <MovieSeatsSectionWrapper>
                    <MovieSeatsSectionTitle>Selecione o(s) assento(s)</MovieSeatsSectionTitle>
                    <Seats>
                        {movieInfo.seats.map(seat => (
                            <Seat key={seat.id} seat={seat}/>
                        ))}
                    </Seats>
                    <SeatsStatesSection>
                        {seatStatesInfo.map((seatState, i) => (
                            <SeatState key={i} seatState={seatState}>
                                <div></div>
                                <p>{seatState.text}</p>
                            </SeatState>
                        ))}
                    </SeatsStatesSection>
                    <MovieSeatsSectionFooter>
                        <MovieInfo>
                            <figure>
                                <img src={movieInfo.movie.posterURL} />
                            </figure>
                            <div>
                                <p>{movieInfo.movie.title}</p>
                                <p>{movieInfo.day.weekday + " - " + movieInfo.name}</p>
                            </div>
                        </MovieInfo>
                    </MovieSeatsSectionFooter>
                </MovieSeatsSectionWrapper>
            ) : (
                <Loader />
            )}
        </>
    )
}

const MovieSeatsSectionWrapper = styled.main`
`

const MovieSeatsSectionTitle = styled.h1`
    font-family: 'Roboto';
    font-size: 24px;
    height: ${cineFlexHeight};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${cineFlexSimpleTextColor};
`

const Seats = styled.section`
    margin-left: 10vw;
    margin-right: 10vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const SeatsStatesSection = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 1em;
`

const SeatState = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 20px;
    > div {
        background: ${props => props.seatState.backColor};
        border: 1px solid ${props => props.seatState.borderColor};
        border-radius: 13px;
        width: 26px;
        height: 26px;
        margin: 0px 3px 3px 3px;
    }
    > p {
        font-family: 'Roboto';
        font-size: 13px;
        color: #4E5A65;
    }
`

const MovieSeatsSectionFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    height: ${mvSecFooterHeight};
    width: 100vw;
    background-color: ${mvSecFooterColor};
    box-shadow: 0px 0px 10px #0000006f;
`

const MovieInfo = styled.span`
    display: flex;
    align-items: center;
    margin-left: 0.8em;
    > figure {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px !important;
        height: 89px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        > img {
            width: 48px;
            height: 72px;
        }
    }
    > div {
        > p {
            font-family: 'Roboto';
            font-size: 26px;
            color: ${cineFlexSimpleTextColor};
            margin-left: 0.8em;
        }
    }
`