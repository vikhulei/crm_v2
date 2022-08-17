import VisibilityIcon from '@mui/icons-material/Visibility';
import styled from "styled-components"
import {DataBox, Label, Input, RedText } from "../../components/ui/StyledComponents"


const DataBoxLogin = styled(DataBox) `
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    height: 350px;
`
const FormLogin = styled.form `
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    text-align: center;

`

const LabelLogin = styled(Label) `
    // position: relative;
    width: 100%;
    margin-bottom: 10px;
    font-size: min(1.2rem, 4.5vw);
`

const InputLogin = styled(Input) `
    postion: absolute;
    width: 50vw;
    max-width: 200px;
`

const RedTextLogin = styled(RedText) `
    margin: 30px 0 25px;
`
const Visibility = styled(VisibilityIcon) `
position: absolute;
right: 10px;
opacity: 0.7;
transform: scale(0.8);
`

export {DataBoxLogin, FormLogin, LabelLogin, InputLogin, RedTextLogin, Visibility}