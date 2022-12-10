// libraries
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"

// variables 
import { headerHeight, cineFlexSimpleTextColor, cineFlexHeight } from "../styles/colorsAndHeights"

// components
import Loader from "./Loader"

export default function Home() {

    const moviesUrl = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    const [moviesList, setMoviesList] = useState([])
    const moviesArrived = !(moviesList[0] === undefined)

    useEffect(() => {
        axios.get(moviesUrl)
            .then(res => {
                setMoviesList(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, [])

    return (
        <>
            {moviesArrived ? (
                <HomeWrapper>
                    <HomeTitle>Selecione o Filme</HomeTitle>
                    <MoviesWrapper>
                        {moviesList.map(movie => (
                            <Link to={`/sessoes/${movie.id}`} key={movie.id} data-test="movie">
                                <img src={movie.posterURL} />
                            </Link>
                        ))}
                    </MoviesWrapper>
                </HomeWrapper>
            ) : (
                <Loader />
            )}
        </>
    )
}

const HomeWrapper = styled.main`  
    height: calc(100vh - ${headerHeight});
`

const HomeTitle = styled.h1`
    font-family: 'Roboto';
    font-size: 24px;
    height: ${cineFlexHeight};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${cineFlexSimpleTextColor};
`

const MoviesWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: calc(calc(100vh - ${headerHeight}) - ${cineFlexHeight});
    overflow-y: scroll;
    > a {
        margin: 0px 20px 30px 20px;
        width: 145px;
        height: 209px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        > img {
            width: 129px;
            height: 193px;
        }
    }
`

