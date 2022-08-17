import styled from "styled-components"

const ButtonsWrapper = styled.div `
    width: 200px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 1050px) {
        // background-color: rgba(80,80,80,0.8);
        position: sticky;
        width: 100vw;
        max-width: 350px;
        height: 60px;
        flex-direction: row;
        justify-content: space-around;
        bottom: 20px;
        margin-top: -150px;
    }
`

export {ButtonsWrapper}