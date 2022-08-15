import styled from "styled-components"

// const Wrapper = styled.div `
//     position: absolute;
//     max-width: 95%;
//     width: 1200px;;
//     min-height: 100%;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     // @media screen and (max-width: 750px) {
//     //     flex-direction: column;
//     //     min-height: 90%;
//     // }
//     `

const Form = styled.form `
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100%;
`

const Label = styled.label `
display: flex;
justify-content: space-between;
width: 50%;
`

const Input = styled.input `
    height: 25px;
    width: 150px;
    padding-left: 5px;
    background-color: #F2E0FB;
    border: black 1px solid;
    border-radius: 5px;
    box-shadow: gray 0px 5px 5px;
`
const SmallButton = styled.button `
    width: 110px;
    height: 30px;
    color: white;
    background-color: #450577;
    border: black 1px solid;
    border-radius: 5px;
    box-shadow: black 0px 0px 8px;
`

const LargeButton = styled(SmallButton) `

`

const RedText = styled.p `
    color: #B70606;
    font-weight: 600;
`

const DataBox = styled.div `
    position: relative;
    width: 350px;
    height: 600px;
    background-color: #DECDE5;
    border: black 1px solid;
    border-radius: 20px;
    box-shadow: black 0px 0px 30px;
`

const DataBoxNav = styled.div `
    position: relative;
    width: 100%;
    height: 60px;
    border: black 1px solid;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: #6F04C3;
    color: white;
    text-align: center;
    line-height: 1.5;
    font-size: 2rem;
`

export {Form, Input, Label, SmallButton, LargeButton, RedText, DataBox, DataBoxNav}
