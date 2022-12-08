import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function MovieSection() {
    const { idFilme } = useParams()
    const [movieHourInfo, setMovieHourInfo]  = useState({})

    console.log(idFilme);
    console.log("acessou o filme")

    const movieHourInfoUrl = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`

    useEffect(() => {
        axios.get(movieHourInfoUrl)
            .then(res => {
                setMovieHourInfo(res.data)
            })
    }, [])

    console.log(movieHourInfo);
    
    return(
        <>
        
        </>
    )
}