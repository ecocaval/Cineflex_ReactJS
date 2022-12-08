import { useParams } from "react-router-dom"

export default function MovieSeatsSection() {
    
    const { idSessao } = useParams()

    console.log(idSessao);
    
    return (
        <>
        </>
    )
}