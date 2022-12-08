// libraries
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { mvSecFooterHeight, mvSecFooterColor } from "../styles/colorsAndHeights";

// variables 
import { headerHeight, cineFlexOrange, cineFlexH1Color, cineFlexH2Color, cineFlexHeight } from "../styles/colorsAndHeights"

//components
import Loader from "./Loader";

export default function MovieSection() {
    const { idFilme } = useParams()
    const [movieHourInfo, setMovieHourInfo]  = useState({})
    const [movieDays, setMovieDays] = useState([]);

    const movieHourInfoUrl = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`

    useEffect(() => {
        axios.get(movieHourInfoUrl)
            .then(res => {
                setMovieHourInfo(res.data)
                setMovieDays(res.data.days)
            })
    }, [])

    const movieDaysArrived = (movieDays[0] != undefined ? true : false)

    console.log(movieDays);

    console.log(movieDaysArrived);
    
    return(
        <>
            {movieDaysArrived ? ( 
                <MovieSectionWrapper>
                    <MovieSectionTitle>Selecione o horário</MovieSectionTitle>
                    <MovieDays>
                        <ul>
                            {movieDays.map(movieDay => (    
                                <DayAndHoursOption key={movieDay.id}> 
                                    <h2>{movieDay.weekday} - {movieDay.date}</h2> 
                                    <Hours>
                                        {movieDay.showtimes.map(time => (
                                            <HoursButton key={time.id}>
                                                <p>{time.name}</p>
                                            </HoursButton>
                                        ))}
                                    </Hours>
                                </DayAndHoursOption>
                            ))}
                        </ul>
                    </MovieDays>
                    <MovieSectionFooter>
                        <MovieInfo>
                            <figure>
                                <img srd="#"/>
                            </figure>
                            <p></p>
                        </MovieInfo>
                    </MovieSectionFooter>
                </MovieSectionWrapper>
            ) : (
                <Loader/>
            )}
        </>
    )
}

const MovieSectionWrapper = styled.main`
    height: calc(calc(100vh - ${headerHeight}) - ${mvSecFooterHeight});
`

const MovieSectionTitle = styled.h1`
    font-family: 'Roboto';
    font-size: 24px;
    height: ${cineFlexHeight};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${cineFlexH1Color};
`

const MovieDays = styled.section`
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(calc(calc(100vh - ${headerHeight}) - ${mvSecFooterHeight}) - ${cineFlexHeight});
`

const DayAndHoursOption = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20em;
    height: 6em ;
    margin-bottom: 2em;

    > h2 {
        font-family: 'Roboto';
        font-size: 20px;      
        color: ${cineFlexH2Color};
    } 
`

const Hours = styled.section`
    display: inline-block;
    white-space: nowrap; 
    overflow-x: scroll;
    width: 100;
    height: 43px;
   
    @media (max-width: 500px) {
        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar {
        display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */    
    }

`

const HoursButton = styled.button`
    width: 83px;
    height: 100%;
    background: ${cineFlexOrange};
    border-radius: 3px;
    border: none;
    margin-right: 1em;
    > p {
        font-family: 'Roboto';
        font-size: 18px;
        color: #FFFFFF;
    }
`

const MovieSectionFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    height: ${mvSecFooterHeight};
    width: 100vw;
    background-color: ${mvSecFooterColor};
    box-shadow: 0px 0px 10px #0000006f;
`

const MovieInfo = styled.span`

`