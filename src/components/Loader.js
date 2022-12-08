import styled from "styled-components"
import loader from "./../assets/images/loader.png"
import { headerHeight } from "../styles/colorsAndHeights"

export default function Loader() {
    return (
        <LoaderWrapper>
            <img src={loader}/>
        </LoaderWrapper>
    )
}

const LoaderWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: calc(100vh - ${headerHeight});
    animation: loaderSpin 1s linear infinite;

    @keyframes loaderSpin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    > img {
        width: 120px;
    }
`