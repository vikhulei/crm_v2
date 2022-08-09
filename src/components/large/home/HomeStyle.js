import styled from "styled-components";

const Title = styled.h1 `
    font-family: arial;
    color: blue;
`

const BackgroundColor = styled.div `
position: absolute;
width: 100vw;
height: 100vh;
background-color: #BD9CE8;
`

const BackgroundImage = styled.img `
position: absolute;
width: 100%;
height: 100%;
object-fit: cover;
opacity: 0.4;
`

export {Title, BackgroundColor, BackgroundImage}