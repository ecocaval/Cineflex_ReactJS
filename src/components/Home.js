// libraries
import { Link } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"

// variables 
import { headerHeight, cineFlexH1Color, cineFlexHeight } from "../styles/colorsAndHeights"
import Loader from "./Loader"

export default function Home(){

    const moviesUrl = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    const [moviesList, setMoviesList] = useState([])
    const moviesArrived = !(moviesList[0]===undefined)

    useEffect(() => {
        axios.get(moviesUrl)
            .then(res => {
                setMoviesList(res.data);
            })
            .catch( err => {
                console.error(err);
            })
    }, [])

    return (
        <>
            {moviesArrived ? (
                <HomeWrapper>
                    <h1>Selecione o Filme</h1>
                    <MoviesWrapper>
                        {moviesList.map(movie => (
                                <Link key={movie.id}>
                                    <img src={movie.posterURL}/>
                                </Link>
                            ))}
                    </MoviesWrapper>
                </HomeWrapper>
            ) : (
                <Loader/>
            )}
        </>        
    )
}

const HomeWrapper = styled.main`  
    height: calc(100vh - ${headerHeight});
    > h1 {
        font-family: 'Roboto';
        font-size: 24px;
        height: ${cineFlexHeight};
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: ${cineFlexH1Color};
    }
`

const MoviesWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 0 10vw 15px 10vw;
    justify-content: center;
    align-items: center;
    height: calc(calc(100vh - ${headerHeight}) - ${cineFlexHeight});
    overflow-y: scroll;
    > a {
        margin: 0px 20px 30px 20px;
        > img {
            width: 129px;
            height: 193px;
        }
    }
`

