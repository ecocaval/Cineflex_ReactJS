import styled from "styled-components";
import { headerColor, CineFlexOrange } from "../styles/colors";

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
    height: 67px; /*Change After to match resposiveness */
    top: 0px;
    background-color: ${headerColor};
    > p {
        color: ${CineFlexOrange};
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 34px;
        text-align: center;
    }
`