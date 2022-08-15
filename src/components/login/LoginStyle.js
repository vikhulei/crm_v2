import VisibilityIcon from '@mui/icons-material/Visibility';
import styled from "styled-components"
import {Databox, Label, Input, RedText } from "../styled_components/StyledComponents"


const DataBoxLogin = styled(Databox) `
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
width: 500px;
height: 350px;
`
const FormLogin = styled.form `
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    text-align: center;

`

const LabelLogin = styled(Label) `
    position: relative;
    width: 100%;
    margin-bottom: 10px;
`

const InputLogin = styled(Input) `
    postion: absolute;
    width: 200px;
`

const RedTextLogin = styled(RedText) `
    margin: 30px 0 25px;
`
const Visibility = styled(VisibilityIcon) `
position: absolute;
right: 10px;
opacity: 0.7;
`

export {DataBoxLogin, FormLogin, LabelLogin, InputLogin, RedTextLogin, Visibility}