import styled from "styled-components";

const Wrapper = styled.div `
    position: absolute;
    width: 100vw;
    height: 100vh;
`

const BackgroundColor = styled.div `
position: absolute;
top: 80px;
bottom: 0;
width: 100%;
height: 500px;
min-height: calc(100vh - 80px);
background-color: #BD9CE8;
// @media screen and (max-width: 750px) {
//     height: 300vh;
// }
`

const BackgroundImage = styled.img `
position: absolute;
height: 100%;
width: 100%;
object-fit: cover;
opacity: 0.4;
`

export {Wrapper, BackgroundColor, BackgroundImage}