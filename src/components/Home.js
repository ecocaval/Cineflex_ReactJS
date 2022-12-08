import { Link } from "react-router-dom"
import styled from "styled-components"
import { headerHeight, cineFlexH1Color, cineFlexHeight } from "../styles/colorsAndHeights"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home(){

    const moviesUrl = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    const [moviesList, setMoviesList] = useState(undefined)

    useEffect(() => {
        axios.get(moviesUrl)
            .then(res => {
                setMoviesList(res.data);
            })
            .catch( err => {
                console.error(err);
            })
    }, [])

    const moviesArrived = moviesList !== undefined

    return (
        <HomeWrapper>
            <h1>Selecione o Filme</h1>
            <MoviesWrapper>
                {moviesArrived ? (
                    moviesList.map(movie => (
                        <Link key={movie.id}>
                            <img src={movie.posterURL}/>
                        </Link>
                    ))
                ) : (
                    <div>

                    </div>
                )}
            </MoviesWrapper>
        </HomeWrapper>
    )
}

const HomeWrapper = styled.main`  
    background-color: red; /*Remove after, debug only */
    height: calc(100vh - ${headerHeight});
    > h1 {
        font-family: 'Roboto';
        font-size: 24px;
        background-color: blue; /*Remove after, debug only */
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
    padding: 15px 10vw;
    justify-content: center;
    align-items: center;
    height: calc(calc(100vh - ${headerHeight}) - ${cineFlexHeight});
    overflow-y: scroll;
    background-color: green;
    > a {
        margin: 30px 20px;
        > img {
            background: red;
            width: 129px;
            height: 193px;
        }
    }
`

