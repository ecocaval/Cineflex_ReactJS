// libraries
import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";


// variables 
import { headerHeight, cineFlexSimpleTextColor, cineFlexHeight, mvSecFooterHeight, mvSecFooterColor } from "../styles/colorsAndHeights"

export default function MovieSeatsSection() {

    const { idSessao } = useParams()

    const seatsInfoUrl = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    const [seatsInfo, setSeatsIngo] = useState([])
    const seatStatesInfo = [
        { backColor: "#1AAE9E"  ,
          borderColor: "#0E7D71" ,
          text: "Selecionado"
        },
        { backColor: "#C3CFD9"  ,
          borderColor: "#7B8B99" ,
          text: "Disponível"
        },
        { backColor: "#FBE192"  ,
          borderColor: "#F7C52B" ,
          text: "Indisponível"
        },
    ]

    useEffect(() => {
        axios.get(seatsInfoUrl)
            .then(res => {
                setSeatsIngo(res.data.seats)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    // console.log(seatsInfo)

    return (
        <>
            <MovieSeatsSectionWrapper>
                <MovieSeatsSectionTitle>Selecione o(s) assento(s)</MovieSeatsSectionTitle>
                <Seats>
                    {seatsInfo.map(seat => (
                        <Seat key={seat.id}>
                            <p>{seat.name}</p>
                        </Seat>
                    ))}
                </Seats>
                <SeatsStatesSection>
                    {seatStatesInfo.map((seatState,i) => (
                        <SeatState key={i} seatState={seatState}>
                            <div></div>
                            <p>{seatState.text}</p>
                        </SeatState>
                    ))}
                </SeatsStatesSection>
            </MovieSeatsSectionWrapper>
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

const Seat = styled.button`
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 13px;
    width: 26px;
    height: 26px;
    margin: 0px 3px 3px 3px;
    > p {
        font-family: 'Roboto';
        font-size: 11px;
        text-align: center;
        color: #000000;
    }
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
    > p {
        font-family: 'Roboto';
        font-size: 26px;
        color: ${cineFlexSimpleTextColor};
        margin-left: 0.8em;
    }
`