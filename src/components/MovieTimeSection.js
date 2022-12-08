// libraries
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

// variables 
import { headerHeight, cineFlexOrange, cineFlexSimpleTextColor, cineFlexHeight, mvSecFooterHeight, mvSecFooterColor } from "../styles/colorsAndHeights"

// components
import Loader from "./Loader";
import MovieSeatsSection from "./MovieSeatsSection";

export default function MovieTimeSection() {
    const { idFilme } = useParams()
    const [movieInfo, setMovieInfo] = useState([])
    const [movieDays, setMovieDays] = useState([]);
    const movieShowTimesUrl = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`

    useEffect(() => {
        axios.get(movieShowTimesUrl)
            .then(res => {                
                setMovieDays(res.data.days)
                setMovieInfo(res.data)
            })
    }, [])

    console.log(movieDays);

    const movieDaysArrived = (movieDays[0] != undefined ? true : false)
    
    return(
        <>
            {movieDaysArrived ? ( 
                <MovieTimeSectionWrapper>
                    <MovieTimeSectionTitle>Selecione o horário</MovieTimeSectionTitle>
                    <MovieDays>
                        <ul>
                            {movieDays.map(movieDay => (    
                                <DayAndHoursOption key={movieDay.id}> 
                                    <h2>{movieDay.weekday} - {movieDay.date}</h2> 
                                    <Hours>
                                        {movieDay.showtimes.map(showTime => (
                                            <Link key={showTime.id} to={`/assentos/${showTime.id}`}>
                                                <HoursButton>
                                                    <p>{showTime.name}</p>
                                                </HoursButton>
                                            </Link>
                                        ))}
                                    </Hours>
                                </DayAndHoursOption>
                            ))}
                        </ul>
                    </MovieDays>
                    <MovieTimeSectionFooter>
                        <MovieInfo>
                            <figure>
                                <img src={movieInfo.posterURL}/>
                            </figure>
                            <p>{movieInfo.title}</p>
                        </MovieInfo>
                    </MovieTimeSectionFooter>
                </MovieTimeSectionWrapper>
            ) : (
                <Loader/>
            )}
        </>
    )
}

const MovieTimeSectionWrapper = styled.main`
    height: calc(calc(100vh - ${headerHeight}) - ${mvSecFooterHeight});
`

const MovieTimeSectionTitle = styled.h1`
    font-family: 'Roboto';
    font-size: 24px;
    height: ${cineFlexHeight};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${cineFlexSimpleTextColor};
`

const MovieDays = styled.section`
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
    > ul {
        height: calc(calc(calc(100vh - ${headerHeight}) - ${mvSecFooterHeight}) - ${cineFlexHeight});
    }
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
        color: ${cineFlexSimpleTextColor};
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

const MovieTimeSectionFooter = styled.footer`
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