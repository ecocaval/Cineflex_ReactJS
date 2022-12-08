// libraries
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

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
                            <section>
                                {movieDay.showtimes.map(time => (
                                    <span>
                                        <button key={time.id}>
                                            <p>{time.name}</p>
                                        </button>
                                        <button key={time.id}>
                                            <p>{time.name}</p>
                                        </button>
                                        <button key={time.id}>
                                            <p>{time.name}</p>
                                        </button>
                                    </span>
                                    
                                ))}
                            </section>
                        </DayAndHoursOption>
                    ))}
                </ul>
            </MovieDays>
            </MovieSectionWrapper>
        ) : (
            <Loader/>
        )}
    </>
    )
}

const MovieSectionWrapper = styled.main``

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
    display: flex;
    justify-content: center;
    align-items: center;
`

const DayAndHoursOption = styled.div`
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
    
    > section {
        display: inline-block;
        white-space: nowrap; 
        overflow-x: scroll;
        width: 100;
        height: 43px;

         /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar {
        display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */ 

        button {
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
        }
    }    
`