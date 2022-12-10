// libraries
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { cineFlexHeight, cineFlexOrange, cineFlexSimpleTextColor } from "../styles/colorsAndHeights";

export default function SucessPage({ seatsInfo, selectedSeatsNumbers, buyer, buyerCPF, setMovieInfo, setSeatsInfo, setSelectedSeatsIds, setSelectedSeatsNumbers, setBuyer, setBuyerCPF }) {

    const navigate = useNavigate()

    function goHome() {
        navigate("/")
        setMovieInfo([])
        setSeatsInfo([])
        setSelectedSeatsIds([])
        setSelectedSeatsNumbers([])
        setBuyer([])
        setBuyerCPF([])
    }

    return (
        <SucessPageWrapper>
            <SucessMessageWrapper>
                <SucessMessage>Pedido feito com sucesso!</SucessMessage>
            </SucessMessageWrapper>
            <InfoSection>
                <div>
                    <h2>Filme e sessão</h2>
                    <div>
                        <p>{seatsInfo.movie.title}</p>
                        <p>{seatsInfo.day.date} {seatsInfo.name}</p>
                    </div>
                </div>
                <div>
                    <h2>Ingressos</h2>
                    {selectedSeatsNumbers.map((seatN) => (
                        <p key={seatN}>Assento {seatN}</p>
                    ))}
                </div>
                <div>
                    <h2>Comprador</h2>
                    <p>Nome: {buyer}</p>
                    <p>CPF: {buyerCPF}</p>
                </div>
            </InfoSection>
            <GoHomeButton onClick={() => goHome()}>
                <p>Voltar pra Home</p>
            </GoHomeButton>
        </SucessPageWrapper>
    )
}

const SucessPageWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SucessMessageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 110px;
    padding: 0px 100px;
    margin-bottom: -1em;
`

const SucessMessage = styled.p`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.04em;
    color: #247A6B;
`

const InfoSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 80vw;
    > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        > h2 {
            font-family: 'Roboto';
            font-weight: 700;
            font-size: 22px;
            margin-top: 1em;
            margin-bottom: .5em;
            letter-spacing: 0.04em;
            color: #293845;
        }
        p {
            font-family: 'Roboto';
            font-size: 22px;
            letter-spacing: 0.04em;
            color: #293845;
        }
    }
`

const GoHomeButton = styled.button`
    width: 225px;
    height: 42px;
    background: ${cineFlexOrange};
    border-radius: 3px;
    border: none;
    margin-top: 3em;
    margin-bottom: 3em;
    > p {
        font-family: 'Roboto';
        font-size: 18px;
        color: #FFFFFF;
    }
`