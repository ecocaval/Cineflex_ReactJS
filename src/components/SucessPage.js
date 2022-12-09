// libraries
import styled from "styled-components"

export default function SucessPage({seatsInfo, selectedSeats}) {
    return(
        <>
            <SucessMessage>Pedido feito com sucesso!</SucessMessage>
            <InfoSection>
                <div>
                    <h2></h2>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <h2></h2>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <h2></h2>
                    <p></p>
                    <p></p>
                </div>
            </InfoSection>
        </>
    )
}

const SucessMessage = styled.p`
`

const InfoSection = styled.section`
`