import styled from "styled-components";
import { headerColor, headerHeight, cineFlexOrange } from "../styles/colorsAndHeights";

export default function Navbar() {
    const headerTextContent = "CINEFLEX";
    return (
        <NavBarWrapper>
            <p>{headerTextContent}</p>
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${headerHeight}; /*Change After to match resposiveness */
    top: 0px;
    background-color: ${headerColor};
    > p {
        font-family: 'Roboto';
        color: ${cineFlexOrange};
        font-size: 34px;
        text-align: center;
    }
`