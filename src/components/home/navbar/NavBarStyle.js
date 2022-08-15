import styled from "styled-components"

const NavBarWrapper = styled.nav `
position: relative;
width: 100%;
height: 80px;
background-color: #F5EAFB;
`

const Title = styled.h1 `
    font-family: "Rock Salt";
    font-size: 2.7rem;
    color: #450577;
    text-align: center;
    line-height: 1.7;
`
const Logo = styled.img `
    position: absolute;
    width: 60px;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
`
    export {NavBarWrapper, Title, Logo}