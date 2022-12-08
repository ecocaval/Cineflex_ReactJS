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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: calc(100vh - ${headerHeight});
    > img {
        width: 200px;
    }
`