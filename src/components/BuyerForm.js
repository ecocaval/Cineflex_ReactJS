// libraries
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// variables 
import { cineFlexOrange, cineFlexSimpleTextColor } from "../styles/colorsAndHeights"

export default function BuyerForm({ selectedSeatsIds, setBuyer, setBuyerCPF, buyer, buyerCPF }) {

    const navigate = useNavigate()

    function sendSeatsRequest(event) {
        event.preventDefault();
        
        const sendSeatsUrl = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many"

        axios.post(sendSeatsUrl, {
            ids: selectedSeatsIds,
            name: buyer,
            cpf: buyerCPF,
        }).then(r => {
            console.log(r);
            navigate("/sucesso");
        }).catch(err => {
            console.log(err)
        });
    }

    return (
        <BuyerFormWrapper onSubmit={sendSeatsRequest}>
            <InputWrapper>
                <p>Nome do comprador:</p>
                <input
                    type="text"
                    placeholder="Digite seu nome..."
                    value={buyer}
                    onChange={e => setBuyer(e.target.value)}
                />
            </InputWrapper>
            <InputWrapper>
                <p>CPF do comprador:</p>
                <input
                    type="text"
                    placeholder="Digite seu CPF..."
                    value={buyerCPF}
                    onChange={e => setBuyerCPF(e.target.value)}
                />
            </InputWrapper>
            <BuyerFormButton type="submit">
                <p>Reservar assento(s)</p>
            </BuyerFormButton>
        </BuyerFormWrapper>
    )
}

const BuyerFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
`

const InputWrapper = styled.div`
    margin-bottom: 1em;
    > p {
        font-family: 'Roboto';;
        font-size: 18px;
        color: ${cineFlexSimpleTextColor};
        margin-bottom: 5px;
    }
    > input {
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        font-family: 'Roboto';
        font-style: italic;
        font-size: 18px;
        color: #000000;
        padding-left: 10px;
    }
`

const BuyerFormButton = styled.button`
    width: 225px;
    height: 42px;
    background: ${cineFlexOrange};
    border-radius: 3px;
    border: none;
    margin-top: 1.2em;
    margin-bottom: 2em;
    > p {
        font-family: 'Roboto';
        font-size: 18px;
        color: #FFFFFF;
    }
`