import {useState} from "react"
import { DataboxNav, SmallButton, RedText } from "../elements/Elements"
import { DataBoxLogin, FormLogin, LabelLogin, InputLogin, RedTextLogin, Visibility} from "./LoginStyle"

const Login = () => {
    const [visibility, setVisibility] = useState(false)
    return (
        <DataBoxLogin>
            <DataboxNav>Log In</DataboxNav>
            <FormLogin autoComplete="off">
                <LabelLogin htmlFor="username">Username:
                    <InputLogin type="text" id="username" />
                </LabelLogin>
                <LabelLogin htmlFor="login">Login:
                    <InputLogin type={visibility ? "text" : "password"} id="login" />
                    <Visibility onClick={(() => setVisibility(!visibility))}/>
                </LabelLogin>
                <RedTextLogin>Your username or password is not correct</RedTextLogin>
                <SmallButton>Sign In</SmallButton>
            </FormLogin>
        </DataBoxLogin>
    )
}

export default Login